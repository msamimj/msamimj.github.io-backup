$(window).on("load", function(){
  window.scrollTo(0,1);
})

var cur = "#intro";

function switchNav(){
  $("#nav").toggleClass("active");
  $("#link-list").toggleClass("active");
}

function goTo(id,that){
  $("#toIntro").removeClass("active");
  $("#toSkills").removeClass("active");
  $("#toWork").removeClass("active");
  $("#toBio").removeClass("active");
  $(that).addClass("active");
  switch (id) {
    case "#intro":
      $("#intro").addClass("visible");
      $("#skills").addClass("hidden");
      $("#work").addClass("hidden");
      $("#bio").addClass("hidden");

      $("#intro").removeClass("hidden");
      $("#skills").removeClass("visible");
      $("#work").removeClass("visible");
      $("#bio").removeClass("visible");

      break;
    case "#skills":
      $("#intro").addClass("hidden");
      $("#skills").addClass("visible");
      $("#work").addClass("hidden");
      $("#bio").addClass("hidden");

      $("#intro").removeClass("visible");
      $("#skills").removeClass("hidden");
      $("#work").removeClass("visible");
      $("#bio").removeClass("visible");

      break;
    case "#work":
      $("#intro").addClass("hidden");
      $("#skills").addClass("hidden");
      $("#work").addClass("visible");
      $("#bio").addClass("hidden");

      $("#intro").removeClass("visible");
      $("#skills").removeClass("visible");
      $("#work").removeClass("hidden");
      $("#bio").removeClass("visible");

      break;
    case "#bio":
      $("#intro").addClass("hidden");
      $("#skills").addClass("hidden");
      $("#work").addClass("hidden");
      $("#bio").addClass("visible");

      $("#intro").removeClass("visible");
      $("#skills").removeClass("visible");
      $("#work").removeClass("visible");
      $("#bio").removeClass("hidden");

      break;
    default:

  }
}
