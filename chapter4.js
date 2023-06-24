// (https://eloquentjavascript.net/code#4) jacques journal

// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute
// the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

function range(a, b, step = 1) {
    const arr = []
    let num = a
    if (a < b) {
        while (num <= b) {
            arr.push(num)
            num += step
        }
    } 
    if (a > b) {
        while (num >= b) {
            arr.push(num)
            num -= step
        }
    } 
    return arr
}

function sum(array) {
    let summation = 0
    for (const arr of array) {
        summation += arr
    }
    return summation
}

// console.log(range(1, 10, 1));
// console.log(sum(range(1, 10, 1)));

// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.
// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster?

function reverse(array) {
    const newArray = []
    for (let index = 0; index < array.length; index++) {
        newArray[index] = array[array.length - index - 1]
    }
    return newArray
}

// console.log(reverse([1,2,3,5,4]));

function reverseArrayInPlace(array) {
    const arr = [...array]
    for (let index = 0; index < array.length; index++) {
        array[index] = arr[arr.length - index - 1]
    }
    return array
}

// console.log(reverseArrayInPlace([1,2,3,5,4,6,9,0]));