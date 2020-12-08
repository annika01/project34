//Create variables here

var dog, dogimg1, dogimg2, db, foods, foodstock

function preload()
{
  //load images here
  dogimg1=loadImage("Dog.png")
  dogimg2=loadImage("happydog.png")
}

function setup() {
	createCanvas(800, 700);
  db=firebase.database()
  dog=createSprite(250, 300)
  dog.addImage(dogimg1)
  dog.scale= 0.15
  db.ref("Food").on("value",readStock)
}


function draw() { 
  background("white") 
if(keyWentDown(UP_ARROW)){
Stock(foods)
dog.addImage(dogimg2)
}

  drawSprites();
text("food:"+foods,170,200)
  
  //add styles here

}
function readStock(data){
foods= data.val()
}
function Stock(x){
if(x<=0){
  x=0
}
else{ x--}
db.ref("/").update({
  Food:x 
})
}

