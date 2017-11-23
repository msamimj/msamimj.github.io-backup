var character = document.getElementById("character");
var part = 0;
var modal = false;

$('html, body').mousewheel(function(event, delta){
	if(!modal){
		if(hidden && delta<0){

		}else{
			this.scrollLeft -= (20*delta);
		}
		if(delta>0){
			if(part==0){
				character.src = "media/dex-left.png";
			}else if(part==1){
				character.src = "media/bravo-left.svg";
			}else if(part==2){
				character.src = "media/mario-left.png";
			}
		}else{
			if(part==0){
				character.src = "media/dex-right.png";
			}else if(part==1){ 
				character.src = "media/bravo-right.svg";
			}else if(part==2){
				character.src = "media/mario-right.png";
			}
		}
		event.preventDefault();
	}
});

window.addEventListener('keydown', (e) => {
	if(!modal){
		if(e.keyCode==39 || e.keyCode==40 || e.keyCode==68 || e.keyCode==83){
			if(!hidden){
				window.scrollTo(pageXOffset+20, 0);
				if(part==0){
					character.src = "media/dex-right.png";
				}else if(part==1){ 
					character.src = "media/bravo-right.svg";
				}else if(part==2){
					character.src = "media/mario-right.png";
				}
			}			
		}else if(e.keyCode==37 || e.keyCode==38 || e.keyCode==87 || e.keyCode==65){
			window.scrollTo(pageXOffset-20, 0);
			if(part==0){
				character.src = "media/dex-left.png";
			}else if(part==1){
				character.src = "media/bravo-left.svg";
			}else if(part==2){
				character.src = "media/mario-left.png";
			}
		}
	}	
});

var vs = null;

document.getElementById("left").addEventListener('mousedown', (e) => {
	if(!modal){
		vs = setInterval(() => {
			window.scrollTo(pageXOffset-20, 0);
			if(part==0){
				character.src = "media/dex-left.png";
			}else if(part==1){
				character.src = "media/bravo-left.svg";
			}else if(part==2){
				character.src = "media/mario-left.png";
			}
		}, 100);
	}	
});

document.getElementById("left").addEventListener('mouseup', (e) => {
	clearTimeout(vs);
});

document.getElementById("right").addEventListener('mousedown', (e) => {
	if(!modal && !hidden){
		vs = setInterval(() => {
			window.scrollTo(pageXOffset+20, 0);
			if(part==0){
				character.src = "media/dex-right.png";
			}else if(part==1){
				character.src = "media/bravo-right.svg";
			}else if(part==2){
				character.src = "media/mario-right.png";
			}
		}, 100);
	}	
});

document.getElementById("right").addEventListener('mouseup', (e) => {
	clearTimeout(vs);
});

var ratio = window.innerHeight/1000;

var bg = document.getElementById("bg");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var teamPage = document.getElementById("team-page");

bg.style.marginRight = ((6000+6000)*ratio) + "px";
bg2.style.left = 5500*ratio + "px";
bg3.style.left = (5500+6000)*ratio + "px";
// teamPage.style.left = (5500+6000+6000)*ratio - innerWidth + "px";

var box = document.getElementById("box");
var character = document.getElementById("character");

var inc = document.getElementById("inc");
var maqruee = document.getElementById("marquee");
var maqrueeContent = document.getElementById("marquee-content");
var flask = document.getElementById("flask");
var door1 = document.getElementById("door1");
var door1side = document.getElementById("door1side");
var door2 = document.getElementById("door2");
var door2side = document.getElementById("door2side");
var door3 = document.getElementById("door3");
var door3side = document.getElementById("door3side");
var fan1 = document.getElementById("fan1");

var oneX = 1250*ratio;
var oneW = 300*ratio;
var twoX = (1200+5500+6000)*ratio;
var twoW = 200*ratio;
var threeX = (1980+5500+6000)*ratio;
var fourX = (2400+5500+6000)*ratio;
var fourW = 270*ratio;
var fiveX = (3200+5500+6000)*ratio;
var fiveW = 270*ratio;
var sixX = (3725+5500+6000)*ratio;
var sixW = 200*ratio;

