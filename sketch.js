var backgroundImage
var cat, catImg,catImg2, mouse, mouseImg, mouseImg2

function preload() {
    backgroundImage = loadImage("garden.png")
    catImg = loadAnimation("cat1.png")
    catImg2 = loadAnimation("cat2.png","cat3.png")
    mouseImg = loadAnimation("mouse4.png")
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png")
    mouseImg3 = loadAnimation("mouse1.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    mouse = createSprite(500,500,30,30);
    mouse.addImage(mouseImg);

    cat = createSprite(700,500,30,30);
    cat.addImage(catImg);
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy",mouseImg4);
        mouse.changeAnimation("mouseHappy");

    }

    keyPresses();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

  }

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

}


}
