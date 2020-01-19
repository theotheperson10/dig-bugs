var dirt;
var enemies
var player
var sucker
var l1=2
var l2=2
var l3=0
var el=0;
var l4=0;
var time=0;
var play=false
function setup(){
wall=createGroup();
wall.visible=true;
frameRate(30)
screen=createSprite(275,125,550,190)
screen.shapeColor="green"
createCanvas(200,180)
dirt=createGroup();
player=createSprite(100,0,15,15)
player.shapeColor="yellow"
swap=createSprite(0,0,50,800)
swap.shapeColor="brown"
wall.add(swap)
swap=createSprite(200,0,50,800)
swap.shapeColor="brown"
wall.add(swap)
while (l3<40){
if (random(1,10)>2){swap=createSprite(l1*21,l2*21,20,20)
swap.shapeColor="brown"}else{if (l3>7){swap=createSprite(l1*20,l2*20,10,10);                        
swap.shapeColor="red";el++;if(random(1,10)>4){swap.velocityX=-1}else{swap.velocityX=1}}}
dirt.add(swap)
l3++;
l4++;
l1++;
swap.bounce(dirt,bye)
if (l4>6){l4=0;l2++;l1=2;}
}swap.destroy();sucker=createSprite(0,0,5,5)}

function draw(){
wall[0].x=0;
wall[1].x=200
wall.displace(player)
background("blue");
if (play==true){
  fill("black")
  textSize(12)
 text("Enemies left:"+el,20,20)}
if (play==false){fill("black");textAlign(CENTER);text("Dig Bugs",100.5,20);text("Press p to play",100.5,50);if(keyDown("p")){play=true;}}else{
drawSprites();
if (player.y<40){player.velocityY=player.velocityY+0.2;}
dirt.displace(player,hit)
if (player.y>40){
player.velocityY=0;
sucker.x=player.x;
sucker.y=player.y;
if (sucker.height>5){
sucker.height--;}
if (sucker.width>5){
sucker.width--;}
if (sucker.height>20){sucker.height=20;}
if (sucker.width>20){sucker.width=20;}
if (keyDown("DOWN_ARROW")){sucker.y=player.y+20;sucker.height=sucker.height+2;}
if (keyDown("UP_ARROW")){sucker.y=player.y-20;sucker.height=sucker.height+2;}
if (keyDown("LEFT_ARROW")){sucker.x=player.x-20;sucker.width=sucker.width+2;}
if (keyDown("RIGHT")){sucker.x=player.x+20;sucker.width=sucker.width+2;}
if (keyDown("a")){player.x=player.x-10;}
if (keyDown("d")){player.x=player.x+10;}
if (keyDown("s")){player.y=player.y+10;}
if (keyDown("w")){player.y=player.y-10;}
}
if (player.velocityY>1){player.velocityY=1;}
  time++;
  if (time<4){dirt.visible=false}else{dirt.visible=true}
  if (time>5){time=0
dirt.displace(dirt)
wall.displace(dirt)
screen.overlap(dirt,e)
sucker.overlap(dirt,w)
sucker.shapeColor="yellow"
if (player.y>180){player.y=player.y-15}
if (el<=0){window.alert("You Won");if(eee==false){}}
}}
function hit(dirt,player){
if (dirt.shapeColor=="red"){window.alert("You Lost");if(eee==false){}}
if (dirt.shapeColor=="brown"){
if (keyDown("a")){dirt.destroy();}
if (keyDown("d")){dirt.destroy();}
if (keyDown("s")){dirt.destroy();}
if (keyDown("w")){dirt.destroy();}}
}}
function w(sucker,dirt){
if (dirt.shapeColor=="red"){dirt.destroy();el--;}
}
function bye(swap,dirt){if (dirt.shapeColor=="brown"){dirt.remove();}}
function e(screen,dirt){
 if (dirt.y<41){dirt.y=41}
if(dirt.shapeColor=="brown"){dirt.velocityX=0}
if(dirt.shapeColor=="red"){if(random(1,10)>4){dirt.velocityX=-1}else{dirt.velocityX=1}}
}
