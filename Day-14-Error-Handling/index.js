try {
     let lastName = "Yetayeh";
     let fullName = fistName + " " + lastName;
} catch (err) {
     console.log("Name of the error", err.name);
     console.log("Error message", err.message);
} finally {
     console.log("In any case I will be executed");
}
// Try ve catch hatalı ifadeler için kullanılabilir
