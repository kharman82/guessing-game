'use strict'

var greeting = prompt('Hello! What is your name?');
console.log(greeting)
alert ("Hello " + greeting );



var question1 = prompt('Are you a student?');
if(question1.toLowerCase() === 'y'){
    alert('correct')
}else if(question1.toLowerCase() === 'n'){
    alert('wrong!');
}else {
    alert('invalid input');
}


var question2 = prompt('Are you employed?');
if(question2.toLowerCase() === 'y'){
    alert('correct')
}else if(question2.toLowerCase() === 'n'){
    alert('wrong!');
}else {
    alert('invalid input');
}

var question3 = prompt('Is tech a field of intrest to you?');
if(question3.toLowerCase() === 'y'){
    alert('correct')
}else if(question3.toLowerCase() === 'n'){
    alert('wrong!');
}else {
    alert('invalid input');
}

var question4 = prompt('Do you hold a degree?');
if(question4.toLowerCase() === 'y'){
    alert('correct')
}else if(question4.toLowerCase() === 'n'){
    alert('wrong!');
}else {
    alert('invalid input');
}

var question5 = prompt('Are you experiencing flu like symptoms?')
if(question5.toLowerCase() === 'y'){
    alert('correct')
}else if(question5.toLowerCase() === 'n'){
    alert('wrong!');
}else {
    alert('invalid input');
}

alert ('Goodbye ' + greeting);