var doorX = 3505*ratio;
var door2X = (5500+6000)*ratio;
var door3X = 5500*ratio;

var level1 = document.getElementById("level1");
var level1X = 4000*ratio;
var level1W = 500*ratio;

var level2 = document.getElementById("level2");
var level2X = (5500+6000+450)*ratio;
var level2W = 500*ratio;

var gate = document.getElementById("gate");
var gateX = 4770*ratio;
var gateW = 336*ratio;
var gateFence = document.getElementById("gate-fence");

var modalBg = document.getElementById("modal-bg");

var carpe = document.getElementById("carpe");
var carpeX = (456+5500)*ratio;
var carpeModal = document.getElementById("carpe-modal");
var carpeClose = document.getElementById("carpe-close");

var nirvana = document.getElementById("nirvana");
var nirvanaX = (1663+5500)*ratio;
var nirvanaModal = document.getElementById("nirvana-modal");
var nirvanaClose = document.getElementById("nirvana-close");

var tm = document.getElementById("tm");
var tmX = (2894+5500)*ratio;
var tmModal = document.getElementById("tm-modal");
var tmClose = document.getElementById("tm-close");

var glit = document.getElementById("glit");
var glitX = (4919+5500)*ratio;
var glitModal = document.getElementById("glit-modal");
var glitClose = document.getElementById("glit-close");

var o1 = document.getElementById("o1");
var obj1 = document.getElementById("obj1");
var obj11 = document.getElementById("obj11");
var vwarz = document.getElementById("vwarz");

var obj3 = document.getElementById("obj3");
var obj30 = document.getElementById("obj30");
var dance = document.getElementById("dance");

var obj2 = document.getElementById("obj2");
var obj20 = document.getElementById("obj20");
var music = document.getElementById("music");

var obj4 = document.getElementById("obj4");
var obj40 = document.getElementById("obj40");
var drama = document.getElementById("drama");

var obj5 = document.getElementById("obj5");
var liter = document.getElementById("liter");

var onGround = true;
var revealedThree = false;
var hidden = false;
var revealing = false;

box.style.bottom = 100*ratio + "px";
inc.style.height = 300*ratio + "px";
inc.style.top = 30*ratio + "px";
inc.style.left = 1286*ratio + "px";
marquee.style.width = 965*ratio + "px";
marquee.style.height = 46*ratio + "px";
marquee.style.bottom = 370*ratio + "px";
marquee.style.left = 1804*ratio + "px";
flask.style.left = 2460*ratio + "px";
flask.style.bottom = 341*ratio + "px";
door1.style.height = 523*ratio + "px";
door1.style.bottom = 110*ratio + "px";
door1.style.left = 3505*ratio + "px";
door1side.style.width = 56*ratio + "px";
door1side.style.bottom = 95*ratio + "px";
door1side.style.left = 3449*ratio + "px";
door2.style.height = 523*ratio + "px";
door2.style.bottom = 110*ratio + "px";
door2.style.left = (5500+6000)*ratio + "px";
door2side.style.width = 56*ratio + "px";
door2side.style.bottom = 95*ratio + "px";
door2side.style.left = (5500+5945)*ratio + "px";
door3.style.height = 523*ratio + "px";
door3.style.bottom = 110*ratio + "px";
var bodyWidth = document.getElementsByTagName("body")[0].offsetWidth;
door3.style.right = (-5500)*ratio+bodyWidth + "px";
door3side.style.width = 56*ratio + "px";
door3side.style.bottom = 95*ratio + "px";
door3side.style.left = (5500)*ratio + "px";
fan1.style.left = (3405-33)*ratio + "px";
fan1.style.top = (140-36)*ratio + "px";
fan1.style.width = 66*ratio + "px";
level1.style.left = level1X + "px";
level1.style.top = "0px";
level1.style.width = level1W + "px";
gate.style.width = "0px";
gate.style.height = 287*ratio + "px";
gate.style.left = gateX + "px";
gate.style.bottom = 110*ratio + "px";
gateFence.style.width = 28*ratio + "px";
gateFence.style.height = 387*ratio + "px";
gateFence.style.left = 4743*ratio + "px";

