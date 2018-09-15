'use strict';

// intoduction
var questionsCorrect = 0;
var userName;
while(!userName) {
  userName = prompt('What\'s your name?');
}
alert('Hello ' + userName + '. We are going to play a game. Answer yes or no to the following questions.');

// bike question
var bike = prompt('Does Andrew like to bike?');
bike = bike.toLowerCase();
if (bike[0] === 'y') {
  alert('Nice job! I love to bike.');
  console.log('bike question correct');
  questionsCorrect++;
} else if (bike[0] === 'n') {
  alert('WRONG! I do like to bike.');
  console.log('bike question wrong');
} else {
  alert('Come on, answer yes or no.');
  console.log('bike question not answered with yes or no');
}

// scuba question
var scuba = prompt('Is Andrew SCUBA certified?');
scuba = scuba.toLowerCase();
if (scuba[0] === 'y') {
  alert('Nice job! I am SCUBA ceritified.');
  console.log('scuba question correct');
  questionsCorrect++;
} else if (scuba[0] === 'n') {
  alert('WRONG! I am SCUBA ceritified.');
  console.log('scuba question wrong');
} else {
  alert('Come on, answer yes or no.');
  console.log('scuba question not answered with yes or no');
}

// veteran question
var veteran = prompt('Is Andrew a veteran?');
veteran = veteran.toLowerCase();
if (veteran[0] === 'y') {
  alert('Nice job! I am a Navy veteran.');
  console.log('veteran question correct');
  questionsCorrect++;
} else if (veteran[0] === 'n') {
  alert('WRONG! I am a Navy veteran.');
  console.log('veteran question wrong');
} else {
  alert('Come on, answer yes or no.');
  console.log('veteran question not answered with yes or no');
}

// sail question
var sail = prompt('Is Andrew ASA 101 - Basic Keel Boat Certified?');
sail = sail.toLowerCase();
if (sail[0] === 'y') {
  alert('WRONG! I am not yet certified.');
  console.log('sail question wrong');
} else if (sail[0] === 'n') {
  alert('Nice job! I am not yet certified.');
  console.log('sail question correct');
  questionsCorrect++;
} else {
  alert('Come on, answer yes or no.');
  console.log('sail question not answered with yes or no');
}

// want question
var want = prompt('Does Andrew want to be ASA 101 - Basic Keel Boat Certified?');
want = want.toLowerCase();
if (want[0] === 'y') {
  alert('Nice job! I do want this certification.');
  console.log('want question correct');
  questionsCorrect++;
} else if (want[0] === 'n') {
  alert('WRONG! I do want this certification.');
  console.log('want question wrong');
} else {
  alert('Come on, answer yes or no.');
  console.log('want question not answered with yes or no');
}

// number game
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

// state game
var states = ['north carolina', 'florida', 'virginia', 'arizona'];
guess = prompt ('Can you guess a state I lived in other than Washington? You have six guesses.');
var guessedCorrectly = false;
for (i = 0; i < 6; i++) {
  for (var j = 0; j < states.length; j++) {
    if (states[j] === guess.toLowerCase()) {
      guessedCorrectly = true;
      break;
    }
  }
  if (guessedCorrectly) {
    alert('Great job! I have lived in ' + guess + '.');
    console.log('state guessed correctly');
    break;
  }
  guess = prompt('I never lived in ' + guess + '. Guess again.');
  console.log((i+1) + ' guesses wrong');
}
if (!guessedCorrectly) {
  alert('Not quite. E for effort.');
}
alert('I have lived in North Carolina, Florida, Virginia, and Arizona.');

// outro
if (questionsCorrect > 5) {
  var message = 'Great job ' + userName + '! You answered ' + questionsCorrect + ' out of 7 questions correctly.';
} else {
  message = 'Mediocre job, ' + userName + '. You answered ' + questionsCorrect + ' out of 7 questions correctly. Better luck next time!';
}
alert(message);
document.getElementById('outro').innerHTML = message;
console.log(questionsCorrect + ' out of 7 questions answered correctly');
