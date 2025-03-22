//1. Concatenate the two arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//2. Convert a long phrase to its acronym.
const convertToAcronym = (str) => {
    return str.split(' ').map(word => word[0]?.toUpperCase()).join('');
}
  
console.log(convertToAcronym('Prisoner of War')); // POW
console.log(convertToAcronym('Hello my name is')); // HMNI
console.log(convertToAcronym('Have a good night')); // WIT

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//3. Given a word, compute the scrabble score for the given word. To calculate scrabble score use the following table of scores:
const scores = ['aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz'];

const wordScore = (word) => {
    return word.split('').reduce((acc, letter) => {
        return acc + scores.findIndex(score => score.includes(letter)) + 1;
    }, 0);
}   

console.log(wordScore('hello'));
console.log(wordScore('world'));
console.log(wordScore('javascript'));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//4. Write a function which returns array of usernames.
const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
        age: 54,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
        age: 55,
    },
];

const getUserNames = (users) => {
    return users.map((user) => user.username);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//5. Write a function which returns array of lengths of user names
const getUserNamesLength = (users) => {
    return users.map((user) => user.username.length);
}

console.log(getUserNames(users));
console.log(getUserNamesLength(users));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//6. Write a function which parses string integers. If it's not possible to parse, then add null
const parseInteger = (array) => {
    return array.map(item => +item || null);
}

console.log(parseInteger(['1', '2', '34']));
console.log(parseInteger(['1', 'px', '2323']));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//7. Given an array, return a new array that only includes the numbers.
const filterNumbers = (array) => {
    return array.filter(item => typeof item === 'number' && !isNaN(item));
}

console.log(filterNumbers([1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN]));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//8. . Write a function which remove users with language equals to 'ru'.
const filterUsers = (users) => {
    return users.filter(user => user.lang !== 'ru');
}

console.log(filterUsers(users));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//9. Write a function which filters object by field.
const filterByField = (array, field) => {
    return array.filter(item => item[field]);
}

console.log(filterByField(users, 'isAstronaut'));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//10. Given an array, return the sum of numbers that are 18 or over.
const sumOver18 = (array) => {
    return array.reduce((acc, item) => {
        return item >= 18 ? acc + item : acc;
    }, 0);
}

console.log(sumOver18([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//11. Write a function which calculates average age of users.
const averageAge = (users) => {
    return users.reduce((acc, user) => {
        return acc + user.age;
    }, 0) / users.length;
}

console.log(averageAge(users));

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//12. Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.
const sortBy = (array, order) => {
    return array.sort((a,b) => order === 'Desc' ? b - a : a - b);
}

console.log(sortBy([4, 3, 2, 1], 'Asc'));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));