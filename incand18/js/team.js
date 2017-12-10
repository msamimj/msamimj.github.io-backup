var v0 = new Vivus('svg0', {
	duration: 35,
	file: 'media/team-text-patron.svg',
	type: 'oneByOne',
	start: 'autostart'
});

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

var svg0 = document.getElementById('svg0');
var svg1 = document.getElementById('svg1');
var svg2 = document.getElementById('svg2');
var svg3 = document.getElementById('svg3');
var svg4 = document.getElementById('svg4');
var svg5 = document.getElementById('svg5');
var svg6 = document.getElementById('svg6');
var svg7 = document.getElementById('svg7');

document.getElementById("team0").addEventListener('click', ()=>{
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg0.style.opacity = 1;
	document.getElementById('pencil').className = "write";
	v0.reset().play(displayPatron);
});

document.getElementById("team1").addEventListener('click', ()=>{
	v0.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg1.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v1.reset().play(displayConvener);
});

document.getElementById("team2").addEventListener('click', ()=>{
	v0.reset();
	v1.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg2.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v2.reset().play(displayExecutive);
});

document.getElementById("team3").addEventListener('click', ()=>{
	v0.reset();
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg7.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v7.reset().play(displayTechnical);
});

document.getElementById("team4").addEventListener('click', ()=>{
	v0.reset();
	v1.reset();
	v2.reset();
	v4.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg3.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v3.reset().play(displayMarketing);
});

document.getElementById("team5").addEventListener('click', ()=>{
	v0.reset();
	v1.reset();
	v2.reset();
	v3.reset();
	v5.reset();
	v6.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg4.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v4.reset().play(displayLogistic);
});

document.getElementById("team6").addEventListener('click', ()=>{
	v0.reset();
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v6.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg5.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v5.reset().play(displayWeb);
});

document.getElementById("team7").addEventListener('click', ()=>{
	v0.reset();
	v1.reset();
	v2.reset();
	v3.reset();
	v4.reset();
	v5.reset();
	v7.reset();
	svg0.style.opacity = 0;
	svg1.style.opacity = 0;
	svg2.style.opacity = 0;
	svg3.style.opacity = 0;
	svg4.style.opacity = 0;
	svg5.style.opacity = 0;
	svg6.style.opacity = 0;
	svg7.style.opacity = 0;
	svg6.style.opacity = 1;
	document.getElementById('pencil').className = "write";	
	v6.reset().play(displayDeco);
});

var rajat = document.getElementById('rajat');
var ahmed = document.getElementById('ahmed');
var dev = document.getElementById('dev');
var bhawani = document.getElementById('bhawani');
var aniket = document.getElementById('aniket');
var ronit = document.getElementById('ronit');
var deepak = document.getElementById('deepak');
var naveen = document.getElementById('naveen');
var udit = document.getElementById('udit');
var sonal = document.getElementById('sonal');
var vishnu = document.getElementById('vishnu');
var khatri = document.getElementById('khatri');
var ankit = document.getElementById('ankit');
var prantik = document.getElementById('prantik');
var samim = document.getElementById('samim');
var mayukh = document.getElementById('mayukh');
var kunal = document.getElementById('kunal');
var satyam = document.getElementById('satyam');
var miansh = document.getElementById('manish');
var satyamp = document.getElementById('satyamp');
var shrinjay = document.getElementById('shrinjay');
var pencil = document.getElementById('pencil');
var cep = document.getElementById('cep');

var displayPatron = function(){
	rajat.style.opacity = 1;
	ahmed.style.opacity = 1;
	dev.style.opacity = 0;
	bhawani.style.opacity = 0;
	aniket.style.opacity = 0;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 9000;
	ahmed.style.zIndex = 9000;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayConvener = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 1;
	bhawani.style.opacity = 1;
	aniket.style.opacity = 1;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 9000;
	bhawani.style.zIndex = 9000;
	aniket.style.zIndex = 9000;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayExecutive = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 0;
	bhawani.style.opacity = 0;
	aniket.style.opacity = 0;
	ronit.style.opacity = 1;
	deepak.style.opacity = 1;
	naveen.style.opacity = 1;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 9000;
	deepak.style.zIndex = 9000;
	naveen.style.zIndex = 9000;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayMarketing = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 0;
	bhawani.style.opacity = 0;
	aniket.style.opacity = 0;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 1;
	sonal.style.opacity = 1;
	vishnu.style.opacity = 1;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 9000;
	sonal.style.zIndex = 9000;
	vishnu.style.zIndex = 9000;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayLogistic = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 0;
	bhawani.style.opacity = 0;
	aniket.style.opacity = 0;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 1;
	ankit.style.opacity = 1;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 9000;
	ankit.style.zIndex = 9000;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayWeb = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 0;
	bhawani.style.opacity = 0;
	aniket.style.opacity = 0;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 1;
	samim.style.opacity = 1;
	mayukh.style.opacity = 1;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 9000;
	samim.style.zIndex = 9000;
	mayukh.style.zIndex = 9000;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayTechnical = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 0;
	bhawani.style.opacity = 0;
	aniket.style.opacity = 0;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 1;
	satyam.style.opacity = 1;
	manish.style.opacity = 0;
	satyamp.style.opacity = 0;
	shrinjay.style.opacity = 0;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 9000;
	satyam.style.zIndex = 9000;
	manish.style.zIndex = 1;
	satyamp.style.zIndex = 1;
	shrinjay.style.zIndex = 1;

	pencil.className = "";
	cep.className = "next";
}

var displayDeco = function(){
	rajat.style.opacity = 0;
	ahmed.style.opacity = 0;
	dev.style.opacity = 1;
	bhawani.style.opacity = 1;
	aniket.style.opacity = 1;
	ronit.style.opacity = 0;
	deepak.style.opacity = 0;
	naveen.style.opacity = 0;
	udit.style.opacity = 0;
	sonal.style.opacity = 0;
	vishnu.style.opacity = 0;
	khatri.style.opacity = 0;
	ankit.style.opacity = 0;
	prantik.style.opacity = 0;
	samim.style.opacity = 0;
	mayukh.style.opacity = 0;
	kunal.style.opacity = 0;
	satyam.style.opacity = 0;
	manish.style.opacity = 1;
	satyamp.style.opacity = 1;
	shrinjay.style.opacity = 1;

	rajat.style.zIndex = 1;
	ahmed.style.zIndex = 1;
	dev.style.zIndex = 1;
	bhawani.style.zIndex = 1;
	aniket.style.zIndex = 1;
	ronit.style.zIndex = 1;
	deepak.style.zIndex = 1;
	naveen.style.zIndex = 1;
	udit.style.zIndex = 1;
	sonal.style.zIndex = 1;
	vishnu.style.zIndex = 1;
	khatri.style.zIndex = 1;
	ankit.style.zIndex = 1;
	prantik.style.zIndex = 1;
	samim.style.zIndex = 1;
	mayukh.style.zIndex = 1;
	kunal.style.zIndex = 1;
	satyam.style.zIndex = 1;
	manish.style.zIndex = 9000;
	satyamp.style.zIndex = 9000;
	shrinjay.style.zIndex = 9000;

	pencil.className = "";
	cep.className = "next";
}