carpe.style.left = carpeX + "px";
carpe.style.top = 140*ratio + "px";
carpe.style.width = 435*ratio + "px";
carpe.style.height = 256*ratio + "px";

nirvana.style.left = nirvanaX + "px";
nirvana.style.top = 140*ratio + "px";
nirvana.style.width = 547*ratio + "px";
nirvana.style.height = 245*ratio + "px";

tm.style.left = tmX + "px";
tm.style.top = 140*ratio + "px";
tm.style.width = 829*ratio + "px";
tm.style.height = 285*ratio + "px";

glit.style.left = glitX + "px";
glit.style.top = 140*ratio + "px";
glit.style.width = 450*ratio + "px";
glit.style.height = 200*ratio + "px";

level2.style.left = level2X + "px";
level2.style.top = "0px";
level2.style.width = level2W + "px";

obj1.style.width = 90*ratio + "px";
obj1.style.height = 90*ratio + "px";
obj1.style.left = (5500+6000+1800+92)*ratio + "px";
obj1.style.bottom = 555*ratio + "px";
obj11.style.width = 70*ratio + "px";
obj11.style.height = 70*ratio + "px";
obj11.style.left = (5500+6000+1800+102)*ratio + "px";
obj11.style.bottom = (555+90)*ratio + "px";
vwarz.style.left = (5500+6000+1800+155)*ratio + "px";
vwarz.style.bottom = (555+155)*ratio + "px";

obj3.style.width = 60*ratio + "px";
obj3.style.height = 60*ratio + "px";
obj3.style.left = (5500+6000+2400+45)*ratio + "px";
obj3.style.bottom = 329*ratio + "px";
obj30.style.width = 60*ratio + "px";
obj30.style.height = 60*ratio + "px";
obj30.style.left = (5500+6000+2400+45)*ratio + "px";
obj30.style.bottom = 329*ratio + "px";
dance.style.left = (5500+6000+2400+70)*ratio + "px";
dance.style.bottom = 380*ratio + "px";

obj2.style.width = 60*ratio + "px";
obj2.style.height = 60*ratio + "px";
obj2.style.left = (5500+6000+2400+135)*ratio + "px";
obj2.style.bottom = 329*ratio + "px";
obj20.style.width = 60*ratio + "px";
obj20.style.height = 60*ratio + "px";
obj20.style.left = (5500+6000+2400+135)*ratio + "px";
obj20.style.bottom = 329*ratio + "px";
music.style.left = (5500+6000+2400+150)*ratio + "px";
music.style.bottom = 380*ratio + "px";

obj4.style.width = 60*ratio + "px";
obj4.style.height = 60*ratio + "px";
obj4.style.left = (5500+6000+2400+225)*ratio + "px";
obj4.style.bottom = 329*ratio + "px";
obj40.style.width = 60*ratio + "px";
obj40.style.height = 60*ratio + "px";
obj40.style.left = (5500+6000+2400+225)*ratio + "px";
obj40.style.bottom = 329*ratio + "px";
drama.style.left = (5500+6000+2400+240)*ratio + "px";
drama.style.bottom = 380*ratio + "px";

obj5.style.width = 120*ratio + "px";
obj5.style.height = 90*ratio + "px";
obj5.style.left = (5500+6000+3200+138)*ratio + "px";
obj5.style.bottom = 200*ratio + "px";
liter.style.left = (5500+6000+3200+200)*ratio + "px";
liter.style.bottom = 270*ratio + "px";

window.addEventListener('scroll', handleScroll);

var scrolling;

