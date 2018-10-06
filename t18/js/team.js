var height = window.innerHeight;
var teammain = document.getElementById('teammain');

var ind = 0;
var indlen = 12;
var temp;

function sscroll(id){

	if(id>=0){
		ind = id;
	}

	console.log(ind);

	teammain.scroll({
		top: height*ind,
		left: 0,
		behavior: 'smooth'
	});
}

document.getElementById('next').addEventListener('click', function(){

	temp = ind+1
	if(temp>=0 && temp<indlen)
		ind = temp;
	sscroll();
})

document.getElementById('prev').addEventListener('click', function(){

	temp = ind-1;
	if(temp>=0 && temp<indlen)
		ind = temp;
	sscroll();
})

document.getElementById('ni1').addEventListener("click",function(){
	sscroll(0);
});

document.getElementById('ni2').addEventListener("click",function(){
	sscroll(1);
});

document.getElementById('ni3').addEventListener("click",function(){
	sscroll(2);
});

document.getElementById('ni4').addEventListener("click",function(){
	sscroll(3);
});

document.getElementById('ni5').addEventListener("click",function(){
	sscroll(4);
});

document.getElementById('ni6').addEventListener("click",function(){
	sscroll(5);
});

document.getElementById('ni7').addEventListener("click",function(){
	sscroll(6);
});

document.getElementById('ni8').addEventListener("click",function(){
	sscroll(7);
});

document.getElementById('ni9').addEventListener("click",function(){
	sscroll(8);
});
document.getElementById('ni10').addEventListener("click",function(){
	sscroll(9);
});
document.getElementById('ni11').addEventListener("click",function(){
	sscroll(10);
});
document.getElementById('ni12').addEventListener("click",function(){
	sscroll(11);
});