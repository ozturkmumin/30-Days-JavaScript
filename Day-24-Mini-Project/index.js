const inputKilogram = document.getElementById("inputkilogram");
const calculateBtn = document.getElementById("Calculatebtn");
const selectPlanet = document.getElementById("Planet");
const output = document.getElementById("output");
calculateBtn.addEventListener("click", function () {
     const planet = selectPlanet.value;
     const mass = inputKilogram.value;

     let weight;

     switch (planet) {
          case "Mercury":
               weight = mass * 0.378;
               break;
          case "Venus":
               weight = mass * 0.907;
               break;
          case "Earth":
               weight = mass;
               break;
          case "Mars":
               weight = mass * 0.377;
               break;
          case "Jupiter":
               weight = mass * 2.528;
               break;
          case "Saturn":
               weight = mass * 1.065;
               break;
          case "Uranus":
               weight = mass * 0.917;
               break;
          case "Neptune":
               weight = mass * 1.148;
               break;
          case "Pluto":
               weight = mass * 0.06;
               break;
          default:
               weight = "Invalid planet";
               break;
     }
     output.innerHTML = weight;
});
