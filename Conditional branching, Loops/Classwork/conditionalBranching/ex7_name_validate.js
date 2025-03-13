function validateName(name) {
    return name.length >= 4 ? "Your name is valid" : "Invalid name";
}

console.log(validateName("Hovhannes")); 
console.log(validateName("Ayo")); 
console.log(validateName("Hayk")); 
