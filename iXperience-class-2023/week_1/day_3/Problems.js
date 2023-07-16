// Write a function that prints even numbers up to a given parameter ie: printEven(50)
function even_numbers(given){
    let arr = [];
    for (let i = 0; i < given; i+=2) {
        arr.push(i);
      }
    console.log('Even Numbers: '+ arr);
}


// problem 2
function fibonacci(length){
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= length; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

// problem 3
function array_average(arr){
    average = 0
    for (let i = 0; i <= arr.length; i++){
        average += arr[i]
    }
    console.log(average);
}

// problem 4
function array_maximum(arr){
    maximum = arr[0]
    for (let i = 0; i <= arr.length; i++){
        if (maximum < arr[i]){
            maximum = arr[i]
        }
    }
    console.log(maximum)
}

// problem 5
function array_minimum(arr){
    minimum = arr[0]
    for (let i = 0; i <= arr.length; i++){
        if (minimum > arr[i]){
            minimum = arr[i]
        }
    }
    console.log(minimum)
}

// problem 6
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    console.log(count);
}

// Write a function to add 2 numbers
function add(num1, num2){
    console.log(num1 + num2);
}


// Write a function to multiply 2 numbers
function multiply(num1, num2){
    console.log(num1 * num2);
}

// Write a function that takes in a city name and returns the city postal code 
function postal_code(city){
    switch (city) {
        case 'Shanghai':
          console.log('Postal Code: ' + 200000);
          break;
        case 'Toronto':
          console.log('Postal Code: M4Y0E6');
          break;
        default:
          console.log('None');
          break;
      }
}

// Given an array of strings, write a function to sort them alphabetically
function sort_alpha(arr){
    console.log(arr.sort((a, b) => a.localeCompare(b)));
}

// Given an array of numbers, write a function to sort them in either ASC or DESC order
function sort_num(arr, order){
    if (order === 'ASC') {
        console.log(arr.sort((a, b) => a - b));
      } else {
        console.log(arr.sort((a, b) => b - a));
      }
}

// Write a function that reverses a number, ie: takes in 1234, returns 4321
function sort_back(num){
    let reversed = num.split('').reverse().join('');
    console.log(reversed);
}

// Write a function that capitalises each word in a string
function captialises(str){
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    let complete = '';
    for (let i = 0; i < arr.length; i++) {
      complete += ' ' + arr[i];
    }
    console.log(complete);
}

// Write a function that returns the number of occurrences of a letter in a string, ie: returnOccurances(‘because’ , ‘e’) returns 2
function returnOccurances(str, letter){
    let total = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        total += 1;
      }
    }
    console.log(`${total}`);
}

// Given an array of strings, filter that array for a given string
function filterArrayString(arr, str){
    console.log(arr.filter((x) => x !== word));
}

// Given an array of numbers, filter that array for a given number
function filterArrayNumber(arr, num){
    console.log(arr.filter((x) => x !== number));
}

// Given an array of objects, filter that array by an objects id value
function filterId(arr, id){
    console.log(arr.filter((x) => x.id !== id));
}

// Given an array of objects, write a function that returns an object by id
function findById(arr, id) {
    console.log(arr.filter((x) => x.id === id));
}

// Write a function that prints todays date 
function todaysDate() {
    let now = new Date();
    let day = now.getUTCDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    console.log('Todays date: ' + day + '/' + (month + 1) + '/' + year);
  }

// Given an array of objects, Write a function that checks if an object contains a value that is higher then 10, console.log(a new array with all the objects that pass the test
function filterByLargerThenTen(arr, val) {
    console.log(arr.filter((x) => x.goals > val));
}