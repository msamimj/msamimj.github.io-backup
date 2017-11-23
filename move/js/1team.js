var v1 = new Vivus('svg1', {
	duration: 35,
	file: 'media/team-text-convener.svg',
	type: 'oneByOne',
	start: 'autostart'
});

var v2 = new Vivus('svg2', {
	duration: 35,
	file: 'media/team-text-executive.svg',
	type: 'oneByOne',
	start: 'autostart'
});

var v7 = new Vivus('svg7', {
	duration: 35,
	file: 'media/team-text-technical.svg',
	type: 'oneByOne',
	start: 'autostart'
});

var v3 = new Vivus('svg3', {
	duration: 35,
	file: 'media/team-text-marketing.svg',
	type: 'oneByOne',
	start: 'autostart'
});

var v4 = new Vivus('svg4', {
	duration: 35,
	file: 'media/team-text-logistic.svg',
	type: 'oneByOne',
	start: 'autostart'
});

var v5 = new Vivus('svg5', {
	duration: 35,
	file: 'media/team-text-web.svg',
	type: 'oneByOne',
	start: 'autostart'
});
var ratio = window.innerHeight/1000;

var v6 = new Vivus('svg6', {
	duration: 35,
	file: 'media/team-text-deco.svg',
	type: 'oneByOne',
	start: 'autostart'
});
var ratio = window.innerHeight/1000;

document.getElementById("team1").addEventListener('click', ()=>{
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	document.getElementById('svg1').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v1.reset().play(displayConvener);
});

document.getElementById("team2").addEventListener('click', ()=>{
	v1.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	document.getElementById('svg2').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v2.reset().play(displayExecutive);
});

document.getElementById("team3").addEventListener('click', ()=>{
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	document.getElementById('svg7').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v7.reset().play(displayTechnical);
});

document.getElementById("team4").addEventListener('click', ()=>{
	v1.reset();
	v2.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	document.getElementById('svg3').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v3.reset().play(displayMarketing);
});

document.getElementById("team5").addEventListener('click', ()=>{
	v1.reset();
	v2.reset();
	v3.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	document.getElementById('svg4').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v4.reset().play(displayLogistic);
});

document.getElementById("team6").addEventListener('click', ()=>{
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v6.reset();
	v7.reset();
	document.getElementById('svg5').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v5.reset().play(displayWeb);
});

document.getElementById("team7").addEventListener('click', ()=>{
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v7.reset();
	document.getElementById('svg6').style.display = "inline-block";
	document.getElementById('pencil').className = "write";	
	v6.reset().play(displayDeco);
});

var displayConvener = function(){
	document.getElementById('dev').style.opacity = 1;
	document.getElementById('bhawani').style.opacity = 1;
	document.getElementById('aniket').style.opacity = 1;
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
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

var displayExecutive = function(){
	document.getElementById('dev').style.opacity = 0;
	document.getElementById('bhawani').style.opacity = 0;
	document.getElementById('aniket').style.opacity = 0;
	document.getElementById('ronit').style.opacity = 1;
	document.getElementById('deepak').style.opacity = 1;
	document.getElementById('naveen').style.opacity = 1;	
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
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

var displayMarketing = function(){
	document.getElementById('dev').style.opacity = 0;
	document.getElementById('bhawani').style.opacity = 0;
	document.getElementById('aniket').style.opacity = 0;
	document.getElementById('ronit').style.opacity = 0;
	document.getElementById('deepak').style.opacity = 0;
	document.getElementById('naveen').style.opacity = 0;	
	document.getElementById('udit').style.opacity = 1;
	document.getElementById('sonal').style.opacity = 1;
	document.getElementById('vishnu').style.opacity = 1;
	document.getElementById('khatri').style.opacity = 0;
	document.getElementById('ankit').style.opacity = 0;
	document.getElementById('prantik').style.opacity = 0;
	document.getElementById('samim').style.opacity = 0;
	document.getElementById('kunal').style.opacity = 0;
	document.getElementById('satyam').style.opacity = 0;
	document.getElementById('manish').style.opacity = 0;
	document.getElementById('satyamp').style.opacity = 0;
	document.getElementById('shrinjay').style.opacity = 0;
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

var displayLogistic = function(){
	document.getElementById('dev').style.opacity = 0;
	document.getElementById('bhawani').style.opacity = 0;
	document.getElementById('aniket').style.opacity = 0;
	document.getElementById('ronit').style.opacity = 0;
	document.getElementById('deepak').style.opacity = 0;
	document.getElementById('naveen').style.opacity = 0;	
	document.getElementById('udit').style.opacity = 0;
	document.getElementById('sonal').style.opacity = 0;
	document.getElementById('vishnu').style.opacity = 0;
	document.getElementById('khatri').style.opacity = 1;
	document.getElementById('ankit').style.opacity = 1;
	document.getElementById('prantik').style.opacity = 0;
	document.getElementById('samim').style.opacity = 0;
	document.getElementById('kunal').style.opacity = 0;
	document.getElementById('satyam').style.opacity = 0;
	document.getElementById('manish').style.opacity = 0;
	document.getElementById('satyamp').style.opacity = 0;
	document.getElementById('shrinjay').style.opacity = 0;
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

var displayWeb = function(){
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
	document.getElementById('prantik').style.opacity = 1;
	document.getElementById('samim').style.opacity = 1;
	document.getElementById('kunal').style.opacity = 0;
	document.getElementById('satyam').style.opacity = 0;
	document.getElementById('manish').style.opacity = 0;
	document.getElementById('satyamp').style.opacity = 0;
	document.getElementById('shrinjay').style.opacity = 0;
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

var displayTechnical = function(){
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
	document.getElementById('kunal').style.opacity = 1;
	document.getElementById('satyam').style.opacity = 1;
	document.getElementById('manish').style.opacity = 0;
	document.getElementById('satyamp').style.opacity = 0;
	document.getElementById('shrinjay').style.opacity = 0;
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

var displayDeco = function(){
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
	document.getElementById('manish').style.opacity = 1;
	document.getElementById('satyamp').style.opacity = 1;
	document.getElementById('shrinjay').style.opacity = 1;
	document.getElementById('pencil').className = "";
	document.getElementById('cep').className = "next";
}

// window.scrollTo((5500+6000+3470)*ratio, 0);