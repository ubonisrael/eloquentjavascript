// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// solution
function triangleHatch() {
    let hatch = '#'
    for (let i = 0; i < 7; i++) {
        console.log(hatch);
        hatch += '#'
    }
    return hatch
}

// console.log(`${triangleHatch()}`);

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out
// a significant percentage of programmer candidates. So if you solved it, your
// labor market value just went up.)

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0 ) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
        
    }
}

// fizzBuzz()

// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.

function chessBoard(size = 8) {
    let chessBoard = ''
    let sign = '#'

    for(let i = 1; i <= size*size; i++) {
        chessBoard += sign
        if (i % size == 0) {
            chessBoard += '\n'
            sign = sign === '#' ? ' ' : '#'
        }
        sign = sign === '#' ? ' ' : '#'
    }
    return chessBoard
}

// console.log(`${chessBoard(10)}`);