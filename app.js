// 'use strict'

// var greeting = prompt('Hello! What is your name?');
// console.log(greeting)
// alert ("Hello " + greeting );



// var question1 = prompt('Are you a student?');
// if(question1.toLowerCase() === 'y'){
//     alert('correct')
// }else if(question1.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }


// var question2 = prompt('Are you employed?');
// if(question2.toLowerCase() === 'y'){
//     alert('correct')
// }else if(question2.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }

// var question3 = prompt('Is tech a field of intrest to you?');
// if(question3.toLowerCase() === 'y'){
//     alert('correct')
// }else if(question3.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }

// var question4 = prompt('Do you hold a degree?');
// if(question4.toLowerCase() === 'y'){
//     alert('correct')
// }else if(question4.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }

// var question5 = prompt('Are you experiencing flu like symptoms?')
// if(question5.toLowerCase() === 'y'){
//     alert('correct')
// }else if(question5.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }


// var magicNumber = 10;

// var counter = 0; 
// // take in a numeric input by prompting the user to guess a number.
// var question6 = prompt('How many jobs have you had?');
// // alert if the guess is “too high” 
// while (question6 !== magicNumber && counter < 4) {
//     console.log(counter);
//     counter++;
//     question6 = prompt('try again');
//     if(question6 > magicNumber) {
//       alert('too high')   
//     }
//     if(question6 < magicNumber) {
//         alert('too low');
//     }
//     if(question6 == magicNumber) {
//         alert('bingo');
//     }
// }
// // It should give the user exactly four opportunities to get the correct answer.
// alert('You have hit maximum trys! The Magic Number is 10!')
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort


var counter = 0;
var question7 = prompt('What color is your vehicle?');
// Add a 7th question that has multiple possible correct answers that are stored in an array.
var answer = ['pink', 'purple', 'orange'];
// Consider using a loop of some sort for this question.
while (question7 !== answer[0] && counter < 6){
    counter++;
    question7 = prompt('try again!')
    console.log(question7)
// Give the user 6 attempts to guess the correct answer.
if(question7 == 'pink' || 'purple' || 'orange'){
    console.log(question7)  
    alert('Sweet!')
} 
if(counter === 5){
    alert('Wrong! Colors are, pink, purple, and orange.')
}
// The guesses will end once the user guesses a correct answer or they run out of attempts.
else {
    alert('Get a new car!')
}    
}
   











// alert ('Goodbye ' + greeting);




