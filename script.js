var cityName = document.querySelectorAll(".city");
var temperature = document.querySelectorAll(".temperature");
var humidity = document.querySelectorAll(".humidity");
var windSpeed = document.querySelectorAll(".wind-speed");
var inputField = document.getElementById("input");
var submitBtn = document.getElementById("submit-btn");
var historylist = document.getElementById("history-list");

var API_Key = "327d22c404609fdb5dc253861270307b";

submitBtn.addEventListener("click", function () {
  for (let i = 0; i < 1; i++) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var btn = document.createElement("button");
    var br1 = document.createElement("br");

    historylist
      .appendChild(ul)
      .appendChild(li)
      .appendChild(btn)
      .appendChild(br1);
    btn.classList = "city-btn";
    li.setAttribute("id", "new-listEl");
    var newLi = document.getElementById("new-listEl");
    newLi.appendChild(br1);
    btn.innerHTML = inputField.value;
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        inputField.value +
        "&limit=5&appid=" +
        API_Key
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Weather Data \n----------");
        console.log(data);
        console.log[data[0]];
        var lat = [data[0].lat];
        localStorage.setItem("latitude", JSON.stringify(lat));
        var lat = JSON.parse(localStorage.getItem("latitude"));
        console.log(lat);
        console.log(localStorage.City_Name);
        var lon = [data[0].lon];
        localStorage.setItem("latitude", JSON.stringify(lon));
        var lat = JSON.parse(localStorage.getItem("longitude"));
        console.log(lon);
        console.log(localStorage.City_Name);
      });
  }
});
