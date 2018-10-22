var loaded = false;
var proceeded = false;

var proceed = document.getElementById('proceed');

proceed.addEventListener('click', function(){
    proceeded = true;
})

window.onload = function(){
    loaded = true;
    window.scrollTo(0,1);
}

var vwidth = window.innerWidth,
    vheight = window.innerHeight,
    cwidth = 0,
    cheight = 0;

if(vwidth>vheight)
{
    cheight = .5 * vheight;
    cwidth = 1.5 * cheight;
}
else
{
    cwidth = .5 * vwidth;
    cheight = .66 * cwidth;
}

var ratio2 = cwidth/600;

var container = document.getElementById("container");

var c0 = document.getElementById("c0"),
    bts = document.getElementsByClassName("button-top"),
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
    c24 = document.getElementById("c24"),
    bgmusic = document.getElementById("bgmusic");

    playMusic = function(){
        console.log("music");
        bgmusic.play();        
    },
    
    welcome = function(){
        proceed.className = "appear";
        if(loaded && proceeded){
            document.getElementById("loader").style.opacity = 0;
            setTimeout(() => {
                document.getElementById("loader").style.zIndex = 1;
            }, 1100);
        }else{
            var w = setInterval(() => {
                if(loaded && proceeded){
                    document.getElementById("loader").style.opacity = 0;
                    setTimeout(() => {
                        document.getElementById("loader").style.zIndex = 1;
                    }, 1100);
                    clearInterval(w);
                }
            }, 100);
        }
    };

var tl = new TimelineMax({delay:1, onComplete: welcome});

tl
.to(container, 0, {width: 600*ratio2, height: 400*ratio2})
.to(c0, 0, {width: 580*ratio2, height: 360*ratio2, bottom:0})
.to(bts, 0, {width: 72*ratio2, height: 20*ratio2, top: 10*ratio2})
.to(c1, 0, {left:100*ratio2})
.to(c2, 0, {left:182*ratio2})
.to(c3, 0, {left:264*ratio2})
.to(c4, 0, {left:346*ratio2})
.to(c5, 0, {left:428*ratio2})
.to(c6, 0, {width: 450*ratio2, height:10*ratio2, top: 30*ratio2, left:75*ratio2})
.to(c7, 0, {top: 40*ratio2, width: 580*ratio2, left:0*ratio2, height:10*ratio2})
.to(c8, 0, {width: 10*ratio2, height: 360*ratio2, top:40*ratio2})
.to(c9, 0, {width: 5*ratio2, top: 50*ratio2, height: 350*ratio2, left: 75*ratio2})
.to(c10, 0, {width: 5*ratio2, top: 50*ratio2, height: 350*ratio2, left:460*ratio2})
.to(c11, 0, {width: 35*ratio2, height: 350*ratio2, top: 50*ratio2, left:545*ratio2})
.to(c12, 0, {width: 7*ratio2, height: 100*ratio2, top: 80*ratio2, left: 580*ratio2})
.to(c13, 0, {width: 13*ratio2, height: 70*ratio2, top: 95*ratio2, left: 587*ratio2})
.to(c14, 0, {top: 100*ratio2, left: 100*ratio2, width: 340*ratio2, height: 225*ratio2})
.to(c15, 0, {top: 100*ratio2, left: 485*ratio2, width: 65*ratio2, height: 225*ratio2})
.to(c16, 0, {top: 140*ratio2, left:100*ratio2, width: 340*ratio2, height: 160*ratio2})
.to(c17, 0, {top: 160*ratio2, left: 120*ratio2, width: 300*ratio2, height: 120*ratio2})
.to(c18, 0, {top: 205*ratio2, left: 150*ratio2, width: 50*ratio2, height: 30*ratio2})
.to(c19, 0, {top: 195*ratio2, left: 160*ratio2, width: 30*ratio2, height: 50*ratio2})
.to(c20, 0, {top: 195*ratio2, left: 220*ratio2, width: 60*ratio2, height: 50*ratio2})
.to(c21, 0, {left: 280*ratio2, top: 195*ratio2, width: 40*ratio2, height: 50*ratio2})
.to(c22, 0, {left: 340*ratio2, top: 205*ratio2, width: 50*ratio2, height: 30*ratio2})
.to(c23, 0, {left: 350*ratio2, top: 195*ratio2, width: 30*ratio2, height: 50*ratio2})
.to(c24, 0, {height: 35*ratio2, width: 570*ratio2, left: 10*ratio2, bottom: 0})

