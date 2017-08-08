/**
 * jsAudioPlayer.js
 * --------------
 * A class to define a cusotm javascript audio player.
 */

class jsAudioPlayer {
	constructor(options) {
		this.bodyID = options.bodyID;
		this.stepBackBtnID = options.stepBackBtnID;
		this.stepBackBtnIcon = options.stepBackBtnIcon;
		this.playBtnID = options.playBtnID;
		this.playBtnIcon = options.playBtnIcon;
		this.pauseBtnID = options.pauseBtnID;
		this.pauseBtnIcon = options.pauseBtnIcon;
		this.loopBtnID = options.loopBtnID;
		this.loopBtnIcon = options.loopBtnIcon;
		this.initButtons();
	}

	initButtons() {
		var btnList = [
			[this.stepBackBtnID, this.stepBackBtnIcon],
			[this.playBtnID, this.playBtnIcon],
			[this.pauseBtnID, this.pauseBtnIcon],
			[this.loopBtnID, this.loopBtnIcon],
		];
		// Build the html buttons and add them to the js audio player
		var player = document.querySelector(this.bodyID);
		for(var i = 0; i < btnList.length; i++) {
			var button = document.createElement('button');
			button.setAttribute('id', btnList[i][0]);
			var span = document.createElement('span');
			span.setAttribute('class', btnList[i][1]);
			button.appendChild(span);
			player.appendChild(button);
		}
		// Add event listeners to our buttons
		var stepBackButton = document.querySelector('#' + this.stepBackBtnID);
		stepBackButton.addEventListener('click', this.toBeginning, false);
		var playButton = document.querySelector('#' + this.playBtnID);
		playButton.addEventListener('click', this.play, false);
		var pauseButton = document.querySelector('#' + this.pauseBtnID);
		pauseButton.addEventListener('click', this.pause, false);
		var loopButton = document.querySelector('#loopButton');
		loopButton.addEventListener('click', this.loop, false);
	}

	play() {
		var htmlAudioPlayer = document.querySelector('audio');
		htmlAudioPlayer.play();
	}

	pause() {
		var htmlAudioPlayer = document.querySelector('audio');
		htmlAudioPlayer.pause();
	}

	loop() {
		var htmlAudioPlayer = document.querySelector('audio');
		var loopButton = document.querySelector('#loopButton');
		if( loopButton.classList.contains('active') ) {
			htmlAudioPlayer.setAttribute('loop', false);
			loopButton.classList.remove('active');
		} else {
			htmlAudioPlayer.setAttribute('loop', true);
			loopButton.classList.add('active');
		}
	}

	toBeginning() {
		var htmlAudioPlayer = document.querySelector('audio');
		htmlAudioPlayer.currentTime = 0;
	}
}