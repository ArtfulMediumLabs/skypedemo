/**
 * main.js
 * -------
 * The main functions that run the application. Calls upon classes and makes
 * decisions in the application.
 */

/**
 * Return a param from a url
 */ 
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}

/** 
 * Get a reference to the Skype bubble and update user based on 
 * argued user in URL
 */
var contact = getQueryVariable('user'); 
console.log(contact);
var skypeButton = document.querySelector('.skype-button');
skypeButton.setAttribute('data-contact-id', contact);

// Create a new javascript audio player object
var audioPlayer = new jsAudioPlayer({
	bodyID: '#js-audio-player',
	playBtnID: 'playButton',
	stepBackBtnID: 'stepBackButton',
	stepBackBtnIcon: 'fa fa-step-backward',
	playBtnIcon: 'fa fa-play',
	pauseBtnID: 'pauseButton',
	pauseBtnIcon: 'fa fa-pause',
	loopBtnID: 'loopButton',
	loopBtnIcon: 'fa fa-refresh',
});

/**
 * I plan to create some sort of playlist object here and use it to create a 
 * list of audio tracks that can be played through the html5/js audio player
 */