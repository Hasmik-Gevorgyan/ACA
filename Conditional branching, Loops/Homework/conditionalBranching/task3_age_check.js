function getAgeCategory(age, unit) {
    if(unit === 'months' && (age < 1 || age > 12)) return "Age in months must be between 1 and 12";

    if(unit === 'months') return 'baby';
    if(age >= 1 && age <= 2) return 'toddler';
    if(age >= 3 && age <= 12) return 'child';
    if(age >= 13 && age <= 17) return 'teenager';
    return 'adult';
}

console.log(getAgeCategory(8, 'months'))
console.log(getAgeCategory(45, 'years'))
console.log(getAgeCategory(15, 'years'))
console.log(getAgeCategory(3, 'years'))