function handleScroll(){

	clearTimeout(scrolling);

	if(!hidden){
		character.className = "walk";
	}	

	scrolling = setTimeout(() => {
		if(hidden){
			character.className = "hide";
		}else if(revealing){
			character.className = "reveal";
		}else{
			character.className = "";
		}		
	}, 666);

	if(
		( scrollX > ( oneX-( window.innerWidth/2 )-50 ) ) && ( scrollX < ( oneX+oneW+120-( window.innerWidth/2 )-50 ) )
	){			
		if(onGround){
			box.style.bottom = 300*ratio + "px";	
			onGround = false;
		}			
		setTimeout(() => {
			if( ( scrollX>( oneX-(window.innerWidth/2)-50 ) ) && ( scrollX<( oneX+oneW+120-(window.innerWidth/2)-50 ) ) ){
				box.style.bottom = 250*ratio + "px";
			}
		}, 250)
	}else if(
		( scrollX > ( twoX-( window.innerWidth/2 )-50 ) ) && ( scrollX < ( twoX+twoW+120-( window.innerWidth/2 )-60 ) )
	){
		if(onGround){
			box.style.bottom = 373*ratio + "px";
			onGround = false;
		}			
		setTimeout(() => {
			if( ( scrollX>( twoX-(window.innerWidth/2)-50 ) ) && ( scrollX<( twoX+twoW+120-(window.innerWidth/2)-60 ) ) ){
				box.style.bottom = 323*ratio + "px";
			}
		}, 250)
	}else if(
		( scrollX > ( threeX-( window.innerWidth/2 )-100 ) ) && ( scrollX < ( threeX-( window.innerWidth/2 ) ) )
	){
		if(!revealedThree){
			modal = true;
			window.scrollTo( (threeX-( window.innerWidth/2 )-20), 0 );
			box.style.bottom = (560*ratio-244) + "px";
			obj1.className = "pop";
			revealedThree = true;
			setTimeout(()=>{
				modal = false;				
			}, 150);
			setTimeout(() => {
				box.style.bottom = 100*ratio + "px";
			}, 250);
			setTimeout(() => {
				o1.className = "revealed";
			}, 500);
		}
	}else if(
		( scrollX > ( fourX-( window.innerWidth/2 )-50 ) ) && ( scrollX < ( fourX+fourW+120-( window.innerWidth/2 )-60 ) )
	){
		if(onGround){
			box.style.bottom = 373*ratio + "px";
			onGround = false;
		}			
		setTimeout(() => {
			if( ( scrollX>( fourX-(window.innerWidth/2)-50 ) ) && ( scrollX<( fourX+fourW+120-(window.innerWidth/2)-60 ) ) ){
				box.style.bottom = 323*ratio + "px";
			}
		}, 250)
	}else if(
		( scrollX > ( fiveX-( window.innerWidth/2 )-50 ) ) && ( scrollX < ( fiveX+fiveW+120-( window.innerWidth/2 )-60 ) )
	){
		if(onGround){
			box.style.bottom = 240*ratio + "px";
			onGround = false;
		}			
		setTimeout(() => {
			if( ( scrollX>( fiveX-(window.innerWidth/2)-50 ) ) && ( scrollX<( fiveX+fiveW+120-(window.innerWidth/2)-60 ) ) ){
				box.style.bottom = 190*ratio + "px";
			}
		}, 250)
	}else if(
		( scrollX > ( sixX-( window.innerWidth/2 )-50 ) ) && ( scrollX < ( sixX+sixW+120-( window.innerWidth/2 )-60 ) )
	){
		if(onGround){
			box.style.bottom = 373*ratio + "px";
			onGround = false;
		}			
		setTimeout(() => {
			if( ( scrollX>( sixX-(window.innerWidth/2)-50 ) ) && ( scrollX<( sixX+sixW+120-(window.innerWidth/2)-60 ) ) ){
				box.style.bottom = 323*ratio + "px";
			}
		}, 250)
	}else{
		box.style.bottom = 100*ratio + "px";
		onGround = true;
	}

	if( scrollX > ( sixX-( window.innerWidth/2 )-50+100 ) ){
		if(!hidden){
			modal = true;
			character.className = "hide";
			hidden = true;
			setTimeout(() => {
				// modal = false;
				character.style.opacity = 0;
				teamPage.style.height = "100vh";
				// window.scrollTo((5500+6000+3470)*ratio, 0);
			}, 1500);
		}
	}else{
		if(hidden){
			modal = true;
			hidden = false;
			revealing = true;
			character.style.top = "100%";
			character.style.opacity = 1;
			character.className = "reveal";
			setTimeout(() => {
				modal = false;
				revealing = false;
				character.style.top = "0";
			}, 1000);
		}
	}

	if( scrollX > ( fourX-( window.innerWidth/2 )-50+40 ) ){
		obj3.src = "media/dance.svg";
		obj3.style.width = 70*ratio + "px";
		obj3.style.height = 70*ratio + "px";
	}

	if( scrollX > ( fourX-( window.innerWidth/2 )-50+130 ) ){
		obj2.src = "media/music.svg";
		obj2.style.width = 70*ratio + "px";
		obj2.style.height = 70*ratio + "px";
	}

	if( scrollX > ( fourX-( window.innerWidth/2 )-50+220 ) ){
		obj4.src = "media/drama.svg";
		obj4.style.width = 70*ratio + "px";
		obj4.style.height = 70*ratio + "px";
	}

	if( scrollX > ( fiveX-( window.innerWidth/2 )-50+130 ) ){
		obj5.src = "media/flag11.svg";
		obj5.style.bottom = 750*ratio + "px";
		liter.style.bottom = "auto";
		liter.style.top = 220*ratio + "px";
	}

	if( scrollX>( oneX+( oneW/2 )-(window.innerWidth/2)-50 ) ){
		inc.style.width = 912*ratio + "px";
		maqrueeContent.style.opacity = 1;
	}

	if( scrollX>( doorX-(window.innerWidth/2)-50) ){
		door1.style.width = 268*ratio + "px";
	}else{
		door1.style.width = 0 + "px";
	}
	if( scrollX>( door2X-(window.innerWidth/2)-50) ){
		door2.style.width = 268*ratio + "px";
	}else{
		door2.style.width = 0 + "px";
	}
	if( scrollX>( door3X-(window.innerWidth/2)-50) ){
		door3.style.width = 268*ratio + "px";
	}else{
		door3.style.width = 0 + "px";
	}

	if( scrollX>( level1X-(window.innerWidth/2)-70 ) && scrollX<( level1X+level1W-(window.innerWidth/2)+70 ) ){
		level1.style.height = 900*ratio + "px";
	}else{
		level1.style.height = "0px";
	}

	if( scrollX>( level2X-(window.innerWidth/2)-70 ) && scrollX<( level2X+level2W-(window.innerWidth/2)+70 ) ){
		level2.style.height = 900*ratio + "px";
	}else{
		level2.style.height = "0px";
	}

	if( scrollX>( gateX-(window.innerWidth/2) ) ){
		gate.style.width = gateW + "px";
	}else{
		gate.style.width = "0px";
	}

	if(  scrollX>( level2X-(window.innerWidth/2) + level2W/2 ) ){
		part = 2;
	}else if( scrollX>( level1X-(window.innerWidth/2) + level1W/2 ) ){
		part = 1;
	}else{
		part = 0;
	}

	if( scrollX>( glitX-(window.innerWidth/2) + 100 ) ){
		glit.className = "bounce";
	}else if( scrollX>( tmX-(window.innerWidth/2) + 100 ) ){
		tm.className = "bounce";
	}else if( scrollX>( nirvanaX-(window.innerWidth/2) + 100 ) ){
		nirvana.className = "bounce";
	}else if( scrollX>( carpeX-(window.innerWidth/2) + 100 ) ){
		carpe.className = "bounce";
	}

	carpe.addEventListener('click', function(){
		if(carpeModal.className==""){
			carpeModal.className = "small";
			nirvana.style.zIndex = 4000;
			modal = true;
			window.scrollTo(carpeX-(0.1*window.innerWidth), 0);
			modalBg.style.opacity = 1;
			setTimeout(() => {
				carpeModal.className = "expand";
			}, 200);
		}
	});

	carpeClose.addEventListener('click', function(e){
		carpeModal.className = "small";
		modal = false;
		modalBg.style.opacity = 0;
		setTimeout(() => {
			carpeModal.className = "";
			nirvana.style.zIndex = 5050;
		}, 1000);
		e.stopPropagation();
	});

	nirvana.addEventListener('click', function(){
		if(nirvanaModal.className==""){
			nirvanaModal.className = "small";
			tm.style.zIndex = 4000;
			modal = true;
			window.scrollTo(nirvanaX-(0.1*window.innerWidth), 0);
			modalBg.style.opacity = 1;
			setTimeout(() => {
				nirvanaModal.className = "expand";
			}, 200);
		}
	});

	nirvanaClose.addEventListener('click', function(e){
		nirvanaModal.className = "small";		
		modal = false;
		modalBg.style.opacity = 0;
		setTimeout(() => {
			nirvanaModal.className = "";
			tm.style.zIndex = 5050;
		}, 1000);
		e.stopPropagation();
	});

	tm.addEventListener('click', function(){
		if(tmModal.className==""){
			tmModal.className = "small";
			modal = true;
			window.scrollTo(tmX-(0.1*window.innerWidth), 0);
			modalBg.style.opacity = 1;
			setTimeout(() => {
				tmModal.className = "expand";
			}, 200);
		}
	});

	tmClose.addEventListener('click', function(e){
		tmModal.className = "small";		
		modal = false;
		modalBg.style.opacity = 0;
		setTimeout(() => {
			tmModal.className = "";
		}, 1000);
		e.stopPropagation();
	});

	glit.addEventListener('click', function(){
		if(glitModal.className==""){
			glitModal.className = "small";
			modal = true;
			window.scrollTo(glitX-(0.1*window.innerWidth), 0);
			modalBg.style.opacity = 1;
			setTimeout(() => {
				glitModal.className = "expand";
			}, 200);
		}
	});

	glitClose.addEventListener('click', function(e){
		glitModal.className = "small";		
		modal = false;
		modalBg.style.opacity = 0;
		setTimeout(() => {
			glitModal.className = "";
		}, 1000);
		e.stopPropagation();
	});

	obj11.addEventListener('mouseenter', () => {
		vwarz.style.opacity = 1;
	});
	obj11.addEventListener('mouseleave', () => {
		vwarz.style.opacity = 0;
	});

	obj30.addEventListener('mouseenter', () => {
		dance.style.opacity = 1;
	});
	obj30.addEventListener('mouseleave', () => {
		dance.style.opacity = 0;
	});

	obj20.addEventListener('mouseenter', () => {
		music.style.opacity = 1;
	});
	obj20.addEventListener('mouseleave', () => {
		music.style.opacity = 0;
	});

	obj40.addEventListener('mouseenter', () => {
		drama.style.opacity = 1;
	});
	obj40.addEventListener('mouseleave', () => {
		drama.style.opacity = 0;
	});

	obj5.addEventListener('mouseenter', () => {
		liter.style.opacity = 1;
	});
	obj5.addEventListener('mouseleave', () => {
		liter.style.opacity = 0;
	});

	document.getElementById("bclose").addEventListener('click', () => {
		modal = false;
		teamPage.style.height = 0;		
		document.getElementById("cep").className = "";
		document.getElementById('dev').style.opacity = 0;
		document.getElementById('bhawani').style.opacity = 0;
		document.getElementById('aniket').style.opacity = 0;
		document.getElementById('ronit').style.opacity = 0;
		document.getElementById('deepak').style.opacity = 0;
		document.getElementById('naveen').style.opacity = 0;	
		document.getElementById('udit').style.opacity = 0;
		document.getElementById('sonal').style.opacity = 0;
		document.getElementById('vishnu').style.opacity = 0;
		document.getElementById('khatri').style.opacity = 0;
		document.getElementById('ankit').style.opacity = 0;
		document.getElementById('prantik').style.opacity = 0;
		document.getElementById('samim').style.opacity = 0;
		document.getElementById('kunal').style.opacity = 0;
		document.getElementById('satyam').style.opacity = 0;
		document.getElementById('manish').style.opacity = 0;
		document.getElementById('satyamp').style.opacity = 0;
		document.getElementById('shrinjay').style.opacity = 0;
	});

	document.getElementById("cep").addEventListener('click', () => {
		window.open("http://fb.com/cepillopixels");
	});


}