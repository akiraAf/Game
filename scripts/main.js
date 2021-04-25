var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

bird.src = "images/flappy_bird_bird.png";
bg.src = "images/flappy_bird_bg.png";
fg.src = "images/flappy_bird_fg.png";
pipeDown.src = "images/flappy_bird_pipeBottom.png";
pipeUp.src = "images/flappy_bird_pipeUp.png";

document.addEventListener("keydown", moveUp);
function moveUp(){
    y -= 20;
}

pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

var x = 10;
var y = 150;
var grav = 1;

function draw(){

    ctx.drawImage(bg, 0, 0);
    
    for( var i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeDown, pipe[i].x, pipe[i].y + pipeUp.height  + 90);

        pipe[i].x--;

        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, x, y);

    y += grav;
    requestAnimationFrame(draw);
}

pipeDown.onload = draw();