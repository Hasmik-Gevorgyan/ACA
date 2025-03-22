// Given an array of users
let users = [
    {
      "_id": "652fc67d17db3bd1697a946b",
      "isActive": true,
      "balance": "$3,999.74",
      "age": 24,
      "eyeColor": "blue",
      "name": "Winnie Zimmerman",
      "gender": "female",
      "company": "XANIDE",
      "email": "winniezimmerman@xanide.com"
    },
    {
      "_id": "652fc67d92a11e2882913da3",
      "isActive": true,
      "balance": "$1,216.67",
      "age": 29,
      "eyeColor": "blue",
      "name": "Hughes Dunn",
      "gender": "male",
      "company": "BULLZONE",
      "email": "hughesdunn@bullzone.com"
    },
    {
      "_id": "652fc67d372e0588bc141961",
      "isActive": true,
      "balance": "$2,993.51",
      "age": 21,
      "eyeColor": "brown",
      "name": "Martina Holland",
      "gender": "female",
      "company": "ISODRIVE",
      "email": "martinaholland@isodrive.com"
    },
    {
      "_id": "652fc67d788f80fb72b609a9",
      "isActive": false,
      "balance": "$3,575.38",
      "age": 31,
      "eyeColor": "green",
      "name": "Salazar Guerrero",
      "gender": "male",
      "company": "GEEKUS",
      "email": "salazarguerrero@geekus.com"
    },
    {
      "_id": "652fc67d24afb960a46e3385",
      "isActive": false,
      "balance": "$3,516.55",
      "age": 20,
      "eyeColor": "blue",
      "name": "Arline Hernandez",
      "gender": "female",
      "company": "PHOTOBIN",
      "email": "arlinehernandez@photobin.com"
    },
    {
      "_id": "652fc67d32621ff45ae32c12",
      "isActive": false,
      "balance": "$3,608.98",
      "age": 32,
      "eyeColor": "brown",
      "name": "Willis Wagner",
      "gender": "male",
      "company": "UNEEQ",
      "email": "williswagner@uneeq.com"
    },
    {
      "_id": "652fc67deec809b760d02a77",
      "isActive": true,
      "balance": "$2,900.10",
      "age": 34,
      "eyeColor": "green",
      "name": "Lee Hurst",
      "gender": "female",
      "company": "KENEGY",
      "email": "leehurst@kenegy.com"
    }
];
  
let user5 =   {
    "_id": "652fc67d92a11e2882df913da3",
    "isActive": true,
    "balance": "$1,416.67",
    "age": 30,
    "eyeColor": "blue",
    "name": "Hughes Finn",
    "gender": "male",
    "company": "BULLZONE",
    "email": "hughesfinn@bullzone.com"
};
  
// 1. Filter females from the array, whose age is below 30 (output should be an array).
const femalesBelow30 = users.filter(user =>  user.age < 30 && user.gender === "female");
console.log(femalesBelow30);

// 2. Create a new array consisting only of the users' names and emails.
const userNamesAndEmails = users.map(user => ({name: user.name, email: user.email}));
console.log(userNamesAndEmails);

// 3. Calculate the count of the users with blue eyes.
const countOfBlueEyes = users.filter(user => user.eyeColor === "blue").length;
console.log(countOfBlueEyes);

// 4. Find the richest user in the list
const richestUser = users.sort((a, b) => +b.balance.replace(/[$,]/g, "") - +a.balance.replace(/$,/g, ""))[0];
console.log(richestUser);

// 5. Create a new array consisting only of company names (as strings)
const companyNames = users.map(user => user.company);
console.log(companyNames);

// 6. Add user5 in the user's document to the beginning of the user's array
users.unshift(user5);
console.log(users);