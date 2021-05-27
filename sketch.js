var PLAY=1
var END=0
var PAUSE=2
var gameState=PLAY

var back
var alien1,alien2
var bow,arrow
var gameOver,start,pause
var sword,ruby,gold

function preload(){
    backImg=loadImage("back.png")
bowImg=loadImage("bow0.png")
arrowImg=loadImage("arrow0.png")
alien1Img=loadImage("alien1.png")
alien2Img=loadImage("alien2.png")
startImg=loadImage("start.png")
pauseImg=loadImage("pause.png")
gameOverImg=loadImage("gameOver.png")
rubyImg=loadImage("ruby.png")
goldImg=loadImage("gold.png")
swordImg=loadImage("sword.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    back=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    back.scale=10
    back.addImage(backImg)
    bow=createSprite(200,200,50,50)
    bow.addImage(bowImg)
    
   
    arrow=createSprite(500,500,50,50)
    arrow.addImage(arrowImg)
    arrow.debug=true 
    arrow.velocityX=2 
   
    alien2=createSprite(200,400,50,50)
    alien2.addImage(alien2Img)
    alien2.scale=0.2
    start=createSprite(200,500,50,50)
   start.addImage(startImg)
   pause=createSprite(200,600,50,50)
    pause.addImage(pauseImg)
    gameOver=createSprite(200,700,50,50)
    gameOver.addImage(gameOverImg)
    sword=createSprite(200,300,50,50)
    sword.addImage(swordImg)
    sword.scale=0.2
    gold=createSprite(600,200,50,50)
    gold.addImage(goldImg)   
    gold.scale=0.3
    ruby=createSprite(600,300,50,50)
    ruby.addImage(rubyImg)
    ruby.scale=0.1
}
 function draw(){
    background(0)
     console.log(gameState)
    
   if(keyDown("space")){
    
   
}
     drawSprites();
    alien1();
if(gameState===PLAY){
if(arrow.isTouching(alien1)){
    gameState=END
    alien1.velocityX=0
    arrow.velocityX=0
 }
}else if(gameState===END){

}

}

function alien1(){
    alien1=createSprite(600,100,50,50)
    alien1.addImage(alien1Img)
    alien1.scale=0.2
    alien1.velocityX=-1
x=World.mouseX
y=World.mouseY
}
