//var tween = TweenMax.to("#c4",.1,{scaleY:.2, transformOrigin: "0% 100%", ease: Linear.easeNone});

var c0 = document.getElementById("c0"),
    c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),
    c4 = document.getElementById("c4"),
    c5 = document.getElementById("c5"),
    c6 = document.getElementById("c6"),
    c7 = document.getElementById("c7"),
    c8 = document.getElementById("c8"),
    c9 = document.getElementById("c9"),
    c10 = document.getElementById("c10"),
    c11 = document.getElementById("c11"),
    c12 = document.getElementById("c12"),
    c13 = document.getElementById("c13"),
    c14 = document.getElementById("c14"),
    c15 = document.getElementById("c15"),
    c16 = document.getElementById("c16"),
    c17 = document.getElementById("c17"),
    c18 = document.getElementById("c18"),
    c19 = document.getElementById("c19"),
    c20 = document.getElementById("c20"),
    c21 = document.getElementById("c21"),
    c22 = document.getElementById("c22"),
    c23 = document.getElementById("c23"),
    c24 = document.getElementById("c24");

var tl = new TimelineMax({delay:1});
tl
// .to([c1, c6, c22, c17], .2, {backgroundColor:"#ec33ff"})
// .to([c2, c5, c8, c7], .2, {backgroundColor:"#6503ff"})
// .to([c24, c10], .2, {backgroundColor:"#00fff8"})
// .to([c12, c19, c13], .2, {backgroundColor:"#35ff7d"})
// .to([c14, c16, c15, c4], .2, {backgroundColor:"#ecff35"})
// .to([c18, c11, c21, c20], .2, {backgroundColor:"#ff9e35"})
// .to([c0, c3, c23, c9], .2, {backgroundColor:"#ff3834"})
.to(c4, .2, {scaleY:.1, transformOrigin:"center bottom"})
.to([c18, c19, c22, c23], 2, {rotation:360, ease:Linear.easeNone})
.to(c4, .2, {scaleY:1})
.to(c4, 1, {transformOrigin:"center center"})
.to(c1, .2, {top:150, left:10})
.to(c1, .2, {width:20, height:100})
.to(c2, .2, {top:170, left:120})
.to(c2, .2, {width:20, height:60})
.to(c3, .2, {top: 150, left:535})
.to(c3, .2, {width:60, height:20})
.to(c4, .2, {left:345, top:215})
.to(c4, .2, {width:60, height:35})
.to(c5, .2, {left:120, top:150})
.to(c5, .2, {width:60, height:20})
.to(c17, .2, {left:90, top:150})
.to(c17, .2, {width:20, height:100})
.to(c18, .2, {left:425, top:150})
.to(c18, .2, {width:20, height:100})
.to(c19, .2, {left:270, top:150})
.to(c19, .2, {width:60, height:20})
.to(c20, .2, {left:465, top:170})
.to(c20, .2, {width:20, height:50})
.to(c21, .2, {left:500, top:150})
.to(c21, .2, {width:20, height:100})
.to(c22, .2, {left:50, top:180})
.to(c22, .2, {width:20, height:35})
.to(c23, .2, {left:535, top:170})
.to(c23, .2, {width:20, height:60})
.to(c16, .2, {left:385, top:170})
.to(c16, .2, {width:20, height:45})
.to(c14, .2, {left:345, top:150})
.to(c14, .2, {width:60, height:20})
.to(c24, .2, {left:200, top:150})
.to(c24, .2, {width:20, height:65})
.to(c7, .2, {left:140, top:190})
.to(c7, .2, {width:20, height:20})
.to(c8, .2, {left:120, top:230})
.to(c8, .2, {width:60, height:20})
.to(c11, .2, {left:445, top:150})
.to(c11, .2, {width:60, height:20})
.to(c9, .2, {left:555, top:190})
.to(c9, .2, {width:20, height:20})
.to(c10, .2, {left:200, top:215})
.to(c10, .2, {width:60, height:35})
.to(c12, .2, {left:270, top:170})
.to(c12, .2, {width:20, height:60})
.to(c13, .2, {left:270, top:215})
.to(c13, .2, {width:60, height:35})
.to(c15, .2, {left:345, top:170})
.to(c15, .2, {height:45, width:20})
.to(c0, .2, {width:60, height:20})
.to(c0, .2, {left:535, top:230})
.to(c6, .2, {left:30, top:215})
.to(c6, .2, {width:60, height:35})
.to([c1, c6, c22, c17], .4, {backgroundColor:"#ec33ff"})
.to([c2, c5, c8, c7], .4, {backgroundColor:"#6503ff"})
.to([c24, c10], .4, {backgroundColor:"#00fff8"})
.to([c12, c19, c13], .4, {backgroundColor:"#35ff7d"})
.to([c14, c16, c15, c4], .4, {backgroundColor:"#ecff35"})
.to([c18, c11, c21, c20], .4, {backgroundColor:"#ff9e35"})
.to([c0, c3, c23, c9], .4, {backgroundColor:"#ff3834"})
;
