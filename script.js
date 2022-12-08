var city = document.getElementById("city-name");
var inputField = document.getElementById("input");
var submitBtn = document.getElementById("submit-btn");
var historylist = document.getElementById("history-list");
var currentDateEl = document.getElementById("current-date");
var date1 = document.getElementById("date-1");
var date2 = document.getElementById("date-2");
var date3 = document.getElementById("date-3");
var date4 = document.getElementById("date-4");
var date5 = document.getElementById("date-5");
var tempEl = document.getElementById("temperature");
var temp1El = document.getElementById("temperature-1");
var temp2El = document.getElementById("temperature-2");
var temp3El = document.getElementById("temperature-3");
var temp4El = document.getElementById("temperature-4");
var temp5El = document.getElementById("temperature-5");
var windSpeedEl = document.getElementById("wind-speed");
var windSpeed1El = document.getElementById("wind-speed-1");
var windSpeed2El = document.getElementById("wind-speed-2");
var windSpeed3El = document.getElementById("wind-speed-3");
var windSpeed4El = document.getElementById("wind-speed-4");
var windSpeed5El = document.getElementById("wind-speed-5");
var humidityEl = document.getElementById("humidity");
var humidity1El = document.getElementById("humidity-1");
var humidity2El = document.getElementById("humidity-2");
var humidity3El = document.getElementById("humidity-3");
var humidity4El = document.getElementById("humidity-4");
var humidity5El = document.getElementById("humidity-5");
var iconEl = document.getElementById("icon");
var iconEl1 = document.getElementById("icon-1");
var iconEl2 = document.getElementById("icon-2");
var iconEl3 = document.getElementById("icon-3");
var iconEl4 = document.getElementById("icon-4");
var iconEl5 = document.getElementById("icon-5");
var cityBtn = document.querySelectorAll("city-btn");
var currentDate = new Date();
var cDay = currentDate.getDate();
var cMonth = currentDate.getMonth() + 1;
var cYear = currentDate.getFullYear();
var monthFormatted = cMonth + "-" + cYear;
currentDateEl.innerHTML = cDay + "-" + monthFormatted;
date1.innerHTML = cDay + 1 + "-" + monthFormatted;
date2.innerHTML = cDay + 2 + "-" + monthFormatted;
date3.innerHTML = cDay + 3 + "-" + monthFormatted;
date4.innerHTML = cDay + 4 + "-" + monthFormatted;
date5.innerHTML = cDay + 5 + "-" + monthFormatted;

var API_Key = "327d22c404609fdb5dc253861270307b";

