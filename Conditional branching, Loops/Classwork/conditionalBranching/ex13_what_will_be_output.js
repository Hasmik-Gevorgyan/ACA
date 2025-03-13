console.log(true && null || true); // true
console.log(5 > 3 && 10 <= 20 || false); // true
console.log((7 + 3 === 10) && (true || false)); // true
console.log(false || true && (5 !== '5')); // true
console.log((4 < 6 || 10 >= 15) && true); // true
console.log((8 === 8 || 9 !== '9') && false); // false
console.log(true && (null || 189) || false); // 189
console.log((3 === 3 || NaN) && (true && true)); // true
console.log(true || (7 < 5 && 10 >= 11)); // true
console.log((20 <= 20 && 3 > 1) || (false && true)); //true
console.log((9 >= 10 || 15 < 20) && (12 || false)); // 12
console.log((5 + 5 == '10') && (89 || null)); // 89
console.log(true && (false || true) || false); // true
console.log((6 == '6' && true) || (false && true)); // true
console.log((10 < 5 || 20 >= 15) && true); // true
console.log((3 === '3' && 567) || (undefined || (5 > 10 && (20 <= 30 || true)))); // false
console.log(((5 === 5 || false) && (true && (10 !== 20 || (30 >= 40 && false))))); // true
console.log((true || (false && (true || (10 === 5 && (20 > 15 || false))))) && (3 < 5 || 0)); // true
console.log(((7 >= 5 && true) || (false || (10 === 10 && (20 < 15 || true)))) && (false || true)); // true
console.log(((true || (false && (true || (5 !== 5 && (10 > 15 || false))))) && (3 <= 5 || false)) || (true &&
(false || (3 > 1 && (true || false))))); // true