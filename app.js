//201 Day 2, 3 Lab assignment guessing game js.

//I will need to make this script more DRY there is a lot of code repitition and I probably should change totalQuestions to be more dynamic vs a hard coded value.

var userName = prompt('What is your name?');
console.log('The userName is: ' + userName);

var score = 0;
var totalQuestions = 5;

alert('Hello ' + userName + ' Let\'s play a guessing game about me! Please type Y or N.');

var answer1 = prompt('The language I did cucumber in was JavaScript? (Y/N)').toUpperCase();
console.log('User\'s answer to question 1: ' + answer1);
if (answer1 === 'Y' || answer1 === 'YES'){
  alert('No, the language I did cucumber was Ruby.');
} else if(answer1 === 'N' || answer1 === 'NO'){
  alert('You are correct.');
  score++;
} else {
  alert('You must enter in Y or N, you failed this question.');
}

var answer2 = prompt('The month and year I started at GeneralUI was September 2013.').toUpperCase();
console.log('User\'s answer to question 2: ' + answer2);
if (answer2 === 'Y' || answer2 === 'YES'){
  alert('You are correct.');
  score++;
} else if (answer2 === 'N' || answer2 === 'NO'){
  alert('No, I started at GeneralUI in September 2013.');
} else {
  alert('You must enter in Y or N, you failed this question.');
}

var answer3 = prompt('North Idaho College is the only college/university I attended?').toUpperCase();
console.log('User\'s answer to question 3: ' + answer3);
if (answer3 === 'Y' || answer3 === 'YES') {
  alert('No, I went to the University of Idaho as well.');
} else if (answer3 === 'N' || answer3 === 'NO'){
  alert('You are correct.');
  score++;
} else {
  alert('You must enter in Y or N, you failed this question.');
}

var answer4 = prompt('Did I test the following technologies, JavaScript, Android, iOS, Ruby on Rails?').toUpperCase();
console.log('User\'s answer to question 4: ' + answer4);
if (answer4 === 'Y' || answer4 === 'YES') {
  alert('You are correct.');
  score++;
} else if (answer4 === 'N' || answer4 === 'NO'){
  alert('No, I did test JavaScript, Android, iOS, and Ruby on Rails.');
} else {
  alert('You must enter in Y or N, you failed this question.');
}

var answer5 = prompt('Was I an SDET at Dashwire?').toUpperCase();
console.log('User\'s answer  to question 5: ' + answer5);
if (answer5 === 'Y' || answer5 === 'YES') {
  alert('No, I was a QA Technician at Dashwire.');
} else if (answer5 === 'N' || answer5 === 'NO'){
  alert('You are correct.');
  score++;
} else {
  alert('You must enter in Y or N, you failed this question.');
}

alert('Your score is ' + score + '/' + totalQuestions);
