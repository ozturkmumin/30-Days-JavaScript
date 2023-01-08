console.warn("This is a warning");
console.warn("You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!");
console.warn("Warning is different from error"); // Consola uyarı çıktısı verir

const countries = [
     ["Finland", "Helsinki"],
     ["Sweden", "Stockholm"],
     ["Norway", "Oslo"],
];
console.table(countries); // Countries dizisini tablo olarak consola yazdırdık

const users = [
     {
          name: "Asabeneh",
          title: "Programmer",
          country: "Finland",
          city: "Helsinki",
          age: 250,
     },
     {
          name: "Eyob",
          title: "Teacher",
          country: "Sweden",
          city: "London",
          age: 25,
     },
     {
          name: "Asab",
          title: "Instructor",
          country: "Norway",
          city: "Oslo",
          age: 22,
     },
     {
          name: "Matias",
          title: "Developer",
          country: "Denmark",
          city: "Copenhagen",
          age: 28,
     },
];
console.group(users); // Consola gruplandırdık
console.warn("Uyarı Mesajı");
console.error("Bu bir hata mesajıdır");
