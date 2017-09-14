
var score = 0;
var guessCount = 15;
var guessedLetters = [];
var j=0
var word="";
var incorrect=0;
var capitalCities = ["BRASILIA","BERLIN","MADRID","MOSCOW","AMSTERDAM","TOKYO","ATHENS","ROME", "VIENNA", "WASHINGTON", "SOFIA","SANTIAGO","BEIJING","HAVANA","PRAGUE","COPENHAGEN","PARIS"];

var randomCity = capitalCities[Math.floor(Math.random() * capitalCities.length)];
var randomCityLetters = randomCity.split('');



var targetWord = document.getElementById("empty-div");


function checkIfExist (arr, val){
	return arr.some(function(arrVal){
		return val.toLowerCase()===arrVal.toLowerCase();
	});
}


function generateWord() {
word=""
for (var i =0;  i<randomCityLetters.length; i++) 
	{
		if (checkIfExist(guessedLetters,randomCityLetters[i]) && guessedLetters.length>0) {
			word=word + randomCityLetters[i];
		}
		else {
			word=word + "-";
		}
	} 
}

generateWord();
	    targetWord.innerHTML = '<div class ="word"> ' + word + '</div>'
	    						+'<p> Your guessed letters: </p>' 
	    						+'<div class="letters">' + guessedLetters + '</div>'
	    						+'<p> Remaining guesses: '+ (guessCount-incorrect) +'</p>'


document.onkeyup = function (event) {
	  userGuess = event.key;

	    if (!checkIfExist(guessedLetters,userGuess)) {
			guessedLetters[j] = userGuess;
	    	j++;
	    	 if (checkIfExist(randomCityLetters,userGuess)) {
			generateWord();
				
		    }
		    else{
		    	incorrect++
	    	}
	    }

	    targetWord.innerHTML = '<div class ="word"> ' + word + '</div>'
	    						+'<p> Your guessed letters: </p>' 
	    						+'<div class="letters">' + guessedLetters + '</div>'
	    						+'<p> Remaining guesses: '+ (guessCount-incorrect) +'</p>'
	if (guessCount-incorrect===0) {
		targetWord.innerHTML = "<p class='answer'> Sorry, <br>Corect answer was: " + randomCity + "</p>"
	} 
	else if	(randomCity===word){
			targetWord.innerHTML="<p class='answer'> Congratulations!!<br> Corect answer is: " + randomCity + "</p>"
	} 

};

// var a = 


// while (guessCount>0) {
	

// 	    randomCityLetters.forEach (function (letter){
// 	    	if (userGuess===letter) {
// 	    		letterExist++
// 	    	}

// 	    })


// 	}

// };