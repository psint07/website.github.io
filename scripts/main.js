const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello this is my day!';

let myImage = document.querySelector('img');
let myButton = document.querySelector('button');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/helloworld.png') {
      myImage.setAttribute ('src','images/header.jpg');
    } else {
      myImage.setAttribute ('src','images/helloworld.png');
    }
}



function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

