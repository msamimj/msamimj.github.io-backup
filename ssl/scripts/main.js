document.addEventListener('scroll', function(){
	if(window.pageYOffset>(document.getElementById('div0').offsetHeight-(0.05*window.innerHeight))){
		document.getElementById('logo').className = 'stick';
	}else if(window.pageYOffset > window.innerHeight*0.65){
		document.getElementById('logo').className = 'appear';
	}else{
		document.getElementById('logo').className = '';
	}
})

var div4 = document.getElementById('div4');

var testimonials = document.getElementsByClassName('testimonial');

var testimonialsDiv = document.getElementById('testimonials');

// testimonialsDiv.style.width = testimonials.length * 0.7 * window.innerWidth + 'px';
testimonialsDiv.style.height = testimonials[0].scrollHeight + .08*window.innerWidth + 'px';

for(var i=0; i<testimonials.length; i++){
	testimonials[i].style.left = (i * 0.7 * window.innerWidth) + 'px';
}

var right = document.getElementById('right-test');

right.addEventListener('click', nextTest);

function nextTest(){
	var curr = testimonialsDiv.scrollLeft;
	var next = curr + 0.7*innerWidth;
	testimonialsDiv.scrollTo(next, 0);
}

var left = document.getElementById('left-test');

left.addEventListener('click', prevTest);

function prevTest(){
	var curr = testimonialsDiv.scrollLeft;
	var prev = curr - 0.7*innerWidth;
	testimonialsDiv.scrollTo(prev, 0);
}