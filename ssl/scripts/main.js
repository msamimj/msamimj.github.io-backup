document.addEventListener('scroll', function(){
	if(window.pageYOffset>(document.getElementById('div0').offsetHeight-(0.05*window.innerHeight))){
		document.getElementById('logo').className = 'stick';
	}else if(window.pageYOffset > window.innerHeight*0.65){
		document.getElementById('logo').className = 'appear';
	}else{
		document.getElementById('logo').className = '';
	}
})