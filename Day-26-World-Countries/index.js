function search() {
     // Input alanındaki değeri alalım
     var inputValue = document.getElementById("searchInput").value;
     // Sayfadaki tüm elementleri alalım
     var elements = document.getElementById("content").getElementsByTagName("*");
     // Her element için arama yapalım
     for (var i = 0; i < elements.length; i++) {
          if (elements[i].innerHTML.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
               elements[i].style.display = "block";
          } else {
               elements[i].style.display = "none";
          }
     }
}
