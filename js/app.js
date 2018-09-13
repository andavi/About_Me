'use strict';

// intoduction
var questionsCorrect = 0;
var userName = prompt('Welcome to my site. What\'s your name?');
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

// outro
if (questionsCorrect > 3) {
  var message = 'Great job ' + userName + '! You answered ' + questionsCorrect + ' out of 5 questions correctly.';
} else {
  message = 'Mediocre job, ' + userName + '. You answered ' + questionsCorrect + ' out of 5 questions correctly. Better luck next time!';
}
alert(message);
document.getElementById('outro').innerHTML = message;
console.log(questionsCorrect + ' out of 5 questions answered correctly');
