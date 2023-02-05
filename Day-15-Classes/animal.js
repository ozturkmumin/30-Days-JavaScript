class animal {
     constructor(Name, age, country, legs, colour) {
          this.Name = Name;
          this.age = age;
          this.country = country;
          this.colour = colour;
          this.legs = legs;
     }
     getFullName() {
          const fullName = this.Name;
          return fullName;
     }
     get getage() {
          return this.age;
     }
     get getcountry() {
          return this.country;
     }
     get getlegs() {
          return this.legs;
     }
     getAnimalInfo() {
          let fullName = this.getFullName();

          let info = `${fullName}  is ${this.age}. It's colour ${this.colour}, ${this.country}`;
          return info;
     }
}
const animal1 = new animal("Kangal", "4", "Türkiye", "4", "Brown"); // Hayvan değişkeni oluşturup classa entegre ettik
const animal2 = new animal("Pitbull", "2", "United States", "4", "Brown"); // Hayvan değişkeni oluşturup classa entegre ettik
const animal3 = new animal("Deneme", "1", "Deneme", "4", "Red", "Sivri"); /*Burada sivri adında bir özellik tanımladık 
böyle bir özellik olmadığı için  yöntemi geçersiz kıldık */
console.log(animal1.getAnimalInfo());
console.log(animal2.getAnimalInfo());
console.log(animal3.getAnimalInfo());
