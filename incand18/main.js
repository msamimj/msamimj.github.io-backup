var vwidth = window.innerWidth,
    vheight = window.innerHeight,
    cwidth = 0, //width of container containing the player components
    cheight = 0; //height of container containing the player components

//Dynamically setting container size

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

var ratio = cwidth/600,
    ratio2 = cwidth/2000;

var container = document.getElementById("container");

var     c0  =    document.getElementById("c0"),
        bts =    document.getElementsByClassName("button-top"),
        c1  =    document.getElementById("c1"),
        c2  =    document.getElementById("c2"),
        c3  =    document.getElementById("c3"),
        c4  =    document.getElementById("c4"),
        c5  =    document.getElementById("c5"),
        c6  =    document.getElementById("c6"),
        c7  =    document.getElementById("c7"),
        c8  =    document.getElementById("c8"),
        c9  =    document.getElementById("c9"),
        c10 =    document.getElementById("c10"),
        c11 =    document.getElementById("c11"),
        c12 =    document.getElementById("c12"),
        c13 =    document.getElementById("c13"),
        c14 =    document.getElementById("c14"),
        c15 =    document.getElementById("c15"),
        c16 =    document.getElementById("c16"),
        c17 =    document.getElementById("c17"),
        c18 =    document.getElementById("c18"),
        c19 =    document.getElementById("c19"),
        c20 =    document.getElementById("c20"),
        c21 =    document.getElementById("c21"),
        c22 =    document.getElementById("c22"),
        c23 =    document.getElementById("c23"),
        c24 =    document.getElementById("c24"),
        wel =    document.getElementById("welcome"),
        com =    document.getElementById("coming"),
        inc =    document.getElementById("incand");

var tl = new TimelineMax({delay:.1});

tl
.to (container,     0,      {width: 600*ratio, height: 400*ratio, left: (vwidth/2)-(600*ratio)/2, top: (vheight/2)-(400*ratio)/2})
.to (c0,            0.33,    {width: 580*ratio, height: 360*ratio, bottom:0})
.to (c14,           0.33,    {top: 100*ratio, left: 100*ratio, width: 340*ratio, height: 225*ratio},    "-=0.30")
.to (c7,            0.33,    {top: 40*ratio, width: 580*ratio, left:0*ratio, height:10*ratio},           )
.to (c24,           0.33,    {height: 35*ratio, width: 570*ratio, left: 10*ratio, bottom: 0},           "-=0.29")
.to (c8,            0.33,    {width: 10*ratio, height: 360*ratio, top:40*ratio},                         )
.to (c12,           0.33,    {width: 7*ratio, height: 100*ratio, top: 80*ratio, left: 580*ratio},       "-=0.34")
.to (c13,           0.33,    {width: 13*ratio, height: 70*ratio, top: 95*ratio, left: 587*ratio},       "-=0.25")
.to (c16,           0.33,    {top: 140*ratio, left:100*ratio, width: 340*ratio, height: 160*ratio},      )
.to (c9,            0.33,    {width: 5*ratio, top: 50*ratio, height: 350*ratio, left: 75*ratio},        "-=0.35")
.to (c10,           0.33,    {width: 5*ratio, top: 50*ratio, height: 350*ratio, left:460*ratio},         )
.to (c11,           0.33,    {width: 35*ratio, height: 350*ratio, top: 50*ratio, left:545*ratio},       "-=0.33")
.to (c15,           0.33,    {top: 100*ratio, left: 485*ratio, width: 65*ratio, height: 225*ratio},     "-=0.22")
.to (c17,           0.33,    {top: 160*ratio, left: 120*ratio, width: 300*ratio, height: 120*ratio},    "-=0.31")
.to (c20,           0.33,    {top: 195*ratio, left: 220*ratio, width: 60*ratio, height: 50*ratio},       )
.to (c21,           0.33,    {left: 280*ratio, top: 195*ratio, width: 40*ratio, height: 50*ratio},      "-=0.31")
.to (c6,            0.33,    {width: 450*ratio, height:10*ratio, top: 30*ratio, left:75*ratio},          )
.to (c1,            0.33,    {width: 72*ratio, height: 20*ratio, top: 10*ratio, left:100*ratio},        "-=0.3")
.to (c2,            0.33,    {width: 72*ratio, height: 20*ratio, top: 10*ratio, left:182*ratio},        "-=0.3")
.to (c3,            0.33,    {width: 72*ratio, height: 20*ratio, top: 10*ratio, left:264*ratio},        "-=0.3")
.to (c4,            0.33,    {width: 72*ratio, height: 20*ratio, top: 10*ratio, left:346*ratio},        "-=0.3")
.to (c5,            0.33,    {width: 72*ratio, height: 20*ratio, top: 10*ratio, left:428*ratio},        "-=0.3")
.to (c18,           0.33,    {top: 205*ratio, left: 150*ratio, width: 50*ratio, height: 30*ratio},       )
.to (c19,           0.33,    {top: 195*ratio, left: 160*ratio, width: 30*ratio, height: 50*ratio},      "-=0.31")
.to (c22,           0.33,    {left: 340*ratio, top: 205*ratio, width: 50*ratio, height: 30*ratio},      "-=0.21")
.to (c23,           0.33,    {left: 350*ratio, top: 195*ratio, width: 30*ratio, height: 50*ratio},      "-=0.31")
.to([c18, c19, c22, c23], 1, {rotation:180, ease:Linear.easeNone})

