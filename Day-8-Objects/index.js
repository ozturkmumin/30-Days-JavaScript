const dog = {
     name: "Fino",
     legs: 4,
     color: "brown",
     age: 3,
     type: "getDogInfo",
};

const personal = {
     name: "Mümin",
     surname: "Öztürk",
     skilss: "Css3, Javascript ,HTML5",
     age: 23,
};
const personal2 = {
     name: "Alperen",
     surname: "Bayraktar",
     skilss: "Pyhton",
     age: 22,
};

const user1 = {
     Alex: {
          email: "alex@alex.com",
          skills: ["HTML", "CSS", "JavaScript"],
          age: 20,
          isLoggedIn: false,
          points: 30,
     },
     Asab: {
          email: "asab@asab.com",
          skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
          age: 25,
          isLoggedIn: false,
          points: 50,
     },
     Brook: {
          email: "daniel@daniel.com",
          skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
          age: 30,
          isLoggedIn: true,
          points: 50,
     },
     Daniel: {
          email: "daniel@alex.com",
          skills: ["HTML", "CSS", "JavaScript", "Python"],
          age: 20,
          isLoggedIn: false,
          points: 40,
     },
     John: {
          email: "john@john.com",
          skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
          age: 20,
          isLoggedIn: true,
          points: 50,
     },
     Thomas: {
          email: "thomas@thomas.com",
          skills: ["HTML", "CSS", "JavaScript", "React"],
          age: 20,
          isLoggedIn: false,
          points: 40,
     },
     Paul: {
          email: "paul@paul.com",
          skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
          age: 20,
          isLoggedIn: false,
          points: 40,
     },
};

const country = {
     country: "Ethiopia",
     contrymoney: 25 + "M" + "" + "$",
     People: 10 + "M",
};
const personAccount = {
     FirstName: "Mümin",
     LastName: "Öztürk",
     Money: "10$",
};

const users = [
     {
          _id: "ab12ex",
          username: "Alex",
          email: "alex@alex.com",
          password: "123123",
          createdAt: "08/01/2020 9:00 AM",
          isLoggedIn: false,
     },
     {
          _id: "fg12cy",
          username: "Asab",
          email: "asab@asab.com",
          password: "123456",
          createdAt: "08/01/2020 9:30 AM",
          isLoggedIn: true,
     },
     {
          _id: "zwf8md",
          username: "Brook",
          email: "brook@brook.com",
          password: "123111",
          createdAt: "08/01/2020 9:45 AM",
          isLoggedIn: true,
     },
     {
          _id: "eefamr",
          username: "Martha",
          email: "martha@martha.com",
          password: "123222",
          createdAt: "08/01/2020 9:50 AM",
          isLoggedIn: false,
     },
     {
          _id: "ghderc",
          username: "Thomas",
          email: "thomas@thomas.com",
          password: "123333",
          createdAt: "08/01/2020 10:00 AM",
          isLoggedIn: false,
     },
];

const products = [
     {
          _id: "eedfcf",
          name: "mobile phone",
          description: "Huawei Honor",
          price: 200,
          ratings: [
               { userId: "fg12cy", rate: 5 },
               { userId: "zwf8md", rate: 4.5 },
          ],
          likes: [],
     },
     {
          _id: "aegfal",
          name: "Laptop",
          description: "MacPro: System Darwin",
          price: 2500,
          ratings: [],
          likes: ["fg12cy"],
     },
     {
          _id: "hedfcg",
          name: "TV",
          description: "Smart TV:Procaster",
          price: 400,
          ratings: [{ userId: "fg12cy", rate: 5 }],
          likes: ["fg12cy"],
     },
];

const controlobject = () => {
     let check = users[1].username;
     if (check == "") {
          alert("Have a users");
     }
     return check;
};
function myFunction() {
     var x = document.getElementById("myInput").value;
     document.getElementById("demo").innerHTML = x;
     if (x == controlobject()) {
          alert("Böyle bir Kullanıcı adı var");
     }
}
const rateProduct = () => {
     let point = products[1].ratings;
     if ((point) => 5) {
          console.log("Puanı gayet iyi");
     } else {
          console.log("kötü");
     }
     return point;
};

console.log(dog);
console.log(personal.skilss, personal2.skilss);
console.log(personal);
console.log(users.Asab);
console.log(users.Brook);
console.log(users.Daniel);
console.log(users.John);
console.log(users.Thomas);
console.log(users.Paul);
console.log([users[0].email, users[1].email, users[2].email, users[3].email]); // users nesnesinin içerisindeki kullanıcıların mail adreslerini çektim
console.log(country);
console.log(personAccount);
console.log(controlobject()); // Böyle bir kullanıcı varmı kontrol ettik
console.log(rateProduct()); // Ürünlerin puanlamasını yaptık
