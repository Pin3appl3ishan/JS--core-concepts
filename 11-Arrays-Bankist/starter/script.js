'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// console.log(containerMovements.innerHTML)

const calcDisplayBalance = function (currentAccount) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance}€`
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate/100).filter((int, i, arr) => {return int >= 1})
      .reduce((acc,int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}

const createUsernames = function(accs) {
  accs.forEach (function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}
createUsernames(accounts)
// console.log(username)

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;
//Event handler
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();  // prevent default form submitting

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // to remove the focus from input field

    //update ui
    updateUI(currentAccount);
  };
})







/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

*/

/*
//Coding Challenge
const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice()
  dogsJuliaCorrected.splice(0,1)
  dogsJuliaCorrected.splice(-2)
  console.log(dogsJuliaCorrected)

  const dogs = dogsJuliaCorrected.concat(dogsKate)

  dogs.forEach(function(dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
// Maps example
const eurToUsd = 1.1

const movementsUSD = movements.map(mov => mov * eurToUsd)
console.log(movements)
console.log(movementsUSD)

const movementsUSDfor = []
for (const move of movements) movementsUSDfor.push(mov * eurToUsd)
console.log(movementsUSDfor)

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/*
// Filter exmaple
const deposits = movements.filter(function(mov) {
  return mov > 0;
})
console.log(movements)
console.log(deposits)

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor)

const withdrawals = movements.filter(mov => mov < 0);
*/

// Reduce
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur
// }, 0)

// const balance = movements.reduce((acc, cur) => acc + cur, 0)
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

/*
//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max)
*/

/*
// Challenge 2
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = ages => {
  const humanAges = ages.map(age => age <= 2? 2 * age: 16 + age * 4)
  const adults = humanAges.filter(age => age >= 18)
  console.log(humanAges)
  console.log(adults)

  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length,0)
  return average;
}


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
// 17. Challenge 3 (using method chaining)
const calcAverageHumanAge = ages => ages.map(age => age <= 2? 2 * age: 16 + age * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length,0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/*
/// 16. method chaining
const eurToUsd = 1.1;

//PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0). map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD)
*/

/*
// 18. find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);
*/