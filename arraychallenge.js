var deciNumbers = [-0.1,-0.2,-0.5,0.12,-0.4];
var max = 0;

deciNumbers.forEach(function(e){if (e > max) { max = e;}});

deciNumbers.forEach(function(e){if (e < max) { max = e;}});

// deciNumbers.forEach(function(e){if (e ) { max = e;}});
var min = 10
deciNumbers.forEach(function(e){if (Math.abs(e) < Math.abs(min)) { min = e;}});


//* below is the sum of arrays
var sum = 0
for(var i=0; i<deciNumbers.length; i = i + 1)
{sum = sum + deciNumbers[i];
  console.log(sum);}

  deciNumbers.forEach(function(e) { max = max + e});
//* function that calculates and returns the sum of an array.
deciNumbers.forEach(function(e) { max = max + e; return max;})
function myfood(arr){
  max = 0;
  arr.forEach(function(e) { max = max + e;
  })
  return max;
}

//* find the index of the highest number
deciNumbers.forEach(function(e){if (e > max) { max = e;}});deciNumbers.indexOf(max)

  //*calculate mean
deciNumbers.forEach(function(e) { max = (max + e)}); console.log(max/deciNumbers.length)

//* attempt to find the smallest number
max = infinity
var absNumbers = deciNumbers.abs();
deciNumbers.forEach(function(e){if (e < max) { max = e;}});



var sibName = ["Marry","Joe","Lisa","Tom", "David"]
var parName = ["John", "Beatrice", "Anne", "Doug","Frank"]
//* sort alphabetic order
sibName.sort();
//* reverse alphabetic order
sibName.sort().reverse();
sibName.map(function(e){return e + parName});
//* combine two arrays into a new one

var combinedName =sibName.concat(parName);
combinedName.sort().reverse();

combinedName.sort().reverse().join();

//* function print in one string
function myFamily(sib,par){
  combinedName=sib.concat(par);
  combinedName.sort().reverse().join();
  return combinedName;
}
combinedName.forEach (function recallName(e){ return e = "Marry"})


function findName(name)
{
var found = false;
for(i=0; i <combinedName.length && !found; i++){
  if(combinedName[i]=== name){
  alert("you found it")
  }
  else{
    alert("Her name is not in here")
  }
}
}
function isName(x){return x==="Marry";};
combinedName.some(isName);

function findName(name) { return combinedName.some(function(e){ return e === name;}) };

 //* Magic 8 Ball
 var answer = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"];
 var userInput = prompt("Ask your question?");

var randomNum = Math.floor(Math.random()*answer.length);


input = prompt("enter your question!");
alert(answer[randomNum]);

var numGuess=0;
do{
  input = prompt("enter your question!");
  alert(answer[Math.floor(Math.random()*answer.length)]);
  numGuess++
}while(input != "STOP" && numGuess<6);

 
