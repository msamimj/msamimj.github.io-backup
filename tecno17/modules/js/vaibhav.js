// When the user clicks the modules
var currentEvent = "Amazers";

function alertCurrentModule(){
	alert(localStorage.getItem("currentEvent"));
}

function showModuleDetails(element) {
	// event.preventDefault();
	var target = $(element);
	var span = target.find('span');

	// var text = "Event details will be available soon";
	// alert(span.text());
	
	switch(span.text()){
		case "Amazers":
			currentEvent = "Amazers";
			window.location = "../events/amazers.html";
			break;
		case "Spark":
			currentEvent = "Spark";
			window.location = "../Spark/index.html";
			break;
		case "Robotron":
			currentEvent = "Robotron";
			window.location = "../events/robotron.html";
			break;
		case "School Genius":
			currentEvent = "School Genius";
			window.location = "../events/schoolgenius.html";
			break;
		case "Conferanza":
			currentEvent = "Conferanza";
			window.location = "../events/conferanza.html";
			break;
		case "Workshops":
			currentEvent = "Workshops";
			window.location = "../events/workshops.html";
			break;
		case "Showcase":
			currentEvent = "Showcase";
			window.location = "../events/showcase.html";
			break;
		case "Cyberwarp":
			currentEvent = "Cyberwarp";
			window.location = "../events/cyberwarp.html";
			break;
		case "Initiative":
			currentEvent = "Initiative";
			window.location = "../events/initiative.html";
			break;
		case "Myndsnare":
			currentEvent = "Myndsnare";
			window.location = "../events/myndsnare.html";
			break;
		case "Techzenith":
			currentEvent = "Techzenith";
			window.location = "../events/techzenith.html";
			break;
		case "Smartcity":
			currentEvent = "Smartcity";
			window.location = "../events/smartcity.html";
			break;
		default:
			break;
	}
	// $("#eventDescriptionAlert").text(text);
    // modal.style.display = "block";
}