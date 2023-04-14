var populationbtn = document.getElementById("population-btn");
var languagesbtn = document.getElementById("languages-btn");
var countries = document.getElementById("countries");
var languagescontainer = document.getElementById("languages-container");

populationbtn.addEventListener("click", function () {
     countries.style.display = "block";
     languagescontainer.style.display = "none";
});
languagesbtn.addEventListener("click", function () {
     languagescontainer.style.display = "block";
     countries.style.display = "none";
});
