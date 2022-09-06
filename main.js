const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// alert('hello!');

// let myVariable;
// myVariable = 'Bob';
// let myVariable = 'Bob';
// myVariable = 'Steve';

/*
Everything in between is a comment.
*/

/*
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite…');
}
*/


/*
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
Ex: muliply(4, 7); // multiply(20, 20); // multiply(0.5, 3);
*/


/*
document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });
*/


/*
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}
*/


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}
*/
function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
// I could not get the username part to work in time.
  

if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}