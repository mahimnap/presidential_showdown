$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	
	var f = 0; //movement variables defined
	var y = 0;
	var a = 0; 
	var b = 0;
	
	bx = []; //y x and speed values defined for bullets for player 1
	by = [];
	bsy = [];
	bsx = []; 
	
	abx = []; //y x and speed values defined for bullets for player 2
	aby = [];
	absy = [];
	absx = []; 
	
	mbx = []; //y x and speed values defined for missiles for player 1
	mby = [];
	mbsy = [];
	mbsx = []; 
	
	ambx = []; //y x and speed values defined for missiles for player 1
	amby = [];
	ambsy = [];
	ambsx = []; 
	
	
	
	var mammo = 1; //missile ammo
	var amammo = 1; //p2 missile ammo
	var	ammo = 50; //gun ammo
	var aammo = 50; //p2 gun ammo
	var lives = 10; //lives
	var alives = 10; //p2 lives
	
	
	
	

	var direction1; //defined varible for movement
	var missile; //define missile varible
	var direction2; 
	var bullet1; //define bullet variable
	var bullet2; 
	var shield; //defined shield variable
	var shield2;
	var missile2; 
	var game; //define game page 
	var options; //define options page
	var controls; //define control page
	
	var shieldw = 10; //shield width 

	var shieldh = 100; //shield height
	

	var shieldlives = 10; //shield lives
	
	var shield2w = 10;
	var shield2h = 100; 
	

	var shieldlives2 = 10;
	

	var timer = 500; //timer for closing wall
	var p = 0; //wall movement varible
	var x; //wall x value
	var p2 = 0;  
	var timer2 = 500; 
	var background = 'true'; //background is true as soon as the game starts
	
	var picture = new Image(); 
	picture.src = "Pictures/bullet2.png" //define pictures for later use in the code
	
	var picture2 = new Image(); 
	picture2.src = "Pictures/bullet.png"
	
	var picture3 = new Image(); 
	picture3.src = "Pictures/Trump.png"
	
	var picture4 = new Image(); 
	picture4.src = "Pictures/Hillary.png"; 
	
	var picture5 = new Image(); 
	picture5.src = "Pictures/Missile.png"; 
	
	var picture6 = new Image(); 
	picture6.src = "Pictures/Missile2.png"; 
	
	var picture8 = new Image(); 
	picture8.src = "Pictures/background.jpg"; 
	
	var sound = new Audio ('Sounds/laser.mp3'); //define audio for later use in the code
	
	var sound2 = new Audio ('Sounds/laser2.mp3');
	
	var sound3 = new Audio ('Sounds/gunfire1.mp3');
	
	var sound4 = new Audio ('Sounds/gunfire2.mp3');
	
	var picture9 = new Image(); 
	picture9.src = 'Pictures/homescreen.jpg'; 
	
	var sound5 = new Audio ('Sounds/click.mp3') 
	
	var allsound = 'on'; //all sound turns on when the game is started unless turned off
	
	var music = 'on'; //all music turns on when the game is started unless turned off
	
	var sound6 = new Audio ('Sounds/panda.mp3');
	
	var picture10 = new Image(); 
	picture10.src = 'Pictures/No Sound.png';
	
	var picture11 = new Image(); 
	picture11.src = 'Pictures/No Music.png';
	
	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
		
		
	//////////
	///STATE VARIABLES
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 30);
	}

	init();	
	
	
	

	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		if (music == 'on'){ //if music is on play the song
		sound6.play()
		}else if (music == 'off'){ //if music is off pause the song
		sound6.pause(); 
		}
		
		if (background=='true'){ //homescreen code
			ctx.fillStyle = 'purple'
			ctx.drawImage(picture9, 0,0, w, h);	
			ctx.font = '50pt ariel' 
			ctx.fillStyle = 'orange';
			ctx.fillText("Presidential Showdown", 5, 100)
			ctx.font = '30pt verdana' 
			ctx.fillText("To Start the Game Press 'G'", 50, 200)
			ctx.fillText("Press 'O' For Game Options", 50, 270)
			ctx.fillText("Press 'C' For Game Controls", 50, 350)
			options = 'false';
			controls = 'false';
			game =	'false'; 
			ctx.font = '10pt verdana' 
			ctx.fillText ("Created By: Mahimna Pyakuryal", 400, 470)
			ctx.font = '30pt verdana' 
		if (allsound == 'off'){ //if all sound is off display an icon showing that sound is muted
			ctx.drawImage(picture10, 200, 430, 50, 50);
		}
		if (music == 'off'){ //if all music is off display an icon showing that music is muted
			ctx.drawImage(picture11,300, 430,50, 50);
			
		}
		
		}else if (options == 'true'){ //options page
				ctx.fillStyle = 'orange';
				ctx.fillRect(0, 0, w, h);
				ctx.fillStyle = 'red';
				ctx.fillText ("OPTIONS", 220, 100);
				ctx.fillText ("Press '~`' To Mute", 150, 150);
				ctx.fillText ("Press 'Caps Lock' To Unmute", 50, 200);
				ctx.fillText ("Press '1' To Mute Music", 100, 250);
				ctx.fillText ("Press '2' To Unmute Music", 75, 300);
				
				controls = 'false';
				game =	'false'; 
				background = 'false';
				controls = 'false';
				ctx.fillText ("ESC", 0, 40);
			if (allsound == 'off'){
				ctx.drawImage(picture10, 200, 430, 50, 50);
			}
			if (music == 'off'){
				ctx.drawImage(picture11,300, 430,50, 50);
			
			}
		
		}else if (controls == 'true'){ //controls page
				ctx.fillStyle = 'purple';
				ctx.fillRect(0, 0, w, h);
				ctx.fillStyle = 'black';
				ctx.font = '50pt ariel' 
				ctx.fillText("Controls", 210, 100); 
				game =	'false'; 
				background = 'false';
				options = 'false';
				ctx.font = '25pt ariel' 
				ctx.fillText("Player 1 Controls", 25, 150);
				ctx.fillText("Movement: WASD", 25, 200);
				ctx.fillText("Shield: Shift", 25, 250);
				ctx.fillText("Gun: Space", 25, 300);
				ctx.fillText("Missile: M", 25, 350);
				ctx.fillText("Player 2 Controls", 375, 150);
				ctx.fillText("Movement: Arrows", 375, 200);
				ctx.fillText("Shield: | ", 375, 250);
				ctx.fillText("Gun: Enter", 375, 300);
				ctx.fillText("Missile: Backspace", 375, 350);
				ctx.fillText ("ESC", 0, 40);
			if (allsound == 'off'){
				ctx.drawImage(picture10, 200, 430, 50, 50);
			}
			if (music == 'off'){
				ctx.drawImage(picture11,300, 430,50, 50);
			}
		
		}else if (game == 'true'){
				ctx.fillStyle = 'red';
				ctx.drawImage(picture8, 0,0, w, h);	
				ctx.fillStyle = 'blue';
				background = 'false';
				options = 'false';
				controls = 'false';
				ctx.fillText ("ESC", 300, 40);
			if (allsound == 'off'){
				ctx.drawImage(picture10, 200, 430, 50, 50);
			}
			if (music == 'off'){
				ctx.drawImage(picture11,300, 430,50, 50);
			
			}
		
	
		
		if (timer >= 1){
			timer = timer -1
			ctx.fillText (timer, 600, 25); // if the timer is greater than 1 than subtract one from the timer value and display the timer
		}
		
		if (timer2 >= 1){
			timer2 = timer2 -1 
			ctx.fillText (timer2, 25, 25); 
		}
		
		
		
		
		
		
		
		if (timer == 0){
				p = p + 1; 
				addwall (300 + p, 0);  //if timer = 0 than display the function wall and start moving it with the p value
		
			if ((300 + p > 400 + a && b + 100 < 200)|| (300 + p > 400 + a && b + 100 > 300)){ //collision for the collapsing wall and player
				lives = 0;
				timer = 1000; 
			}
			if (300+ p > 400 + a){
				timer = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000 // if the player dodges the wall make the timer really long
			}
		}
		
		if (timer2 == 0){ 
				p2 = p2 + 1; 
				addwall2 (300 - p2, 0);
		
			if ((300 - p2 < 100 + f && y + 100 < 200) || (300-p2 < 100 + f && y + 100 > 300)){ 
				alives = 0; 
			} 
			if (300- p2 < 100 +f){ 
				timer2 = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000
			}
		}
		
		
		

		ctx.fillStyle = 'black';
		for(var i=0; i<mbx.length;i++){ //keep adding missile until i is greater than mbx.length
				mbx[i]=mbx[i]+mbsx[i];
				mby[i]=mby[i]+mbsy[i];
				ctx.drawImage(picture6, mbx[i],mby[i],50,25);
		
			if (shield2 == 'yes' && mbx[i] > 330 + a && mby[i] > 80 + b && mby[i] < b + 180){ //collision for shield
				mbx.splice(i, 1); //if the missile hits the shield the shield blocks the missile
				mbsx.splice(i, 1);
				mby.splice(i, 1);
				shieldlives2 = shieldlives2 - 5 //if the missile hits the shield the shield loses 5 health
			}
		
			if (mbx[i] > 400 + a && mby[i] > 90 + b && mby[i] < 176 + b){ //missile collision code with player
				lives = lives - 5; //if the missile hits a player he/she loses 5 health 
				mbx.splice(i, 1); // the missile gets spliced from the array after it is shot out
				mbsx.splice(i, 1);
				mby.splice(i, 1);
			}else if(mbx[i] > 640) { //if the missile goes of the screen it will splice out
				mbx.splice(i, 1)
				mbsx.splice(i, 1);
				mby.splice(i, 1);
			}
		}
		
		for(var i=0; i<ambx.length;i++){ //same thing as code above except its for the missile for p2
				ambx[i]=ambx[i]+ambsx[i];
				amby[i]=amby[i]+ambsy[i];
				ctx.drawImage(picture5, ambx[i],amby[i],50,25);
		
			if (ambx[i] < 100 + f && amby[i] > 90 + y && amby[i] < 176 + y){
			
				alives = alives - 5;
				ambx.splice(i, 1);
				ambsx.splice(i, 1);
				amby.splice(i, 1);
				}else if(ambx[i] < 0) {
				ambx.splice(i, 1)
				ambsx.splice(i, 1);
				amby.splice(i, 1);
			}
		
		if (shield == 'yes' && ambx[i] < 165+ f && amby[i] > 80 + y && amby[i] < 180 + y){
				ambx.splice(i, 1)
				ambsx.splice(i, 1);
				amby.splice(i, 1);
				shieldlives = shieldlives - 5
			}
		}
		ctx.fillStyle = 'blue';
		
		for(var i=0; i<bx.length;i++){ //keep firing bullets until it reaches the length of the array
				bx[i]=bx[i]+bsx[i];
				by[i]=by[i]+bsy[i];
				ctx.drawImage(picture, bx[i],by[i],10,5);
		
			if (shield2 == 'yes' && bx[i] > 330 + a && by[i] > 80 + b && by[i] < b + 180){ //shield collison code
				bx.splice(i, 1); //splice bullet x value if it hits the shield
				bsx.splice(i, 1);//splice bullet speed
				by.splice(i, 1);//splice bullet y value
				shieldlives2 = shieldlives2 - 1
			}
		
			if (bx[i] > 400 + a && by[i] > 90 + b && by[i] < 176 + b){//bullet collision code with another player
		
				lives = lives - 1;//take away a life
				bx.splice(i, 1); //splice the bullet
				bsx.splice(i, 1);
				by.splice(i, 1);
				}else if(bx[i] > 640) { //if the bullet goes off screen splice the bullet
				bx.splice(i, 1)
				bsx.splice(i, 1);
				by.splice(i, 1);
			}
		}
		
	
		
		
		
		if (shieldlives == 0){ // if shield has no more lives its you cant use it
			shield = 'nope';
		} 
		
		if (shieldlives2 == 0){
			shield2 = 'nope';
		} 
		
		for(var i=0; i<abx.length;i++){ //same thing as code above
			abx[i]=abx[i]+absx[i];
			aby[i]=aby[i]+absy[i];
			ctx.drawImage(picture2, abx[i],aby[i],10,5);
			
			if (shield == 'yes' && abx[i] < 165+ f && aby[i] > 80 + y && aby[i] < 180 + y){
				abx.splice(i, 1)
				absx.splice(i, 1);
				aby.splice(i, 1);
				shieldlives = shieldlives - 1
			}
			
			
			if (abx[i] < 100 + f && aby[i] > 90 + y && aby[i] < 176 + y){
			
				alives = alives - 1;
				abx.splice(i, 1)
				absx.splice(i, 1);
				aby.splice(i, 1);
				}else if(abx[i] < 0) {
				abx.splice(i, 1)
				absx.splice(i, 1);
				aby.splice(i, 1);
			}
		
			
		}
		
		
	
		
		
		
	
		addplayer (100 + f, 100 + y); //add player and let him/her move with the varible f and y
		addplayer2 (400 + a, 100 + b); 
		
		ctx.fillStyle = 'red'; //show ammo remaining
		ctx.font = '20pt verdana' 
		ctx.fillText ("Ammo:", 25, 50);
		ctx.fillText (ammo, 125, 50); 
		
		ctx.fillStyle = 'green';
		
		ctx.fillText (aammo, 600, 50); 
		ctx.fillText ("Ammo:", 500, 50); 
			
		ctx.fillStyle = 'green';
	
		ctx.fillText (lives, 600, 90); //show lives remaining
		ctx.fillText ("Lives:", 500, 90)
		
		ctx.fillStyle = 'red';
		ctx.fillText (alives, 125, 90); 
		ctx.fillText ("Lives:", 25, 90)
		
		
		
		
		
		if (direction1 == 'up'){ //movement code for p1 & p2
			y = y - 10
		}
		
		if (direction1 == 'down'){
			y = y + 10
		}
		
		if (direction1 == 'left'){
			f = f - 10
		}
		
		if (direction1 == 'right'){
			f = f + 10
		}
		
		if (direction2 == 'up'){
			b = b - 10
		}
		
		if (direction2 == 'down'){
			b = b + 10
		}
		
		if (direction2 == 'left'){
			a = a - 10
		}
		
		if (direction2 == 'right'){
			a = a + 10
		}
		
		if (alives == 0||alives == -1||alives == -2||alives == -3||alives == -4||alives == -5){//reset the varibles in the game if a player is dead
				lives = 10; //reset lives 
				ammo = 50; //reset ammo
				aammo = 50; 
				alives = 10; 
				shieldlives = 10; //reset shield lives
				shieldlives2 = 10; 
				y = 100; //reset spawn
				b = 0;
				direction1 = 'nothing'; //make sure buttons arent being pressed when the game is over
				direction2 = 'nothing';
				bullet1 = 'nope';
				bullet2 = 'nope';
				shield = 'nope';
				shield2 = 'nope';
				missile = 'nope';
				missile2 = 'nope';
				mammo = 1;  //reset missile ammo
				amammo = 1;
				timer = 500; //reset timer
				timer2 = 500; 
			do{ 
				var c = prompt("Accept Defeat Player 1", "Say 'I Suck'"); //force the player that lost to say "I Suck"
			}while (c != "I Suck");
		}
		
		
		if (lives == 0||lives == -1||lives == -2||lives == -3||lives == -4||lives == -5){//reset the varibles in the game if a player is dead same code as above
				lives = 10;
				ammo = 50; 
				aammo = 50; 
				alives = 10; 
				shieldlives = 10; 
				shieldlives2 = 10; 
				y = 100;
				b = 0;
				direction1 = 'nothing';
				direction2 = 'nothing';
				bullet1 = 'nope';
				bullet2 = 'nope';
				shield = 'nope';
				shield2 = 'nope';
				missile = 'nope';
				missile2 = 'nope';
				mammo = 1; 
				amammo = 1;
				timer2 = 500; 
				timer = 500; 
			do{ 
				var c = prompt("Accept Defeat Player 2", "Say 'I Suck'");
			}while (c != "I Suck");
		}

		if (mbx.length < mammo){ //if missile is greater than mbx.lenth 
		
			if(missile =='yup'){//if button is being pressed
					if(allsound == 'on'){ //play missile sound
						sound.play();
					}
				mbx.push(110 + f) //fire missile
				mby.push(130 + y)
				mbsy.push(0)
				mbsx.push(30)
				mammo = mammo - 1; //take away 1 missile ammo 
			}
		}
		
		
		if (bx.length < ammo){ //if bullets are greater than bx.lenth 
			
			if (bullet1 == 'yup'){ //if button is being pressed
				if(allsound == 'on'){ //play sound
					sound3.play();
					}
					bx.push(155 + f) //fire bullet 
					by.push(130 + y)
					bsy.push(0) 
					bsx.push(15)
					ammo = ammo - 1;//take away one ammo
				
			}
		}

		
		if (abx.length < aammo){ //same code as above except for p2
			if (bullet2 == 'yup'){//if button is being pressed
				if(allsound == 'on'){
					sound4.play();
					}
					abx.push(340 + a)
					aby.push(130 + b)
					absy.push(0) 
					absx.push(-15)
					aammo = aammo - 1;
			
			}
		} 
		
		if (bullet2 == 'nope'){ //pause sound if bullets arent being fired
			sound4.pause(); 
		}
		
		if (bullet1 == 'nope'){
			sound3.pause(); 
		}
		
			if (ambx.length < amammo){//same code as missile ammo above
		
			if(missile2 =='yup'){
				if(allsound == 'on'){
					sound2.play();
				}
				ambx.push(340 + a)
				amby.push(130 + b)
				ambsy.push(0)
				ambsx.push(-30)
				amammo = amammo - 1;
			}
		}
		ctx.fillStyle = 'purple';
		
		if (shield == 'yes' && shieldlives > 0){ //allow shield if it still has lives and the button is being pressed
			ctx.fillRect (155+ f, 80 + y, shieldw, shieldh)
		}
		
		if (shield2 == 'yes' && shieldlives2 > 0){ 
		ctx.fillRect (340 + a, 80 + b, shield2w, shield2h)
		}
		
		
		ctx.fillStyle = 'red';
		
		if (shieldlives > 0){ //if shield lives is greater than 0 
			ctx.font = '15pt verdana'
			ctx.fillText (shieldlives, 200, 440); //display shield live 
			ctx.fillText("Shield Strength:", 25, 440);
		}
		
			ctx.fillStyle = 'green';
		
		if (shieldlives2 > 0){
			ctx.font = '15pt verdana'
			ctx.fillText (shieldlives2, 600, 440);
			ctx.fillText("Shield Strength:", 425, 440);
		}
		
		ctx.fillStyle = 'red';
		
		ctx.fillText ("Missile Ammo:", 25, 400); //display missile ammo
		ctx.fillText(mammo, 200, 400); 
		
		ctx.fillStyle = 'green';
		
		ctx.fillText ("Missile Ammo:", 425, 400);
		ctx.fillText (amammo, 600, 400); 
		
		if (y + 170 > h){ //border collision
			y = y - 10;
		}
		
		if (f + 100 < 0){ //border collision
			f = f + 10; 
		}
		
		if (y + 100 < 0){ //border collision
			y = y + 10; 
		} 
		
		if (f + 160 > 350){ //border collision
			f = f - 10; 
		}
	
		if (b + 170 > h){ //border collision
			b = b - 10;
		}
		
		if (b + 100 < 0){ //border collision (TOP)
			b = b + 10; 
		
		}
		
		if (a + 350 < 270){ //border collision (sides) 
			a = a + 10; 
		}
		
		if (a + 420 > w){ //border collision
			a = a - 10;
		}
		
	

	}
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	function addplayer (x, y){//player1 functions
		ctx.fillStyle = 'blue';
		ctx.drawImage(picture4, x, y, 25, 25); //head
		ctx.fillRect(x + 7, y + 25, 10, 25); //body
		ctx.fillRect(x, y + 50, 25, 5); //leg splitter
		ctx.fillRect(x, y + 50, 5, 25); //leg
		ctx.fillRect(x + 20, y + 50, 5, 25); //leg
		ctx.fillStyle = 'green'; 
		addweapon (x - 20, y + 30);
	}
	function addweapon (x, y) {//player 1 weapon
		ctx.fillRect(x + 30, y, 50, 5);
		ctx.fillRect(x + 30, y, 5, 20); 
		ctx.fillRect(x+ 50, y, 5, 15); 
		ctx.fillRect(x+ 51, y, 3, 20); 
	}
	
	function addplayer2 (x, y){//player 2 function
		ctx.fillStyle = 'blue';
		ctx.drawImage(picture3, x, y, 25, 25); //head
		ctx.fillRect(x + 7, y + 25, 10, 25); //body 
		ctx.fillRect(x, y + 50, 25, 5); //leg splitter 
		ctx.fillRect(x, y + 50, 5, 25); //leg
		ctx.fillRect(x + 20, y + 50, 5, 25); //leg 
		ctx.fillStyle = 'green'; 
		addweapon2 (x - 80, y + 30);
	}
	
	function addweapon2 (x, y) {//player 2 weapon
		ctx.fillRect(x + 30, y, 50, 5); //top line
		ctx.fillRect(x + 80, y, 5, 20); //back peg
		ctx.fillRect(x+ 50, y, 5, 15); //smaller under peg
		ctx.fillRect(x+ 51, y, 3, 20); //clip 
	}
	
	function addwall (x, y) {//collapsing wall function
		ctx.fillRect (x, y, 10, 200);
		ctx.fillRect (x, y + 350, 10, 300);	
	}
	
	
	function addwall2 (x, y) {//2nd collapsing wall function
		ctx.fillRect (x, y, 10, 200);
		ctx.fillRect (x, y + 350, 10, 300);	
	}
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		
    
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		//alert(key)
		
		//p 80
		//r 82
		//1 49
		//2 50
		//3 51
		
		if (key==87){ //movement key (KEY FOUND IN CONTROLS IN GAME)
			//y = y - 10
			direction1 = 'up';
		}
		if (key==83){
			//y = y + 10
			direction1 = 'down'; 
		}

		if (key==65){
			//f = f - 10
			direction1 = 'left'; 
		}
		
		if (key==68){
			//f = f + 10
			direction1 = 'right'; 
		}
		
		if (key==40){
			//b = b + 10
			direction2 = 'down'; 
		}
		
		
		if (key==38){
			//b = b - 10
			direction2 = 'up';
		}
		
		if (key==37){
			//a = a - 10
			direction2 = 'left'; 
		}
		
		if (key==39){
			//a = a + 10
			direction2 = 'right'
		}
		
		
	
		if (key==32){//bullet firing key
			bullet1 = 'yup'; 
		}
	
		
	
		if (key==13){
			bullet2 = 'yup'
			
		}
		
		if (key==16){ //shield key
			shield = 'yes'
		}
		
		if (key==220){
			shield2 = 'yes'
		}
		
		if (key==8){ //missile key
			missile2 = 'yup';
		} 
		
		if (key==77){
			missile = 'yup';
		}
		
		if (key == 71||key == 79||key == 67){//main menu options
			background = 'false';
		} 
		
		if (key == 71){//game start key
				game = 'true';
			if(allsound == 'on'){
				sound5.play()
			}
		}
		
		if (key == 79){//options start key
				options = 'true'
			if(allsound == 'on'){
				sound5.play()
			}
		}
		
		if (key == 67){//controls start key
				controls = 'true'
			if(allsound == 'on'){
				sound5.play()
			}
		}
		
		if (key == 27){//background start key
				background = 'true'
			if(allsound == 'on'){//player sound if all sound == on
				sound5.play()
			}//reset all the game varibles if you escape out of the game
			lives = 10;
			ammo = 50; 
			aammo = 50; 
			alives = 10; 
			shieldlives = 10; 
			shieldlives2 = 10; 
			y = 100;
			b = 0;
			direction1 = 'nothing';
			direction2 = 'nothing';
			bullet1 = 'nope';
			bullet2 = 'nope';
			shield = 'nope';
			shield2 = 'nope';
			missile = 'nope';
			missile2 = 'nope';
			mammo = 1; 
			amammo = 1;
			timer = 500; 
			timer2 = 500; 
		}
		
		if (key==192){ 
			allsound = 'off';//mute sound
		}
		
		if (key == 20){
			allsound = 'on'; //unmute sound 
		}
		if (key == 49){
			music = 'off';//mute music
		}
		if (key == 50){
			music = 'on';//unmute music
		}
		
		
		
		
	
		
	}, false);
		
		window.addEventListener('keyup', function(evt){
		var key = evt.keyCode;
		//alert(key)
		
		if (key==87){//if movement keys arent being pressed dont move 
			direction1 = 'nothing';
		}
		
		if (key==83){
			direction1 = 'nothing';
		}
		
		if (key==65){
			direction1 = 'nothing';
		}
		
		if (key==68){
			direction1 = 'nothing';
		}
		
		if (key==38){
			direction2 = 'nothing';
		}
		
		if (key==40){
			direction2 = 'nothing'; 
		}
		
		if (key==37){
			direction2 = 'nothing'; 
		}
		
		if (key==39){
			direction2 = 'nothing';
		}
		
		
		if (key==32){//if bullet key isnt being pressed dont fire
			bullet1 = 'nope'; 
			
		}
		
		if (key==13){
			bullet2 = 'nope';
			
		}
		
		if (key==16){//if shield key isnt being pressed dont run the shield
			shield = 'nope'
		}
		
		if (key==220){
			shield2 = 'nope'
		}
		
		if (key==77){//if missile key isnt being pressed dont fire a missile
			missile = 'nope';
		}
		
		if (key==17){
			missile2 = 'nope';
		} 
		
		}, false);




})
