'use strict'

var score =0;


// var greeting = prompt('Hello! What is your name?');
// console.log(greeting)
// alert ("Hello " + greeting );

// //All five yes/no in one function

function quiz(question, answer, wrong) {
    var response = prompt(question);
    if(response.toLowerCase() === answer){
        alert('correct')
        score++
    }else if(response.toLowerCase() === wrong){
        alert('wrong!');
    }else {
        alert('invalid input');
    }
}
//Answers to yes/no

quiz('Are you a student?' , 'y' , 'n');
quiz('Are you employed?' , 'y' , 'n');
quiz('Is tech a field of interest to you?' , 'y' , 'n');
quiz('Do you hold a degree?' , 'y' , 'n');
quiz('Are you experiencing flu like symptoms?' , 'y' , 'n');

// function quiz()
//     var question2 = prompt('Are you employed?');
//     if(question2.toLowerCase() === 'y'){
//         alert('correct')
//         score++
//     }else if(question2.toLowerCase() === 'n'){
//         alert('wrong!');
//     }else {
//         alert('invalid input');
//     }

// quiz('Are you a student?' , 'y' , 'n');

// var question3 = prompt('Is tech a field of intrest to you?');
// if(question3.toLowerCase() === 'y'){
//     alert('correct')
//     score++
// }else if(question3.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }

// var question4 = prompt('Do you hold a degree?');
// if(question4.toLowerCase() === 'y'){
//     alert('correct')
//     score++;
// }else if(question4.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }

// var question5 = prompt('Are you experiencing flu like symptoms?')
// if(question5.toLowerCase() === 'y'){
//     alert('correct')
//     score++
// }else if(question5.toLowerCase() === 'n'){
//     alert('wrong!');
// }else {
//     alert('invalid input');
// }


function numberGuess(question , correct, tooHigh, tooLow) {
    var correct = 10; 
    // take in a numeric input by prompting the user to guess a number.
    var question6 = prompt(question);
    // alert if the guess is “too high” 

    for (var i = 0; i < 3; i++) {

        if (question6 == correct) {
        alert('You did it!');
        score++    
    } else if (question6 > correct) {
        question6 = prompt(tooHigh);
    } else if (question6 < correct) {
        question6 = prompt(tooLow);
    }
    }
}

numberGuess('How many jobs have you had?' , 10, 'Sorry, too high', 'Sorry, too low');


// while (question6 !== magicNumber || counter < 4) {
//     console.log(counter);
//     counter++;
//     question6 = prompt('try again');
//     if(question6 === magicNumber) {
//         alert('bingo');
//         score++
//     if(question6 > magicNumber) {
//       alert('too high')   
//     }
//     if(question6 < magicNumber) {
//         alert('too low');
//     }
//   }
// }

// It should give the user exactly four opportunities to get the correct answer.
alert('You have hit maximum trys! The Magic Number is 10!');
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort


// Add a 7th question that has multiple possible correct answers that are stored in an array.

function multipleQuestions(question, wrongAnswer, colors) {
    // var answer = ['pink', 'purple', 'orange'];
    var question7 = prompt(question);

    // Consider using a loop of some sort for this question.

    loop1: for (var i = 0; i < 5; i++ ) {
        if (question7 === colors[0] || question7 === colors[1] || question7 === colors[2]) {
            alert('Great!');
            score++
            break loop1;
    } else if (question7 !== colors[0] || question7 !== colors[1] || question7 !== colors[2]) {
            question7 = prompt(wrongAnswer);
    }  
    }  if (i === 5) {
        alert('Sorry, you couldn\'t guess. My cars are pink, purple and orange!');
    }
}

multipleQuestions('What color is your vehicle?', 'Try again!', ['pink', 'purple', 'orange']);

alert('Hey, ' + greeting + ', you made it! Thanks for visiting. you scored ' + score + ' on my quiz')









// while (question7 !== answer[0] || answer[1] || answer[2]) {
//     counter++;
//     question7 = prompt('try again!')
//     console.log(question7)

// // Give the user 6 attempts to guess the correct answer.

// if (question7 === answer[0] || answer[1] || answer[2]) {
//     console.log(question7)  
//     alert('Sweet!')
// }
// if(counter === 5){
//     alert('Wrong! Colors are, pink, purple, and orange.');
// } else {
//     alert('Get a new car!');
// // The guesses will end once the user guesses a correct answer or they run out of attempts.
// }    
// }
   
// // alert ('Goodbye ' + greeting);




