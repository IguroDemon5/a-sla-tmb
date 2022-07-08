var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

path = createSprite (200,200)
boy = createSprite (200,300)
boy.addAnimation ('lol',boyImg)
path.addImage ('kklol',pathImg)
boy.scale = 0.1


//Criando menino que corre 



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary = createSprite(400,0,100,800)
rightBoundary.visible = false
}


function draw() {
background(0);
path.velocityY = 4;
if (path.y > 400       ){
path.y = 200
}
// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.x = mouseX
boy.collide(leftBoundary)
boy.collide (rightBoundary)
 //Reiniciar o fundo
 



 drawSprites();

 }




