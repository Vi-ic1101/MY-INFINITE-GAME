var back1
var back2

var alien1
var alien2

var arrow
var boy

var gameOver
var play
var pause

var spike1
var spike2
var sword

 var gold 
 var ruby

var PLAY=1
var END=0
var gameState=PLAY

function preload(){
back1Img=loadImage("back.png") ;

    alien1Image=loadImage("alien1.png");
    alien2Img=loadImage("alien2.png");

    arrowImg=loadImage("arrow0.png")
    bowImg=loadImage("bow0.png")

    gameOverImg=loadImage("gameOver.png")
    startImg=loadImage("start.png")
    pauseImg=loadImage("pause.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    back1=createSprite(200,200,20,40)
    back1.addImage(back1Img);
    back1.scale=4
   
   // back1.velocityX=10
    
//back2=createSprite(300,300,50,50);

    alien1=createSprite(200,200,100,100);
    alien1.addImage(alien1Image);
    alien1.scale=0.09

    alien2=createSprite(100,100);
   // alien2.velocityX=-2
    //alien2.lifetime=10
    alien2.scale=0.1
    alien2.addImage(alien2Img); 

    arrow=createSprite(500,200)
    arrow.addImage(arrowImg)

    bow=createSprite(300,300);
    bow.addImage(bowImg);

    gameOver=createSprite(400,400)
    gameOver.addImage(gameOverImg)

    start=createSprite(500,40+10+10)
    start.addImage(startImg)

    pause=createSprite(600,300)
    pause.addImage(pauseImg)

}
function draw() {
    background(0);
    drawSprites();
    if(back1.x > windowWidth){
       back1.x=1
    }

if(gameState===PLAY){
back1.velocityX=11

}else if(gameState===End){

}
}
function alien1(){}
function alien2(){}
function bow(){}


        