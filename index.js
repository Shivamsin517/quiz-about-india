var readlineSync=require('readline-sync')
var score=0
var userUttar=readlineSync.question('whats your name?')
console.log('welcome '+userUttar)
function play(question,answer){
  var userUttar=readlineSync.question(question)
  if (userUttar===answer){score=score+1, console.log('Total score '+score)}
  else{console.log('wrong')}
 
  
}

var questions=[{question:'silicon valley of india?',
               answer:'banglore'},
               {question:'film city in up?',
               answer:'noida'},{question:'which party win in 2024 ?',answer:'bjp'},{question:'which city is known to produce engineer and doctor? ',answer:'kota'},{question:'where is green park stadium situated?',
  answer:'kanpur'}]
for(i=0;i<5;i++){
  var currentData=questions[i]
  console.log(play(currentData.question,currentData.answer))
}