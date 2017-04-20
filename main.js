$(window).on("load", function(){
  window.scrollTo(0,1);
})

var cur = 1;

function switchNav(){
  $("#nav").toggleClass("active");
  $("#link-list").toggleClass("active");
}

function slideTo(id){
  $("#nav").addClass("active");
  $("#link-list").addClass("active");
  switch (cur){
    case 1:
      $("#toIntro").removeClass("active");
      $("#slider").removeClass("page1");
      break;
    case 2:
      $("#toSkills").removeClass("active");
      $("#slider").removeClass("page2");
      break;
    case 3:
      $("#toWork").removeClass("active");
      $("#slider").removeClass("page3");
      break;
    case 4:
      $("#toBio").removeClass("active");
      $("#slider").removeClass("page4");
      break;
  }

  switch (id) {
    case "#intro":
      $("#slider").addClass("page1");
      $("#toIntro").addClass("active");
      cur = 1;
      break;
    case "#skills":
      $("#slider").addClass("page2");
      $("#toSkills").addClass("active");
      cur = 2;
      break;
    case "#work":
      $("#slider").addClass("page3");
      $("#toWork").addClass("active");
      cur = 3;
      break;
    case "#bio":
      $("#slider").addClass("page4");
      $("#toBio").addClass("active");
      cur = 4;
      break;
  }
}

function toPrev(){
  switch (cur){
    case 1:
      slideTo("#bio","#toBio");
      break;
    case 2:
      slideTo("#intro","#toIntro");
      break;
    case 3:
      slideTo("#skills","#toSkills");
      break;
    case 4:
      slideTo("#work","#toWork");
      break;
  }
}

function toNext(){
  switch (cur){
    case 3:
      slideTo("#bio","#toBio");
      break;
    case 4:
      slideTo("#intro","#toIntro");
      break;
    case 1:
      slideTo("#skills","#toSkills");
      break;
    case 2:
      slideTo("#work","#toWork");
      break;
  }
}
