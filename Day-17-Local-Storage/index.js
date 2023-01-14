const skills = ["HTML", "CSS", "JS", "React", "Node", "Pyhton"];
localStorage.setItem("skills", skills);
localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
console.log(localStorage);

const skills2 = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills2, 4);
localStorage.setItem("skills2", skillsJSON);

const MySkilss = ["Mümin", "Öztürk", "23", "HTML", "CSS", "JS"];
const skiljson = JSON.stringify(MySkilss, 6);
localStorage.setItem("MySkilss", skiljson);

// const student = {
//      name: "Tunç",
//      surname: "Yılmaz",
//      age: 34,
//      skills,
//      country: "Türkiye",
// };

// const objectjson = JSON.stringify(student, 5);
// localStorage.setItem("student", objectjson);

const personAccount = {
     name: "Harun",
     surname: "Tunç",
     age: 27,
     revenue: 15000,
     expense: 7000,
     totalmoney: 8000,
};

const Personjson = JSON.stringify(personAccount, 6);
localStorage.setItem("PersonAccount", Personjson);