window.onload = function () {
  city.innerHTML = "Minneapolis";
  console.log("annnoying");
  var lat = [44.986656];
  localStorage.setItem("latitude", JSON.stringify(lat));
  var lat = JSON.parse(localStorage.getItem("latitude"));
  ///////////////////////////////////////////////////////
  var lon = [-93.258133];
  localStorage.setItem("longitude", JSON.stringify(lon));
  var lon = JSON.parse(localStorage.getItem("longitude"));
  ///////////////////////////////////////////////////////
  var cityname = ["Minneapolis"];
  localStorage.setItem("City_Name", JSON.stringify(cityname));
  var cityname = JSON.parse(localStorage.getItem("City_Name"));
  console.log(localStorage);
  ///////////////////////////////////////////////////////
  var textInput = [""];
  localStorage.setItem("Text_Input", JSON.stringify(textInput));
  var cityname = JSON.parse(localStorage.getItem("Text_Input"));
  console.log(localStorage);
  var staticInfo = JSON.parse(localStorage.City_Name);
  console.log(staticInfo);
  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      staticInfo[0] +
      "&limit=5&appid=" +
      API_Key
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Lat and Lon \n----------");
      console.log(data);
      var lat = [data[0].lat];
      localStorage.setItem("latitude", JSON.stringify(lat));
      var lat = JSON.parse(localStorage.getItem("latitude"));
      ///////////////////////////////////////////////////////
      var lon = [data[0].lon];
      localStorage.setItem("longitude", JSON.stringify(lon));
      var lon = JSON.parse(localStorage.getItem("longitude"));
      ///////////////////////////////////////////////////////
      var cityname = [data[0].name];
      localStorage.setItem("City_Name", JSON.stringify(cityname));
      var cityname = JSON.parse(localStorage.getItem("City_Name"));
      console.log(localStorage);
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          API_Key +
          "&units=metric"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("weather Data \n----------");
          console.log(data.list);

          var temp = data.list[0].main.temp;
          var temp1 = data.list[1].main.temp;
          var temp2 = data.list[2].main.temp;
          var temp3 = data.list[3].main.temp;
          var temp4 = data.list[4].main.temp;
          var temp5 = data.list[5].main.temp;
          tempEl.innerHTML = "Temp: " + temp + " C°";
          temp1El.innerHTML = "Temp: " + temp1 + " C°";
          temp2El.innerHTML = "Temp: " + temp2 + " C°";
          temp3El.innerHTML = "Temp: " + temp3 + " C°";
          temp4El.innerHTML = "Temp: " + temp4 + " C°";
          temp5El.innerHTML = "Temp: " + temp5 + " C°";
          var humidity = data.list[0].main.humidity;
          var humidity1 = data.list[1].main.humidity;
          var humidity2 = data.list[2].main.humidity;
          var humidity3 = data.list[3].main.humidity;
          var humidity4 = data.list[4].main.humidity;
          var humidity5 = data.list[5].main.humidity;
          humidityEl.innerHTML = "Humidity: " + humidity + " %";
          humidity1El.innerHTML = "Humidity: " + humidity1 + " %";
          humidity2El.innerHTML = "Humidity: " + humidity2 + " %";
          humidity3El.innerHTML = "Humidity: " + humidity3 + " %";
          humidity4El.innerHTML = "Humidity: " + humidity4 + " %";
          humidity5El.innerHTML = "Humidity: " + humidity5 + " %";
          var windSpeed = data.list[0].wind.speed;
          var windSpeed1 = data.list[1].wind.speed;
          var windSpeed2 = data.list[2].wind.speed;
          var windSpeed3 = data.list[3].wind.speed;
          var windSpeed4 = data.list[4].wind.speed;
          var windSpeed5 = data.list[5].wind.speed;
          windSpeedEl.innerHTML = "Wind Speed: " + windSpeed + " kmH";
          windSpeed1El.innerHTML = "Wind Speed: " + windSpeed1 + " kmH";
          windSpeed2El.innerHTML = "Wind Speed: " + windSpeed2 + " kmH";
          windSpeed3El.innerHTML = "Wind Speed: " + windSpeed3 + " kmH";
          windSpeed4El.innerHTML = "Wind Speed: " + windSpeed4 + " kmH";
          windSpeed5El.innerHTML = "Wind Speed: " + windSpeed5 + " kmH";
          var icon = data.list[0].weather[0].icon;
          var icon1 = data.list[1].weather[0].icon;
          var icon2 = data.list[2].weather[0].icon;
          var icon3 = data.list[3].weather[0].icon;
          var icon4 = data.list[4].weather[0].icon;
          var icon5 = data.list[5].weather[0].icon;
          console.log(icon1);
          iconEl.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon + "@2x.png"
          );
          iconEl1.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon1 + "@2x.png"
          );
          iconEl2.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon2 + "@2x.png"
          );
          iconEl3.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon3 + "@2x.png"
          );
          iconEl4.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon4 + "@2x.png"
          );
          iconEl5.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon5 + "@2x.png"
          );
        });
    });
};
console.log(localStorage.Text_Input);
function theMove() {
  localStorage.clear;
  var textInput = [inputField.value];
  localStorage.setItem("Text_Input", JSON.stringify(textInput));
  var cityname = JSON.parse(localStorage.getItem("Text_Input"));
  console.log(localStorage);
  var textInput = JSON.parse(localStorage.Text_Input);
  console.log(textInput[0]);
  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      JSON.parse(localStorage.Text_Input)[0] +
      "&limit=5&appid=" +
      API_Key
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Lat and Lon \n----------");
      console.log(data);
      console.log(data[0].lat);
      var lat = [data[0].lat];
      localStorage.setItem("latitude", JSON.stringify(lat));
      var lat = JSON.parse(localStorage.getItem("latitude"));
      ///////////////////////////////////////////////////////
      var lon = [data[0].lon];
      localStorage.setItem("longitude", JSON.stringify(lon));
      var lon = JSON.parse(localStorage.getItem("longitude"));
      ///////////////////////////////////////////////////////
      var cityname = [data[0].name];
      localStorage.setItem("City_Name", JSON.stringify(cityname));
      var cityname = JSON.parse(localStorage.getItem("City_Name"));
      console.log(localStorage);
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          API_Key +
          "&units=metric"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("weather Data \n----------");
          console.log(data.list);

          var temp = data.list[0].main.temp;
          var temp1 = data.list[1].main.temp;
          var temp2 = data.list[2].main.temp;
          var temp3 = data.list[3].main.temp;
          var temp4 = data.list[4].main.temp;
          var temp5 = data.list[5].main.temp;
          tempEl.innerHTML = "Temp: " + temp + " C°";
          temp1El.innerHTML = "Temp: " + temp1 + " C°";
          temp2El.innerHTML = "Temp: " + temp2 + " C°";
          temp3El.innerHTML = "Temp: " + temp3 + " C°";
          temp4El.innerHTML = "Temp: " + temp4 + " C°";
          temp5El.innerHTML = "Temp: " + temp5 + " C°";
          var humidity = data.list[0].main.humidity;
          var humidity1 = data.list[1].main.humidity;
          var humidity2 = data.list[2].main.humidity;
          var humidity3 = data.list[3].main.humidity;
          var humidity4 = data.list[4].main.humidity;
          var humidity5 = data.list[5].main.humidity;
          humidityEl.innerHTML = "Humidity: " + humidity + " %";
          humidity1El.innerHTML = "Humidity: " + humidity1 + " %";
          humidity2El.innerHTML = "Humidity: " + humidity2 + " %";
          humidity3El.innerHTML = "Humidity: " + humidity3 + " %";
          humidity4El.innerHTML = "Humidity: " + humidity4 + " %";
          humidity5El.innerHTML = "Humidity: " + humidity5 + " %";
          var windSpeed = data.list[0].wind.speed;
          var windSpeed1 = data.list[1].wind.speed;
          var windSpeed2 = data.list[2].wind.speed;
          var windSpeed3 = data.list[3].wind.speed;
          var windSpeed4 = data.list[4].wind.speed;
          var windSpeed5 = data.list[5].wind.speed;
          windSpeedEl.innerHTML = "Wind Speed: " + windSpeed + " kmH";
          windSpeed1El.innerHTML = "Wind Speed: " + windSpeed1 + " kmH";
          windSpeed2El.innerHTML = "Wind Speed: " + windSpeed2 + " kmH";
          windSpeed3El.innerHTML = "Wind Speed: " + windSpeed3 + " kmH";
          windSpeed4El.innerHTML = "Wind Speed: " + windSpeed4 + " kmH";
          windSpeed5El.innerHTML = "Wind Speed: " + windSpeed5 + " kmH";
          var icon = data.list[0].weather[0].icon;
          var icon1 = data.list[1].weather[0].icon;
          var icon2 = data.list[2].weather[0].icon;
          var icon3 = data.list[3].weather[0].icon;
          var icon4 = data.list[4].weather[0].icon;
          var icon5 = data.list[5].weather[0].icon;
          console.log(icon1);
          iconEl.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon + "@2x.png"
          );
          iconEl1.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon1 + "@2x.png"
          );
          iconEl2.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon2 + "@2x.png"
          );
          iconEl3.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon3 + "@2x.png"
          );
          iconEl4.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon4 + "@2x.png"
          );
          iconEl5.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon5 + "@2x.png"
          );

          var cityName = JSON.parse(localStorage.City_Name);
          city.innerHTML = cityName[0];
          for (let i = 0; i < 1; i++) {
            var ul = document.createElement("ul");
            var li = document.createElement("li");
            var btn = document.createElement("button");
            var br = document.createElement("br");

            historylist
              .appendChild(ul)
              .appendChild(li)
              .appendChild(btn)
              .appendChild(br);
            btn.classList = "city-btn";
            li.setAttribute("id", "new-listEl");
            var cityName = JSON.parse(localStorage.City_Name);
            btn.innerHTML = cityName[0];
            var deleteBtn = document.querySelector(".delete-btn");
            var historylistElements = document.querySelectorAll(".city-btn");
            console.log(historylistElements);

            if (historylistElements.length === 5) {
              submitBtn.disabled = true;
            }
            btn.addEventListener("click", function () {
              fetch(
                "https://api.openweathermap.org/geo/1.0/direct?q=" +
                  btn.innerHTML +
                  "&limit=5&appid=" +
                  API_Key
              )
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.log("Lat and Lon \n----------");
                  console.log(data);
                  console.log(data[0].lat);
                  var lat = [data[0].lat];
                  city.innerHTML = data[0].name;
                  localStorage.setItem("latitude", JSON.stringify(lat));
                  var lat = JSON.parse(localStorage.getItem("latitude"));
                  ///////////////////////////////////////////////////////
                  var lon = [data[0].lon];
                  localStorage.setItem("longitude", JSON.stringify(lon));
                  var lon = JSON.parse(localStorage.getItem("longitude"));
                  ///////////////////////////////////////////////////////
                  var cityname = [data[0].name];
                  localStorage.setItem("City_Name", JSON.stringify(cityname));
                  var cityname = JSON.parse(localStorage.getItem("City_Name"));
                  console.log(localStorage);
                  fetch(
                    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
                      lat +
                      "&lon=" +
                      lon +
                      "&appid=" +
                      API_Key +
                      "&units=metric"
                  )
                    .then(function (response) {
                      return response.json();
                    })
                    .then(function (data) {
                      console.log("weather Data \n----------");
                      console.log(data.list);
                      var temp = data.list[0].main.temp;
                      var temp1 = data.list[1].main.temp;
                      var temp2 = data.list[2].main.temp;
                      var temp3 = data.list[3].main.temp;
                      var temp4 = data.list[4].main.temp;
                      var temp5 = data.list[5].main.temp;
                      tempEl.innerHTML = "Temp: " + temp + " C°";
                      temp1El.innerHTML = "Temp: " + temp1 + " C°";
                      temp2El.innerHTML = "Temp: " + temp2 + " C°";
                      temp3El.innerHTML = "Temp: " + temp3 + " C°";
                      temp4El.innerHTML = "Temp: " + temp4 + " C°";
                      temp5El.innerHTML = "Temp: " + temp5 + " C°";
                      var humidity = data.list[0].main.humidity;
                      var humidity1 = data.list[1].main.humidity;
                      var humidity2 = data.list[2].main.humidity;
                      var humidity3 = data.list[3].main.humidity;
                      var humidity4 = data.list[4].main.humidity;
                      var humidity5 = data.list[5].main.humidity;
                      humidityEl.innerHTML = "Humidity: " + humidity + " %";
                      humidity1El.innerHTML = "Humidity: " + humidity1 + " %";
                      humidity2El.innerHTML = "Humidity: " + humidity2 + " %";
                      humidity3El.innerHTML = "Humidity: " + humidity3 + " %";
                      humidity4El.innerHTML = "Humidity: " + humidity4 + " %";
                      humidity5El.innerHTML = "Humidity: " + humidity5 + " %";
                      var windSpeed = data.list[0].wind.speed;
                      var windSpeed1 = data.list[1].wind.speed;
                      var windSpeed2 = data.list[2].wind.speed;
                      var windSpeed3 = data.list[3].wind.speed;
                      var windSpeed4 = data.list[4].wind.speed;
                      var windSpeed5 = data.list[5].wind.speed;
                      windSpeedEl.innerHTML =
                        "Wind Speed: " + windSpeed + " kmH";
                      windSpeed1El.innerHTML =
                        "Wind Speed: " + windSpeed1 + " kmH";
                      windSpeed2El.innerHTML =
                        "Wind Speed: " + windSpeed2 + " kmH";
                      windSpeed3El.innerHTML =
                        "Wind Speed: " + windSpeed3 + " kmH";
                      windSpeed4El.innerHTML =
                        "Wind Speed: " + windSpeed4 + " kmH";
                      windSpeed5El.innerHTML =
                        "Wind Speed: " + windSpeed5 + " kmH";
                      var icon = data.list[0].weather[0].icon;
                      var icon1 = data.list[1].weather[0].icon;
                      var icon2 = data.list[2].weather[0].icon;
                      var icon3 = data.list[3].weather[0].icon;
                      var icon4 = data.list[4].weather[0].icon;
                      var icon5 = data.list[5].weather[0].icon;
                      console.log(icon1);
                      iconEl.setAttribute(
                        "src",
                        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
                      );
                      iconEl1.setAttribute(
                        "src",
                        "https://openweathermap.org/img/wn/" + icon1 + "@2x.png"
                      );
                      iconEl2.setAttribute(
                        "src",
                        "https://openweathermap.org/img/wn/" + icon2 + "@2x.png"
                      );
                      iconEl3.setAttribute(
                        "src",
                        "https://openweathermap.org/img/wn/" + icon3 + "@2x.png"
                      );
                      iconEl4.setAttribute(
                        "src",
                        "https://openweathermap.org/img/wn/" + icon4 + "@2x.png"
                      );
                      iconEl5.setAttribute(
                        "src",
                        "https://openweathermap.org/img/wn/" + icon5 + "@2x.png"
                      );
                    });
                });
            });
            deleteBtn.addEventListener("click", function () {
              deleteBtn.classList = "delete-btn hidden";
              ul.remove();
              submitBtn.disabled = false;
            });
          }
        });
    });
}

submitBtn.addEventListener("click", function (event) {
  theMove();
  document.getElementById("delete-btn").classList = "delete-btn show";
});
