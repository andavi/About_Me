'use strict';

var questionsCorrect = 0;
var userName;

// intoduction
var giveIntro = function() {
  while(!userName) {
    userName = prompt('What\'s your name?');
  }
  alert('Hello ' + userName + '. We are going to play a game. Answer yes or no to the following questions.');
  console.log('userName: ' + userName);
};


// five questions about me
var askQuestions = function() {
  var questionsList = [
    'Does Andrew like to bike?',
    'Is Andrew SCUBA certified?',
    'Is Andrew a veteran?',
    'Is Andrew ASA 101 - Basic Keel Boat Certified?',
    'Does Andrew want to be ASA 101 - Basic Keel Boat Certified?'
  ];

  var answers = ['y', 'y', 'y', 'n', 'y'];

  var correctResponses = [
    'Nice job! I love to bike.',
    'Nice job! I am SCUBA ceritified.',
    'Nice job! I am a Navy veteran.',
    'Nice job! I am not yet certified.',
    'Nice job! I do want this certification.'
  ];

  var incorrectResponses = [
    'WRONG! I do like to bike.',
    'WRONG! I am SCUBA ceritified.',
    'WRONG! I am a Navy veteran.',
    'WRONG! I am not yet certified.',
    'WRONG! I do want this certification.'
  ];

  var response;

  for (var i = 0; i < 5; i++) {
    while(!response || !(response[0] === 'y' || response[0] === 'n')) {
      response = prompt(questionsList[i]);
      response = response.toLowerCase();
    }
    if (response[0] === answers[i]) {
      alert(correctResponses[i]);
      console.log('question ' + (i+1) + ' answered correctly: ' + response + '==' + answers[i]);
      questionsCorrect++;
    } else {
      alert(incorrectResponses[i]);
      console.log('question ' + (i+1) + ' answered incorrectly: ' + response + '==' + answers[i]);
    }
    response = '';
  }
};


// number game
var playNumberGame = function() {
  var favNum = (Math.floor(Math.random() * Math.floor(5))) + 1;
  favNum = favNum.toString();
  console.log('favorite number is: ' + favNum);
  var guess = prompt('Guess my favorite number. It is between 1 and 5. You have four guesses.');

  for (var i = 0; i < 4; i++) {
    if (guess !== favNum) {
      guess = prompt('Wrong guess. Try again!');
      console.log((i+1) + ' guess(es) wrong. guessed: ' + guess);
    } else {
      alert('Great job! My favorite number is ' + favNum + '.');
      console.log('correct guess');
      questionsCorrect++;
      break;
    }
  }
};


// state game
var playStateGame = function() {
  var states = ['north carolina', 'florida', 'virginia', 'arizona'];
  var guess = prompt ('Can you guess a state I lived in other than Washington? You have six guesses.');
  var guessedCorrectly = false;
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < states.length; j++) {
      if (states[j] === guess.toLowerCase()) {
        guessedCorrectly = true;
        break;
      }
    }
    if (guessedCorrectly) {
      alert('Great job! I have lived in ' + guess + '.');
      console.log('state guessed correctly');
      questionsCorrect++;
      break;
    }
    guess = prompt('I never lived in ' + guess + '. Guess again.');
    console.log((i+1) + ' guesses wrong');
  }
  if (!guessedCorrectly) {
    alert('Not quite. E for effort.');
  }
  alert('I have lived in North Carolina, Florida, Virginia, and Arizona.');
};


// outro
var giveOutro = function() {
  if (questionsCorrect > 5) {
    var message = 'Great job ' + userName + '! You answered ' + questionsCorrect + ' out of 7 questions correctly.';
  } else {
    message = 'Mediocre job, ' + userName + '. You answered ' + questionsCorrect + ' out of 7 questions correctly. Better luck next time!';
  }
  alert(message);
  document.getElementById('outro').innerHTML = message;
  console.log(questionsCorrect + ' out of 7 questions answered correctly');
};

// start app
var startApp = function() {
  giveIntro();
  askQuestions();
  playNumberGame();
  playStateGame();
  giveOutro();
};

// invoke
startApp();
