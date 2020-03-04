'use strict'

var greeting = prompt('Hello! What is your name?');
console.log(greeting)
alert ("Hello " + greeting );


var question1 = prompt('Are you a student?');
console.log(question1);
if (question1 == 'y') {
    alert('Correct!');
}
var question1 = question1.toLowerCase();
console.log(question1);
else (question1 == 'n') {
    alert('Incorrect!')
}

var question2 = prompt('Are you employed?');
console.log(question2);
if (question2 == 'y') {
    alert('Correct!');
}
var question2 = question2.toLowerCase();
console.log(question2);
else (question1 == 'n') {
    alert('Incorrect!')
}  

var question3 = prompt('Are you employed?');
console.log(question3);
if (question3 == 'y') {
    alert('Correct!');
}
var question3 = question3.toUpperCase();
console.log(question3);
else (question1 == 'n') {
    alert('Incorrect!')
}  

var question4 = prompt('Are you employed?');
console.log(question4);
if (question4 == 'y') {
    alert('Correct!');
}
var question4 = question4.toUpperCase();
console.log(question4);
else (question1 == 'n') {
    alert('Incorrect!')
}
alert ('Goodbye ' + greeting);