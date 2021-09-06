var readlinesync = require('readline-sync');
var score = 0;

console.log("VALORANT QUIZZ\nLets see how much you know about valorant")
var questionlist = [
{question : "How many maps are there in valorant ? ",
answer : 6,
},
{
  question : "How many Agents are there in valorant ? ",
answer : 16,
},
{
  question : "How many blades do Jett have in her ULT ? ",
answer : 5,
},
{
  question : "How many blades do Jett have in her ULT ? ",
answer : 5,
}
]

for (i=0;i<questionlist.length;i++){
var useranswer = readlinesync.question(questionlist[i].question);

    if (useranswer == "e"){
      console.log("GAME OVER");
      var i = questionlist.length-1;
     }
    else{
      if (useranswer == questionlist[i].answer){
        console.log("You are Right");
        
      }
      else{
        console.log("You are not Right");
      }
    }
  }

console.log("Final score is" = score)
