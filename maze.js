var player = document.getElementById("player");

var steps = 0;

var values = [[0,0,0,0,0,1,1,0,0,0],[0,0,0,1,0,0,0,0,1,0],[0,1,0,0,1,0,0,1,0,0],[0,0,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,0],[1,1,1,0,0,0,0,1,1,0],[0,1,0,0,1,1,1,1,0,0],[0,1,0,0,0,1,0,1,1,0],[0,0,0,1,1,0,0,0,1,0],[1,1,0,0,0,0,1,0,0,0]];

var x = 0, y = 0;

function resetPosition(){
    player.style.left = 0;
    x=0;
    player.style.top = 0;
    y=0;
}

function check(){
    if(x==9 && y==9){        
        window.alert("Congrats! You completed the maze in "+steps+" steps.");
        steps = 0;
        resetPosition();
    }
}

function up(){
    if(y!=0 && values[x][y-1]!=1){
        y--;
        player.style.top = y*50 + "px";
        steps++;
    }
    check();
}

function right(){
    if(x!=9 && values[x+1][y]!=1){
        x++;
        player.style.left = x*50 + "px";
        steps++;
    }
    check();
}

function down(){
    if(y!=9 && values[x][y+1]!=1){
        y++;
        player.style.top = y*50 + "px";
        steps++;
    }
    check();
}

function left(){
    if(x!=0 && values[x-1][y]!=1){
        x--;
        player.style.left = x*50 + "px";
        steps++;
    }
    check();
}

document.onkeydown = function(e){
    switch(e.keyCode){
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
};

//document.addEventListener("onkeydown",function(event){console.log(event.keyCode)},false);