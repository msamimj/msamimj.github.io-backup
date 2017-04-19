$(window).on("load", function(){
  window.scrollTo(0,1);
})

var cur = "#intro";

function switchNav(){
  $("#nav").toggleClass("active");
  $("#link-list").toggleClass("active");
}

function slideTo(id,that){
  $("#toIntro").removeClass("active");
  $("#toSkills").removeClass("active");
  $("#toWork").removeClass("active");
  $("#toBio").removeClass("active");
  $(that).addClass("active");

  $("#slider").removeClass("page1");
  $("#slider").removeClass("page2");
  $("#slider").removeClass("page3");
  $("#slider").removeClass("page4");

  switch (id) {
    case "#intro":
      $("#slider").addClass("page1");
      break;
    case "#skills":
      $("#slider").addClass("page2");
      break;
    case "#work":
      $("#slider").addClass("page3");
      break;
    case "#bio":
      $("#slider").addClass("page4");
      break;
  }
}