.to(c4, .2, {scaleY:.1, transformOrigin:"center bottom", onComplete: playMusic})
.to([c18, c19, c22, c23], 2, {rotation:360, ease:Linear.easeNone})
.to(c4, .2, {scaleY:1})
.to(c4, .2, {transformOrigin:"center center"})
.to(c1, .15, {top:150*ratio2, left:10*ratio2})
.to(c1, .15, {width:20*ratio2, height:100*ratio2})
.to(c2, .15, {top:170*ratio2, left:120*ratio2})
.to(c2, .15, {width:20*ratio2, height:60*ratio2})
.to(c3, .15, {top: 150*ratio2, left:535*ratio2})
.to(c3, .15, {width:60*ratio2, height:20*ratio2})
.to(c4, .15, {left:345*ratio2, top:215*ratio2})
.to(c4, .15, {width:60*ratio2, height:35*ratio2})
.to(c5, .15, {left:120*ratio2, top:150*ratio2})
.to(c5, .15, {width:60*ratio2, height:20*ratio2})
.to(c17, .15, {left:90*ratio2, top:150*ratio2})
.to(c17, .15, {width:20*ratio2, height:100*ratio2})
.to(c18, .15, {left:425*ratio2, top:150*ratio2})
.to(c18, .15, {width:20*ratio2, height:100*ratio2})
.to(c19, .15, {left:270*ratio2, top:150*ratio2})
.to(c19, .15, {width:60*ratio2, height:20*ratio2})
.to(c20, .15, {left:465*ratio2, top:170*ratio2})
.to(c20, .15, {width:20*ratio2, height:50*ratio2})
.to(c21, .15, {left:500*ratio2, top:150*ratio2})
.to(c21, .15, {width:20*ratio2, height:100*ratio2})
.to(c22, .15, {left:50*ratio2, top:180*ratio2})
.to(c22, .15, {width:20*ratio2, height:35*ratio2})
.to(c23, .15, {left:535*ratio2, top:170*ratio2})
.to(c23, .15, {width:20*ratio2, height:60*ratio2})
.to(c16, .15, {left:385*ratio2, top:170*ratio2})
.to(c16, .15, {width:20*ratio2, height:45*ratio2})
.to(c14, .15, {left:345*ratio2, top:150*ratio2})
.to(c14, .15, {width:60*ratio2, height:20*ratio2})
.to(c24, .15, {left:200*ratio2, top:150*ratio2})
.to(c24, .15, {width:20*ratio2, height:65*ratio2})
.to(c7, .15, {left:140*ratio2, top:190*ratio2})
.to(c7, .15, {width:20*ratio2, height:20*ratio2})
.to(c8, .15, {left:120*ratio2, top:230*ratio2})
.to(c8, .15, {width:60*ratio2, height:20*ratio2})
.to(c11, .15, {left:445*ratio2, top:150*ratio2})
.to(c11, .15, {width:60*ratio2, height:20*ratio2})
.to(c9, .15, {left:555*ratio2, top:190*ratio2})
.to(c9, .15, {width:20*ratio2, height:20*ratio2})
.to(c10, .15, {left:200*ratio2, top:215*ratio2})
.to(c10, .15, {width:60*ratio2, height:35*ratio2})
.to(c12, .15, {left:270*ratio2, top:170*ratio2})
.to(c12, .15, {width:20*ratio2, height:60*ratio2})
.to(c13, .15, {left:270*ratio2, top:215*ratio2})
.to(c13, .15, {width:60*ratio2, height:35*ratio2})
.to(c15, .15, {left:345*ratio2, top:170*ratio2})
.to(c15, .15, {height:45*ratio2, width:20*ratio2})
.to(c0, .15, {width:60*ratio2, height:20*ratio2})
.to(c0, .15, {left:535*ratio2, top:230*ratio2})
.to(c6, .15, {left:30*ratio2, top:215*ratio2})
.to(c6, .15, {width:60*ratio2, height:35*ratio2})
.to([c1, c6, c22, c17], .2, {backgroundColor:"#ec33ff"})
.to([c2, c5, c8, c7], .2, {backgroundColor:"#6503ff"})
.to([c24, c10], .2, {backgroundColor:"#00fff8"})
.to([c12, c19, c13], .2, {backgroundColor:"#35ff7d"})
.to([c14, c16, c15, c4], .2, {backgroundColor:"#ecff35"})
.to([c18, c11, c21, c20], .2, {backgroundColor:"#ff9e35"})
.to([c0, c3, c23, c9], .2, {backgroundColor:"#ff3834"})
.staggerTo([[c1, c6, c22, c17],[c2, c5, c8, c7],[c24, c10],[c12, c19, c13],[c14, c16, c15, c4],[c18, c11, c21, c20],[c0, c3, c23, c9]], .75, { bezier:{curviness:2, values:[{x:0, y:0}, {x:0, y:-100*ratio2}, {x:0, y:0}]} }, 0.2)
;

