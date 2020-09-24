localStorage.setItem('state', 0);

var sendButton = document.querySelector("#phone #send");
var resendButton = document.querySelector("#phone #resend");
var editButton = document.querySelector("#phone #edit");
var phone = document.querySelector("#phone");
var phoneInput = document.querySelector("#ip-phone");

sendButton.addEventListener('click', function(e){

	var state = localStorage.getItem('state');

	if(!state || state==0){
		// resendButton.style.display = "inline-block";
		// editButton.style.display = "inline-block";
		phone.className = "state1";
		localStorage.setItem('state', 1);
		localStorage.setItem('phoneNumber', phoneInput.value);
		phoneInput.placeholder = "OTP";	
	}
	else if(state==1){
		// sendButton.style.display = "none";
		// resendButton.style.display = "none";
		// editButton.style.display = "none";
		phone.className = "state2"
		localStorage.setItem('state', 2);
		phoneInput.value = "OTP Verified";	
	}
})

resendButton.addEventListener('click', function(e){

})

editButton.addEventListener('click', function(e){
	localStorage.setItem('state', 0);
	phone.className = "state0";
	phoneInput.placeholder = "Phone Number";
	phoneInput.value = localStorage.getItem('phoneNumber');
})