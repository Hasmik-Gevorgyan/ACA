function isAlphabet(char) {
    if (typeof char !== 'string') return "Given value isn't string";
    if (char.length !== 1) return "Please enter a single character.";

    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return "Character is an ALPHABET.";
    } else {
        return "Character is NOT ALPHABET.";
    }
}

console.log(isAlphabet('a')); 
console.log(isAlphabet('5')); 
console.log(isAlphabet('F')); 
console.log(isAlphabet('FL')); 
console.log(isAlphabet(8)); 
