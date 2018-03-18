var consumerContent = null;
var merchantContent = null;
var navConsumer = document.getElementById('nav-consumer');
var navMerchant = document.getElementById('nav-merchant');

window.onload = function(){
	consumerContent = document.getElementsByClassName('consumer-content');
	merchantContent = document.getElementsByClassName('merchant-content');
	hideConsumer();
}

function hideConsumer(){
	for(var i=0; i<consumerContent.length; i++){
		consumerContent[i].style.display = "none";
	}
	navConsumer.className = "";
}

function hideMerchant(){
	for(var i=0; i<merchantContent.length; i++){
		merchantContent[i].style.display = "none";
	}
	navMerchant.className = "";
}

function showConsumer(){
	for(var i=0; i<consumerContent.length; i++){
		consumerContent[i].style.display = "block";
	}
	navConsumer.className = "active";
}

function showMerchant(){
	for(var i=0; i<merchantContent.length; i++){
		merchantContent[i].style.display = "block";
	}
	navMerchant.className = "active";
}

navConsumer.addEventListener('click', function(){
	hideMerchant();
	showConsumer();	
});

navMerchant.addEventListener('click', function(){
	hideConsumer();
	showMerchant();	
});