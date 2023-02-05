document.body.addEventListener("keypress", (e) => {
     document.getElementById("presskey").innerHTML = e.key.toUpperCase() + " " + " " + "Bu karaktere tıkladın"; //Burada basılan key neyse onu ekrana yazdırdık
     document.getElementById("number").innerHTML = e.keyCode; // Burada ise basılan keyin code karşılığını ekrana yazdırdık
     console.log(e);
});
