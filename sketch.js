var tower, towerImg;
var door, doorImg, doorsGroup;
var climber, climberImg, climberGroup;
var ghost, ghostImg;
var invisibleGroup, invisibleBlock;

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png")

}

function setup() {
  createCanvas(600, 600);

  // create group
  doorsGroup = new Group();
  climberGroup = new Group();
  invisibleGroup = new Group();

  // create sprite for tower
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY=1;
  
  
  // create sprite for ghost
  ghost = createSprite(200, 200, 50, 50);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = .3;

}

function draw() {
  background(0);

  if (tower.y > 400) {
    tower.y = 300;
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  if(keyDown("space"))
    {
      ghost.velocityY=-5; 
    }
  ghost.velocityY=ghost.velocityY+.8;
  
    if(climberGroup.isTouching(ghost))
      {
        ghost.velocityY=0;
      }
if(invisibleGroup.isTouching(ghost)||ghost.y>600)
  {
    ghost.destroy();
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  spawnDoors();
  drawSprites();


}
function spawnDoors()
{
  // write code here to spawn the doors in tower
  if(frameCount%240===0)
    {
      // create sprite for door
      
  door = createSprite(200, -50);
  door.addImage("door", doorImg);
      
    climber=createSprite(200,10)  ;
    climber.addImage("climber",climberImg);
      
  door.x=Math.round(random(120,400));
  door.velocityY=1;
      
  climber.x=door.x;
  climber.velocityY=1;
  door.lifetime=800;
  doorsGroup.add(door);
   

    }
}



