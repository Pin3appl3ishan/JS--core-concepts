'use strict';

/////////////////////////////
// 3. Default Parameters 
/*
const bookings = []

const createBooking =  function(flightNum, numPassengers, price) {

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 20, 40)
*/

///////////////////////////////////////
/*
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

//5. First Class Funtions vs High Order Functions



// 7. Functions Returning Functions
/*
const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };
  
  const greeterHey = greet('Hey');
  greeterHey('Jonas');
  greeterHey('Steven');
  
  greet('Hello')('Jonas');

//   changing to arrow function (func returning func)
const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);
*/

// 8. call and apply methods



// 9. bind method

/*
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
            // addVAT = value => value + value * rate
console.log(addVAT(100))
console.log(addVAT(23))
*/

// Challenge 
/*
const addTaxRate = function(rate) {
    return function (value) {
        return value + value * rate
    }
}
const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100))
console.log(addVAT2(23))
*/

// 10. Chanllengt #1
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
        )
        console.log(answer)

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

        console.log(this.answers)
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers: [5, 2, 3]}, 'string')
poll.displayResults.call({answers: [1, 9, 5, 2, 3]}, 'string')
poll.displayResults.call({answers: [1, 9, 5, 2, 3]})
*/

// 11. Immediately invoke functions expression


// 12. Closure

// 13. Closure examples
/*
let f;

const g = function () {
    const a = 2;
    f = function() {
        console.log(a * 2)
    }
}

g()
f()
*/

// 14. Closure challenge

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue'
    }
    ) 
})();