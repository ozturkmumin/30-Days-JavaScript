
const deneme = document.querySelector('input');
const log = document.getElementById('values');

deneme.addEventListener("input", (e) =>{
  log.textContent = e.target.value;
});

