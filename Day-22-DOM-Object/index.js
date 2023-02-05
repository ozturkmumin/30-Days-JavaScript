// let title;
// for (let i = 0; i < 3; i++) {
//      title = document.createElement("h1");
//      title.className = "title";
//      title.style.fontSize = "24px";
//      title.textContent = i;
//      document.body.appendChild(title);
// }
// var additem = document.createElement("p");
// additem.className = "paragraph";
// additem.style.fontSize = "22px";
// additem.textContent = "Merhaba";
// document.getElementsByTagName("div").appendChild(additem);
let newDiv = document.createElement("div");
let add = document.getElementById("myList");
newDiv.id = "newDiv";
newDiv.className = "myDiv";
newDiv.style.backgroundColor = "gray";
newDiv.innerHTML = "Hello, I am a new div";

// for (let i = 1; i <= 100; i++) {
//      let newDiv = document.createElement("div");
//      let appencontainer = document.getElementById("container");
//      if (i % 2 == 0) {
//           newDiv.style.backgroundColor = "green";
//      } else {
//           newDiv.style.backgroundColor = "yellow";
//      }
//      newDiv.innerHTML = i;
//      appencontainer.appendChild(newDiv);
// }
//100 adet div yazdırdık ve 100 adet divin herbirine 1-100 e kadar sayılar yazdırdık çift sayılara yeşil tek sayılara sarı rengini verdik

var pythonBtn = document.getElementById("python");
var pythonList = document.getElementById("python-list");
var javascriptBtn = document.getElementById("javascript");
var mobilbtn = document.getElementById("mobilbtn");
var javascriptlist = document.getElementById("javascript-list");
var htmlcss = document.getElementById("htmlcss");
var csslist = document.getElementById("css-list");
var mobillist = document.getElementById("mobile-list");
pythonBtn.addEventListener("click", function () {
     if (pythonList.style.display === "none") {
          pythonList.style.transition = "all 0.3s ease-in";
          pythonList.style.display = "block";
     } else {
          pythonList.style.display = "none";
     }
});
javascriptBtn.addEventListener("click", () => {
     if (javascriptlist.style.display === "none") {
          javascriptlist.style.display = "block";
     } else {
          javascriptlist.style.display = "none";
     }
});
mobilbtn.addEventListener("click", () => {
     if (mobillist.style.display === "none") {
          mobillist.style.display = "block";
     } else {
          mobillist.style.display = "none";
     }
});
htmlcss.addEventListener("mouseover", () => {
     if ((csslist.style.display = "none")) {
          csslist.style.display = "block";
     } else {
          csslist.style.display = "none";
     }
});
htmlcss.addEventListener("mouseout", () => {
     if ((csslist.style.display = "block")) {
          csslist.style.display = "none";
     }
});
