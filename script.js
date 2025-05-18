$(document).ready(function () {
  const apiKey = "529d5802d42353195d7811e9875ca4c3"; // OpenWeatherMap API key
  let citiesList = [];

  // Load city list from JSON
  $.getJSON("city.list.json", function (data) {
    citiesList = data;
  });

  function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
  }

  function showError(message) {
    $("#errorMsg").text(message).show();
    $("#weatherResult").hide();
  }

  function clearError() {
    $("#errorMsg").hide();
  }

  function fetchWeatherById(cityId) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        clearError();
        $("#cityName").text(`${data.name}, ${data.sys.country}`);
        $("#temp").text(kelvinToCelsius(data.main.temp));
        $("#humidity").text(data.main.humidity);
        $("#windSpeed").text(data.wind.speed);
        $("#conditions").text(data.weather[0].description);

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        $("#weatherIcon")
          .attr("src", iconUrl)
          .attr("alt", data.weather[0].description);

        $("#weatherResult").show();
      })
      .catch((err) => {
        showError(err.message);
      });
  }

  function filterSuggestions(query) {
    const lowerQuery = query.toLowerCase();
    return citiesList
      .filter((city) => city.name.toLowerCase().startsWith(lowerQuery))
      .slice(0, 10);
  }

  function renderSuggestions(matches) {
    const suggestions = $("#suggestions");
    suggestions.empty();
    if (matches.length === 0) {
      suggestions.hide();
      return;
    }
    matches.forEach((city) => {
      const displayName = `${city.name}${
        city.state ? ", " + city.state : ""
      }, ${city.country}`;
      const item = $(
        `<li class="list-group-item list-group-item-action">${displayName}</li>`
      );
      item.on("click", function () {
        $("#cityInput").val(displayName);
        suggestions.hide();
        fetchWeatherById(city.id);
      });
      suggestions.append(item);
    });
    suggestions.show();
  }

  $("#cityInput").on("input", function () {
    const inputVal = $(this).val().trim();
    if (inputVal.length > 1) {
      const matches = filterSuggestions(inputVal);
      renderSuggestions(matches);
    } else {
      $("#suggestions").hide();
    }
  });

  $("#searchBtn").click(function () {
    const inputVal = $("#cityInput").val().trim().toLowerCase();
    const match = citiesList.find((city) =>
      `${city.name}${city.state}${city.country}`
        .toLowerCase()
        .includes(inputVal)
    );
    if (match) {
      fetchWeatherById(match.id);
    } else {
      showError("City not found in local list.");
    }
  });
});