.to (inc,           0,      {width: 400*ratio, left: (vwidth/2)-(200*ratio), top: vheight})
.to (com,           0,      {width: 200*ratio, left: (vwidth/2)-(100*ratio), top: vheight*0.8})

.to (container,     0.5,    {width: 600*ratio2, height: 400*ratio2, left: vwidth-(600*ratio2*1.5), top: (600*ratio2*0.5)},         "+=.5")
.to (c0,            0.5,    {width: 580*ratio2, height: 360*ratio2, bottom:0},                          "-=.5")
.to (c14,           0.5,    {top: 100*ratio2, left: 100*ratio2, width: 340*ratio2, height: 225*ratio2}, "-=.5")
.to (c7,            0.5,    {top: 40*ratio2, width: 580*ratio2, left:0*ratio2, height:10*ratio2},       "-=.5")
.to (c24,           0.5,    {height: 35*ratio2, width: 570*ratio2, left: 10*ratio2, bottom: 0},         "-=.5")
.to (c8,            0.5,    {width: 10*ratio2, height: 360*ratio2, top:40*ratio2},                      "-=.5")
.to (c12,           0.5,    {width: 7*ratio2, height: 100*ratio2, top: 80*ratio2, left: 580*ratio2},    "-=.5")
.to (c13,           0.5,    {width: 13*ratio2, height: 70*ratio2, top: 95*ratio2, left: 587*ratio2},    "-=.5")
.to (c16,           0.5,    {top: 140*ratio2, left:100*ratio2, width: 340*ratio2, height: 160*ratio2},  "-=.5")
.to (c9,            0.5,    {width: 5*ratio2, top: 50*ratio2, height: 350*ratio2, left: 75*ratio2},     "-=.5")
.to (c10,           0.5,    {width: 5*ratio2, top: 50*ratio2, height: 350*ratio2, left:460*ratio2},     "-=.5")
.to (c11,           0.5,    {width: 35*ratio2, height: 350*ratio2, top: 50*ratio2, left:545*ratio2},    "-=.5")
.to (c15,           0.5,    {top: 100*ratio2, left: 485*ratio2, width: 65*ratio2, height: 225*ratio2},  "-=.5")
.to (c17,           0.5,    {top: 160*ratio2, left: 120*ratio2, width: 300*ratio2, height: 120*ratio2}, "-=.5")
.to (c20,           0.5,    {top: 195*ratio2, left: 220*ratio2, width: 60*ratio2, height: 50*ratio2},   "-=.5")
.to (c21,           0.5,    {left: 280*ratio2, top: 195*ratio2, width: 40*ratio2, height: 50*ratio2},   "-=.5")
.to (c6,            0.5,    {width: 450*ratio2, height:10*ratio2, top: 30*ratio2, left:75*ratio2},      "-=.5")
.to (c1,            0.5,    {width: 72*ratio2, height: 20*ratio2, top: 10*ratio2, left:100*ratio2},     "-=.5")
.to (c2,            0.5,    {width: 72*ratio2, height: 20*ratio2, top: 10*ratio2, left:182*ratio2},     "-=.5")
.to (c3,            0.5,    {width: 72*ratio2, height: 20*ratio2, top: 10*ratio2, left:264*ratio2},     "-=.5")
.to (c4,            0.5,    {width: 72*ratio2, height: 20*ratio2, top: 10*ratio2, left:346*ratio2},     "-=.5")
.to (c5,            0.5,    {width: 72*ratio2, height: 20*ratio2, top: 10*ratio2, left:428*ratio2},     "-=.5")
.to (c18,           0.5,    {top: 205*ratio2, left: 150*ratio2, width: 50*ratio2, height: 30*ratio2},   "-=.5")
.to (c19,           0.5,    {top: 195*ratio2, left: 160*ratio2, width: 30*ratio2, height: 50*ratio2},   "-=.5")
.to (c22,           0.5,    {left: 340*ratio2, top: 205*ratio2, width: 50*ratio2, height: 30*ratio2},   "-=.5")
.to (c23,           0.5,    {left: 350*ratio2, top: 195*ratio2, width: 30*ratio2, height: 50*ratio2},   "-=.5")
//.to(wel, 0, {left: vwidth, top: 40}, "-=5")
//.to(wel, 0, {opacity: 100})

.to (inc,           .75,    {scale: 2.5, top: (vheight/2)-0.5*(400*ratio*(195/935)), opacity: 100},     "-=.2")
.to (com,           .5,     {opacity:100, scale: 2.3})
.to (com,           .4,     {scale: 1.8, repeat: 3, yoyo: true}, "+=0.6")

//.to(wel, 2, {left: (vwidth/2)-136}, "+=0.5")
//.to(container, 2, {left: (vwidth/2)-268}, "-=2.1")
;
