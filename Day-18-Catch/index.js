// fetch("https://restcountries.com/v2/all")
//      .then((response) => response.json())
//      .then((data) => {
//           data.forEach((country) => {
//                console.log("Country: " + country.name);
//                console.log("Capital: " + country.capital);
//                console.log("Language: " + country.languages[0].name);
//                console.log("Population: " + country.population);
//                console.log("Region: " + country.region);
//                console.log("-------------------");
//           });
//      })
// // Ülke, sermaye, dil, nüfus ve bölge adlarını getirdik

fetch("https://api.thecatapi.com/v1/breeds")
     .then((response) => response.json())
     .then((data) => {
          let catNames = data.map((cat) => cat.name);
          console.log(catNames);
     })
     .catch((error) => console.log(error));
/* Bu kod, fetch() fonksiyonunu kullanarak API'den verileri alır ve daha sonra .then() metodunu kullanarak verileri işler. .then() metodu, verileri alır ve daha sonra data değişkenine atar. data değişkeni, API'den dönen tüm kedi adlarını içeren bir dizidir. Dizi içinde dolaşarak, her kedi adını yazdırabilirsiniz. Eğer API ile bir hata oluşursa, .catch() metodu ile hata mesajını yazdırabilirsiniz.*/
