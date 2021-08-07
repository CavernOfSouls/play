//Enter full screen
function enterFullscreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
       (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {  
          document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
          document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
      } else {  
        if (document.cancelFullScreen) {  
          document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
          document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
          document.webkitCancelFullScreen();  
        }  
      }  
}

// Tells players that they died and will respawn
function youDied() {
	alert("You are dead! You will now respawn in the cavern's entrance");
	window.location = "entrance.html"
}

//log stamina before leaving page
function logStamina() {
	sessionStorage.setItem("stamina", stamina.textContent);
}

//Call over stamina info from previous page
function callStamina () {
	stamina.textContent = sessionStorage.getItem("stamina");
	if(stamina.textContent == "0") {
		alert("Your Stamina has dropped down to 0. You faint just in time to die in a horrible way");
		youDied();
	};
}

// Updates stamina points
function updateStamina() {
	stamina.textContent = (stamina.textContent - 1);
	alert("You lost 1 point of Stamina");
	logStamina();
}

// Tick up Stamina, only from purpleVial
function tickupStamina() {
	++stamina.textContent;
	alert("You gain 1 point of Stamina");
	logStamina();
}

// Ashkanat's offering submission
function ashkanatOffering() {
	let Food = document.getElementById("food").value;
	let Beverage = document.getElementById("drink").value;

	if(Food==="Pink mushrooms" && Beverage==="Fish stock") {
		alert("The green door opens");
		window.location = "room15.html"
	} else {
		alert("The red door opens");
		window.location = "room06.html"
	}
}

// Answer the Sphynx
function sphynxRiddle() {
	let Answer = document.getElementById("answer").value;

	if(Answer == 731) {
		alert("Did you think it would be this simple? You insult me... no one insults me and lives...");
		youDied();
	} else if (Answer == 11) {
		alert("Right logic, wrong numeral system. I will let you through, but not unharmed...");
		updateStamina();
		window.location = "room16.html"
	} else if (Answer == 7) {
		alert("You have answered with wisdom, congratulations. You may go through...");
		window.location = "room10.html";
	}	else if (Answer == 241) {
		alert("Wrong logic, right numeral system. I will let you through, but not unharmed...");
		updateStamina();
		window.location = "room16.html";
	} else {
		alert("Unfortunately, you are incorrect. Time to eat...");
		youDied();
	}
}

// Precipice drop
function headsTails() {
  let coin = ["heads", "tails"];

  coinResult = Math.floor(Math.random() * coin.length);		
  if(coinResult === 0) {
  	alert("Heads!")
  	window.location = "room09.html"
  } else if (coinResult === 1){
  	alert("Tails!")
  	window.location = "room08.html"
  }    
};

// Drink from the purple vial
function purpleVial() {
  	alert("The liquid tastes great, and makes you feel great!. You unlock the door and go through");
  	tickupStamina();
  	window.location = "room12.html";
  }    

// Drink from the clear vial
function clearVial() {
  	alert("You just drank vinegar. Not dangerous, just nasty! You unlock the door and go through");
  	updateStamina();
  	window.location = "room12.html";
  }  

// Drink from the rusty-red vial
function rustyVial() {
  	alert("As soon as you take your first sip, you feel the liquid burning your insides. Within seconds, you start to melt from the inside out...");
  	youDied();
  }  