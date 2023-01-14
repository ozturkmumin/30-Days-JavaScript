const acity = document.querySelector("#A-city");
const acityJSON = JSON.stringify(acity);
localStorage.setItem("acity", acityJSON);
console.log(localStorage);
document.addEventListener("DOMContentLoaded", function () {
     var checkbox = document.getElementById("A-city");
     if (checkbox) {
          checkbox.addEventListener("click", function () {
               if (this.checked) {
                    localStorage.setItem("checkbox", this.value);
               }
          });
     }
});
