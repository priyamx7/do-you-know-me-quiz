var readlineSync = require("readline-sync");

var score=0

var userName = readlineSync.question("Enter your name- ")
console.log("Hello! "+userName +", and welcome to DO YOU KNOW Priyam?")

console.log("---------------------------")

console.log("You entered the game")

var questions =[
{
  question: "Where does he live? ",
  answer:"Patna"
},
{
question: "How old is he? ",
answer:"17"
},
{
  question:"What stream he took in 11th? ",
  answer:"Commerce"
}
]

  function play(question,answer){
    var userAnswer= readlineSync.question(question);
    if (userAnswer.toLowerCase() ===answer.toLowerCase() ){
    console.log("Your answer is " +userAnswer +" and you are absolutely right!")
    score= score+5;
    }
    else{
      console.log("Your answer is " + userAnswer+ " and you are wrong :(")
      score =score-2;
      
    }
  }

for(var i=0;i<questions.length;i++){
  currentQuestion =questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")