// Sayfayı yenilediğimizde checkbox'un seçili olmasını sağlamak için:
window.onload = function () {
     // localStorage'dan seçili olup olmadığını alalım
     var isChecked = localStorage.getItem("isChecked");
     if (isChecked === "true") {
          document.getElementById("checkbox").checked = true;
     }
};

// Checkbox'un seçili olup olmadığını kaydetmek için:
function saveCheckbox() {
     var checkbox = document.getElementById("checkbox");
     localStorage.setItem("isChecked", checkbox.checked);
}
