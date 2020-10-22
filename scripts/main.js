//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

let building_name = 'Beishan';
if (building_name === 'Beishan') {
  alert('Yay, I love Beishan !');    
} else {
  alert('Awwww, but Beishan is my favorite...');    
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

//alert(multiply(4,7));
//alert(multiply(20,20));
//alert(multiply(0.5,3));

document.querySelector('h1').onclick = function(){
    alert('Welcome to Beshan Ancient European Style Building!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beishan_livingroom.jpg') {
      myImage.setAttribute ('src','images/beishan_together.jpg');
    } else {
      myImage.setAttribute ('src','images/beishan_livingroom.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h5');

myButton.onclick = function(){
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
      } 
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'I am glad of you are intrested to us, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'I am glad of you are intrested to us, ' + storedName;
  }