var cityName = document.querySelectorAll(".city");
var temperature = document.querySelectorAll(".temperature");
var humidity = document.querySelectorAll(".humidity");
var windSpeed = document.querySelectorAll(".wind-speed");
var inputField = document.getElementById("input");
var submitBtn = document.getElementById("submit-btn");
var historylist = document.getElementById("history-list");

var API_Key = "327d22c404609fdb5dc253861270307b";

submitBtn.addEventListener("click", function () {
  var inputFieldValue = [inputField.value];
  localStorage.setItem("City_Name", JSON.stringify(inputFieldValue));
  var inputFieldValue = JSON.parse(localStorage.getItem("City_Name"));
  console.log(localStorage.City_Name);
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
    btn.innerHTML = localStorage.City_Name;
  }
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      localStorage.City_Name +
      "&limit=5&appid=" +
      API_Key
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Weather Data \n----------");
      console.log(data);
    });
});
