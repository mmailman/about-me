//201 Day 2, 3 Lab assignment guessing game js.

//I will need to make this script more DRY there is a lot of code repitition and I probably should change totalQuestions to be more dynamic vs a hard coded value.

var userName = prompt('What is your name?');
console.log('The userName is: ' + userName);

var score = 0;
var totalQuestions = 7;

var yesNoSolutions = [['The language I did cucumber in was JavaScript?','NO'],['The month and year I started at GeneralUI was September 2013.','YES'],['North Idaho College is the only college/university I attended?','NO'],['Did I test the following technologies, JavaScript, Android, iOS, Ruby on Rails?','YES'],['Was I an SDET at Dashwire?','NO']];

//Questions 1 - 5
function firstFive(questions){
  for (var question = 0; question < questions.length; question++){
    var userAnswer = prompt(questions[question][0]).toUpperCase();
    console.log('User\'s answer to question ' + (question + 1) + ': ' + userAnswer);
    if(userAnswer === 'Y'){
      userAnswer = 'YES';
    } else if(userAnswer === 'N'){
      userAnswer = 'NO';
    }
    if(userAnswer === 'YES' || userAnswer === 'NO'){
      if(userAnswer === questions[question][1]){
        alert('You are correct.');
        score++;
      } else {
        alert('Wrong, you are incorrect.');
      }
    } else {
      alert('You must enter in Y or N, you failed this question.');
    }
  }
}

//Question 6
function numberGame(){
  var solution6 = 7;
  for (var tries = 4; tries > 0; tries--){
    var answer6 = prompt('Pick a number between 1 and 10. You have ' + tries + ' tries left.').toUpperCase();
    console.log('User\'s answer to question 6: ' + answer6);
    if (isNaN(parseInt(answer6))){
      alert('Please enter a number in number form.');
    } else if (parseInt(answer6) < solution6){
      alert('Your guess is too low.');
    } else if (parseInt(answer6) > solution6){
      alert('Your guess is too high.');
    } else if (parseInt(answer6) === solution6){
      alert('You have guessed correctly, the correct answer is ' + solution6);
      score++;
      break;
    }
  }
}

//Question 7
function favoriteAuthor(){
  var solution7 = ['JIM BUTCHER', 'PATRICK ROTHFUSS', 'BRANDON SANDERSON'];
  var successFlag = false;
  var tries = 6;
  while (tries > 0){
    var answer7 = prompt('Who is one of my top 3 favorite authors? You have ' + tries + ' tries left.').toUpperCase();
    console.log('User\'s answer to question 7: ' + answer7);
    for (var solution = 0; solution <= solution7.length; solution++){
      if (answer7 === solution7[solution]){
        successFlag = true;
        alert('Correct, the possible answers are one of the following: ' + solution7[0] + ', ' + solution7[1] + ', or ' + solution7[2] + '.');
        score++;
        break;
      }
    }
    if (successFlag === true){
      break;
    } else {
      alert('Sorry incorrect.');
    }
    tries--;
  }
  if (successFlag === false){
    alert('Sorry the correct answers are one of the following: ' + solution7[0] + ', ' + solution7[1] + ', or ' + solution7[2] + '.');
  }
}

alert('Hello ' + userName + ' Let\'s play a guessing game about me! Please type Y or N.');
firstFive(yesNoSolutions);
numberGame();
favoriteAuthor();
alert(userName + ' your score is ' + score + '/' + totalQuestions);
