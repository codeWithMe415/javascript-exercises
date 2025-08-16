/*
function toUpper(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const cats = ['leopard', 'serval', 'jaguar', 'tiger', 'caracal', 'lion'];

const upperCats = cats.map(toUpper);

console.log(upperCats);

function isName(name) {
    return name.startsWith('a');
}

isName('Karl');
const firstNames = ['karl', 'amy', 'andrew', 'sawyer', 'alex', 'mariela'];
const upperFirstNames = firstNames.map(toUpper);
console.log(upperFirstNames);

// this is completely unnecessary. remove all [] and it's the same.
const filtered = firstNames.filter((firstName) => firstName.startsWith('a'));
console.log(filtered[0].toUpperCase() + ' ' + filtered[1] + ' ' + filtered[2].toUpperCase());


//? for (initializer; condition; final-expression) {
//!      code block
//? }

let time = 10;
let weekDay = true;

if (time > 9 && weekDay) {
    console.log('We are open');
} else {
    console.log('We are closed');
}

// const results = document.querySelector('#results');
//
// function calculate() {
//     for (let i = 1; i < 10; i++) {
//         const newResult = `${i} x ${i} ** 2 = ${i * i ** 2}`;
//         results.textContent += `${newResult}\n`;
//     }
//     results.textContent += '\nFinished!\n\n';
// }
//
// const calculateBtn = document.querySelector('#calculate');
// const clearBtn = document.querySelector('#clear');
//
// calculateBtn.addEventListener('click', calculate);
// clearBtn.addEventListener('click', () => results.textContent = '');

function anotherUpper(string) {
    return string.toUpperCase();
}

const kitties = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperKitties = kitties.map(anotherUpper);
console.log(upperKitties);

const someNames = ['Karl', 'Amy', 'Andrew', 'Sawyer', 'Alex', 'Mariela'];
let firstOfNamez;
for (const namez of someNames) {
    firstOfNamez = namez;
    console.log(firstOfNamez);
}


//! Bad loop. There's a comma at the end of the line.

const dogsBig = ['Maxie', 'Sam', 'Marvin'];

let myFavoriteDogs1 = 'My favorite dogs are ';
for (const dog of dogsBig) {
    myFavoriteDogs1 += `${dog}, `;
}
console.log(myFavoriteDogs1);


//? Better way to do it

const dogs = ['Maxie', 'Sam', 'Marvin'];
let myFavoriteDogs = 'My favorite dogs are ';

for (let i = 0; i < dogs.length; i++) {
    if (i === dogs.length - 1) {
        myFavoriteDogs += `and ${dogs[i]}.`;
    } else {
        myFavoriteDogs += `${dogs[i]}, `;
    }
}
console.log(myFavoriteDogs);


const superNames = ['Hello', 'From', 'The', 'Other', 'Side'];
let superName = 'I just wanted to say ';

for (let i = 0; i < superNames.length; i++) {
    if (i === superNames.length - 1) {
        superName += ` ${superNames[i]}!`;
    } else {
        superName += ` Fucking ${superNames[i]}`;
    }
}

console.log(superName);


const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found';
    }
});
*/

//? while (condition) {
//? code
//? loop body
//? }

let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}


for (let i = 3; i >= 0; i--) {
    let stars = '';
    for (let j = 3; j >= i; j--) {
        stars += '*';
    }
    console.log(stars);
}
