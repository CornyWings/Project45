var bowserImg, goombaImg, koopaTroopaImg, piranhaPlantImg;
var marioImg, peachImg, mario;
var bowserBackground;
var enemyGroup;

function preload()
{
  bowserImg= loadImage("Bowser.jpg");
  goombaImg= loadImage("Goomba.png");
  koopaTroopaImg= loadImage("KoopaTroopa.png");
  marioImg= loadAnimation("Mario1.png", "Mario2.png", "Mario3.png");
  peachImg= loadImage("Peach.png");
  bowserBackground= loadImage("bowserCastleBackground.jpg");
  piranhaPlantImg= loadImage("Piranhaplant.png")

}



function setup() {
  createCanvas(1200,600);

  mario= createSprite(250,350,50,50);
  mario.addAnimation("marioAnimation", marioImg);

  invisibleGround= createSprite(600,500,1200,10);
  invisibleGround.visible= false;

  enemyGroup = new Group();

  mario.debug=true;

  mario.setCollider("rectangle", 0, 0, 60, 60)

 
}


function draw() {
  background(bowserBackground);  


  if(keyDown( UP_ARROW)){
    mario.velocityY= -15;

  }
  mario.velocityY=mario.velocityY + 0.5;

  mario.collide(invisibleGround);
  console.log(mario.y);
  if(mario.y>=389.5 && mario.isTouching(enemyGroup)){
    mario.destroy();
  }
  else{
    for (var i=0; i<enemyGroup.length; i++){
     
      if(enemyGroup.get(i).x==mario.x && mario.y>264){
        enemyGroup.get(i).destroy();
        //break;
      }
    }
  }
    

  
  

  

  randEnemy();

  drawSprites();
}




function randEnemy(){
  if( frameCount % 130==0){
    var enemy= createSprite(1100,400, 10,10);
    enemy.velocityX= -2;
     var rand= Math.round(random(1,3));
     switch(rand){
       case 1: enemy.addImage(goombaImg);
       enemy.scale= 0.3;
       break;
       case 2: enemy.addImage(koopaTroopaImg);
       enemy.scale= 0.5;
       break;
       case 3: enemy.addImage(piranhaPlantImg);
       enemy.scale= 0.3;
       break;
       default:
       break;
     }
      enemyGroup.add(enemy);

     enemy.lifetime= 600;

  }

}