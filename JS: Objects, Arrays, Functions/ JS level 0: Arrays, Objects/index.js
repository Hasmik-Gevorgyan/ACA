
// Write a JavaScript program to list the properties of a JavaScript object. (1)
let student = {
  name: "David Rayy",
  sclass : "VI",
  rollno : 12 
};

console.log(Object.keys(student));

// Write a JavaScript program to delete the rollno property from the following object. (2)
delete student.rollno;
console.log(student);

// Write a JavaScript program to get the length of a JavaScript object (3)
console.log(Object.keys(student).length);

//  Write a function that gets the object and key as arguments and checks if the key exists in the object. (4)
const checkKey = (obj, key) => {
  return obj.hasOwnProperty(key);
}
console.log(checkKey(student, 'name'));

// Write a JavaScript program to display the reading status (i.e. display book name, author name, and reading status) of the following books. (5)
// Use the alert function for this task
 
let library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }
];

// library.forEach(book => {
//   alert(`Book title: ${book.title}\nAuthor: ${book.author}\nReading status: ${book.readingStatus ? 'Already read' : 'Not read yet'}`);
// });

//  From Pairs. Write a method that returns an object composed of key-value pairs.
//  EX: Input [[a,2], [b,4], [c,6]] => Output {a: 2, b: 4, c: 6} (7)

const fromPairs = (arr) => {
  const obj = {};
  arr.forEach(pair => {
    obj[pair[0]] = pair[1];
  });
  return obj;
}

console.log(fromPairs([['a', 2], ['b', 4], ['c', 6]]));

// Compact. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, and null.
// EX: Input [1,2, null, 3, undefined, 4, false] => Output  [1,2,3,4] (8)

const compact = (arr) => {
  return arr.filter(item => item);
};
console.log(compact([1, 2, null, 3, undefined, 4, false]));

// Unique. Write a method that returns a duplicate-free array
// EX: Input [1,2,2,3,4,5,6,6] => Output  [1,2,3,4,5,6] (9)

const unique = (arr) => {
    return [...new Set(arr)];
};
console.log(unique([1, 2, 2, 3, 4, 5, 6, 6]));

// Write a function to create a new array from the given one but with the reversed order.
// EX: Input [1,2,3,4,5,6] => Output  [6,5,4,3,2,1]

const reverseArray = (arr) => {
    return arr.reverse();
};
console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// Write a program that creates two objects ‘A’ and ‘B’ from the given array, A object should collect items whose team is ‘A’, and the B object should collect items whose team is ‘B’ (11)
let teamsData = [
    { team: 'A', name: 'John', score: 12 },
    { team: 'B', name: 'Mary', score: 13 },
    { team: 'A', name: 'Karine', score: 15 },
    { team: 'A', name: 'Aram', score: 34 },
    { team: 'B', name: 'Davit', score: 12 },
    { team: 'B', name: 'Tigran', score: 39 },
    { team: 'A', name: 'Gayane', score: 9 },
    { team: 'B', name: 'Elina', score: 12 },
];

// 	Expected output: A = {'John':  12,  'Karine': 15, … };  B = {'Mary':  13,  'Davit': 12, …};

const A = {};
const B = {};

teamsData.forEach(item => {
    if (item.team === 'A') {
        A[item.name] = item.score;
    } else {
        B[item.name] = item.score;
    }
});

console.log(A, B);