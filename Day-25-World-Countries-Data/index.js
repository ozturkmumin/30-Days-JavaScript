var population = document.getElementById("population-btn");
var languages = document.getElementById("languages");
var countries = document.getElementById("countries");
var languagescontainer = document.getElementById("languages-container");
population.addEventListener("click", () => {
     countries.style.display = "block";
     languagescontainer.style.display = "none";
});
languages.addEventListener("click", () => {
     countries.style.display = "none";
     languagescontainer.style.display = "block";
});
