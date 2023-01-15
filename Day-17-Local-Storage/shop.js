// Ürünleri saklamak için bir sepet oluşturalım
let shoppingCart = [];

// Ürünleri sepete eklemek için bir fonksiyon oluşturalım
function addToCart(product) {
     shoppingCart.push(product);
     // Sepeti localStorage'a kaydedelim
     localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

// Ürünleri sepetten silmek için bir fonksiyon oluşturalım
function removeFromCart(productId) {
     // Sepetteki ürünleri alalım
     shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
     // Ürünü sepetten silmek için filter() kullanalım
     shoppingCart = shoppingCart.filter((item) => item.id !== productId);
     // Sepeti localStorage'a kaydedelim
     localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}
