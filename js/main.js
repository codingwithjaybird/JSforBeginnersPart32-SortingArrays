// SORTING ARRAYS

// sort()
const luxuryCars = ["Lexus", "Mercedes", "BMW", "Audi"];
console.log(luxuryCars.sort());

// reverse()
const cars = ["Toyota", "Honda", "Ford", "Kia"];
cars.sort();
console.log(cars.reverse());

// Sorting Number Arrays

const mileage = [320, 500, 440, 360, 410];

// function(a, b) { return a - b }
// mileage.sort(function(a, b) { return a - b })

let ans1 = mileage.sort(function(a, b) { return a - b });
console.log(ans1);

