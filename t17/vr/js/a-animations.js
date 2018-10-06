    function loadModel(){

    	var view=document.getElementById("view");
    	var sky= document.getElementById("sky");
    	var instructionBox=document.getElementById("instructionBox");
    	var instructionImage=document.getElementById("instructionImage");
        
        document.querySelector('#view').emit('loadModel');

    	instructionImage.setAttribute("visible","true");
    	instructionBox.setAttribute("visible","true");
    	

        view.setAttribute("wasd-controls-enabled","false");
        sky.setAttribute("src","images/Background/mountains.png");
    }

    function teamLoad() {  
        window.open("../Team/index.html");
    }

    function informativeLoad(){
        window.open("../main/index.html");
    }
    
    function contactLoad() {
        window.open("../main/index.html#contact");
    }

    function sparkLoad() {
        window.open("../Spark/index.html");
    }

    function changeViewLibrary() {
        var view=document.getElementById("view");
        var boxLibrary=document.getElementById("boxLibrary");
    	var boxGallery=document.getElementById("boxGallery");
    	
        document.querySelector('#view').emit('startMovingToLibrary');

        boxLibrary.setAttribute("visible","false");
    	boxGallery.setAttribute("visible","true");
        
    	view.setAttribute("wasd-controls-enabled","true");        
    }
    
    function changeViewGallery() {
        var view=document.getElementById("view");
        var boxLibrary=document.getElementById("boxLibrary");
    	var boxGallery=document.getElementById("boxGallery");
    	
        document.querySelector('#view').emit('startMovingToGallery');

        boxLibrary.setAttribute("visible","true");
    	boxGallery.setAttribute("visible","false");
        
    	view.setAttribute("wasd-controls-enabled","true");        
    }

    function changeViewAreial(){
    	var view=document.getElementById("view");
    	
    	var boxAerial=document.getElementById("boxAerial");
    	var boxBase=document.getElementById("boxBase");
    	var boxHome=document.getElementById("boxHome");
    	var boxLibrary=document.getElementById("boxLibrary");
    	var boxGallery=document.getElementById("boxGallery");
    	
    	document.querySelector('#model').emit('startRotation');
    	document.querySelector('#view').emit('startFlying');

    	boxAerial.setAttribute("visible","false");
    	boxHome.setAttribute("visible","false");
    	boxLibrary.setAttribute("visible","false");
    	boxBase.setAttribute("visible","true");
    	boxGallery.setAttribute("visible","false");
    
    	view.setAttribute("wasd-controls-enabled","false"); 
    }

    function changeViewBase(){
    	var view=document.getElementById("view");
    	var model=document.getElementById("model");
    	var boxAerial=document.getElementById("boxAerial");
    	var boxBase=document.getElementById("boxBase");
    	var boxHome=document.getElementById("boxHome");
    	var boxLibrary=document.getElementById("boxLibrary");
    	var boxGallery=document.getElementById("boxGallery");

    	view.setAttribute("wasd-controls-enabled","true");
    	
    	boxAerial.setAttribute("visible","true");
    	boxHome.setAttribute("visible","true");
    	boxLibrary.setAttribute("visible","true");
    	boxBase.setAttribute("visible","false");
    	boxGallery.setAttribute("visible","false");
    	
    	document.querySelector('#model').emit('stopRotation');
    	document.querySelector('#model').emit('stopFlying');
    	document.querySelector('#view').emit('stopFlying');               
    }

    function changeViewHome(){
    	var view=document.getElementById("view");
    	var sky= document.getElementById("sky");
        
    	view.setAttribute("wasd-controls-enabled","false");
    	sky.setAttribute("src","images/Background/mountains.png");
    	sky.setAttribute("rotation",
    	    	{
    	    			x:0,
    	    			y:190,
    	    			z:0
    	    	});
    	 
    	document.querySelector('#view').emit('backToHome');                
    }

    function changeViewHome2(){
    	var view=document.getElementById("view");
    	var sky= document.getElementById("sky");
        
    	view.setAttribute("wasd-controls-enabled","false");
    	sky.setAttribute("src","images/Background/mountains.png");
    	sky.setAttribute("rotation",
    	    	{
    	    			x:0,
    	    			y:190,
    	    			z:0
    	    	});
    	
    	document.querySelector('#view').emit('backToHome2');                
    }

    function changeViewModules(){
    	var view=document.getElementById("view");
    	var sky= document.getElementById("sky");
        
    	view.setAttribute("wasd-controls-enabled","false");
    	sky.setAttribute("src","images/Background/mountains.png");
    	sky.setAttribute("rotation",
    	{
    			x:0,
    			y:180,
    			z:0
    	});
    	
    	view.setAttribute("wasd-controls-enabled","false");
    	document.querySelector('#view').emit('loadModules');                
    }

    function landModel(){
    	var view=document.getElementById("view");
    	var instructionBox=document.getElementById("instructionBox");
    	var instructionImage=document.getElementById("instructionImage");
    	var boxBase=document.getElementById("boxBase");
    	var boxGallery=document.getElementById("boxGallery");

    	instructionImage.setAttribute("visible","false");
    	instructionBox.setAttribute("visible","false");
    	boxBase.setAttribute("visible","false");
    	boxGallery.setAttribute("visible","false");
    	
    	view.setAttribute("wasd-controls-enabled","true");
    	document.querySelector('#view').emit('landModel');
    }
    
    /*document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {

        	window.close();
            alert('Kindly! Respect the Developers!');
            
            return false;
        } else {
            return true;
        }
    };*/
    
    function loadAmazers() {
        window.open("../events/amazers.html");
    }
    
    function loadSchoolGenius() {
        window.open("../events/schoolgenius.html");
    }
    
    function loadSmartCity() {
        window.open("../events/smartcity.html");
    }
    
    function loadRobotron() {
        window.open("../events/robotron.html");
    }
    
    function loadCyberwarp() {
        window.open("../events/cyberwarp.html");
    }
    
    function loadMyndSnare() {
        window.open("../events/myndsnare.html");
    }
    function loadWorkshop(){
    	window.open("../events/workshops.html");
    }
    function loadInitiative(){
    	window.open("../events/initiative.html");
    }
    
    function loadShowcase() {
        window.open("../events/showcase.html");
    }
    
    function loadConferenza() {
        window.open("../events/conferanza.html");
    }
    
    function loadTechzenith() {
        window.open	("../events/techzenith.html");
    }