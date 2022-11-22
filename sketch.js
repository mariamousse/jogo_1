const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var edge, edge_group, edgeArt;
var bush, bush_group, bushArt;
var point, point_group, pointArt;

var player;

function preload(){
 bushArt = loadImage("bushArt.png");
 edgeArt = loadImage("edgeArt.png");
 pointArt = loadImage("pointArt.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  player = createSprite(144, 144, 36,36);

  engine = Engine.create();
  world = engine.world;
  bush_group = new Group();
  edge_group = new Group();
  point_group = new Group();


}
function draw() {
  background("#dddddd"); 
  Engine.update(engine);
  //console.log(mouseX, mouseY);
  //camera.zoom = 0.7;
  //camera.y = 72*6;
  //camera.x = 72*6;

  //movimentação
  if(keyDown("a")){
    player.x -= 5;
    //buttonPressed = "a";
  }
  if(keyDown("s")){
    player.y += 5;
    //buttonPressed = "s";
  }
  if(keyDown("d")){
    player.x += 5;
    //buttonPressed = "d";
  }
  if(keyDown("w")){
    player.y -= 5;
    //buttonPressed = "w";
  }
  
  room1();
  room2();
  room3();
  room4(); 
  room5();
  room6();
  room7();
  room8();
  room9();
  room10();
  room11();
  room12();
  room13();
  room14();

  drawSprites();
  
}
function Edge(x,y){
  edge = createSprite(x,y,72,72);
  //edge.shapeColor = [50,90,100];
  edge.addImage(edgeArt);
}
function Bush(x,y){
  bush = createSprite(x,y,72,72);
  //bush.shapeColor = "green";
  bush.addImage(bushArt);
}
function Point(x,y,tpX,tpY){
  point = createSprite(x,y,72,72);
  //point.shapeColor = "yellow";
  point.addImage(pointArt);
}

function room1(){
  Bush(72*3, 72*5);
  Bush(72*3, 72*6);
  Bush(72*3, 72*7); 
  for(var a = 1; a<12; a = a+1){
    Edge(72*a, 72);
    Edge(72*a,72*11);
    //console.log(a);
  }
  for(var a=1; a<12; a = a+1){
    Edge(72, 72*a);
    Edge(72*11, 72*a);
  }
  Point(72*11, 72*6);
  
}
function room2(){
  for(var a = 11; a<21; a = a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
    //console.log(a);
  }
  for(var a=1; a<12; a = a+1){
    //Edge(36, 36*a);
    Edge(72*21, 72*a);
  }
  Edge(72*13, 72*10);
  Edge(72*12, 72*10);
  Edge(72*12, 72*9); 
 
  Edge(72*20, 72*2);
  Edge(72*20, 72*3);
  Edge(72*19, 72*2);

  Bush(72*17,72*7);
  Bush(72*17,72*6);
  Bush(72*17,72*5);
  Bush(72*16,72*7);
  Bush(72*16,72*6);
  Bush(72*16,72*5);
  Bush(72*15,72*7);
  Bush(72*15,72*6);
  Bush(72*15,72*5);

  Point(72*21, 72*6);

}
function room3(){
  for(var a = 22; a < 32; a= a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a = 1; a <11; a =a+1){
    Edge(72*31, 72*a);
  }
  Edge(72*22,72*8);
  Edge(72*22,72*7);
  Edge(72*22,72*5);
  Edge(72*22,72*4);

  Edge(72*30,72*8);
  Edge(72*30,72*7);
  Edge(72*30,72*5);
  Edge(72*30,72*4);

  Edge(72*24,72*2);
  Edge(72*25,72*2);
  Edge(72*27,72*2);
  Edge(72*28,72*2);

  Edge(72*24,72*10);
  Edge(72*25,72*10);
  Edge(72*27,72*10);
  Edge(72*28,72*10);
  
  Bush(72*26, 72*2);
  Bush(72*26, 72*3);
  Bush(72*26, 72*4);
 
  Bush(72*26, 72*10);
  Bush(72*26, 72*9);
  Bush(72*26, 72*8);
  
  Bush(72*23,72*10);
  Bush(72*22,72*10);
  Bush(72*23,72*9);
  Bush(72*22,72*9);

  Bush(72*22, 72*2);
  Bush(72*22, 72*3);
  Bush(72*23, 72*2);
  Bush(72*23, 72*3);

  Bush(72*29,72*10);
  Bush(72*30,72*10);
  Bush(72*29,72*9);
  Bush(72*30,72*9);

  Bush(72*30, 72*2);
  Bush(72*30, 72*3);
  Bush(72*29, 72*2);
  Bush(72*29, 72*3);

  Point(72*31, 72*6);

}
function room4(){
  for(var a = 31; a<42; a =a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a = 1; a <11; a = a+1){
    Edge(72*41, 72*a);
  }
  for(var a = 32; a <41; a =a+1){
    Bush(72*a,72*2);
    Bush(72*a, 72*10);
  }
  for(var a = 3; a<6; a =a+1){
    Bush(72*40, 72*a);
    Bush(72*32, 72*a);
  }
  for(var a = 7; a<10; a =a+1){
    Bush(72*40, 72*a);
    Bush(72*32, 72*a);
  }
  Edge(72*33, 72*9);
  Edge(72*39, 72*9);
  Edge(72*33, 72*3);
  Edge(72*39, 72*3);
  Edge(72*36, 72*9);
  
  Edge(72*36, 72*8);
  Edge(72*35, 72*9);
  Edge(72*35, 72*8);
  Edge(72*37, 72*9);
  Edge(72*37, 72*8);

  Edge(72*36, 72*4);
  Edge(72*36, 72*3);
  Edge(72*35, 72*3);
  Edge(72*35, 72*4);
  Edge(72*37, 72*3);
  Edge(72*37, 72*4);
  
  Point(72*41,72*6);
}
function room5(){
  for(var a = 42; a<52; a =a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a = 1; a<11; a=a+1){
    Edge(72*51,72*a);
  }
  Edge(72*45, 72*2);
  Edge(72*46, 72*2);
  Edge(72*47, 72*2);
  Edge(72*45, 72*10);
  Edge(72*46, 72*10);
  Edge(72*47, 72*10);
  Edge(72*45, 72*5);
  Edge(72*47, 72*5);
  Edge(72*45, 72*7);
  Edge(72*47, 72*7);

  Bush(72*44, 72*2);
  Bush(72*44, 72*3);
  Bush(72*48, 72*2);
  Bush(72*48, 72*3);
  Bush(72*44, 72*10);
  Bush(72*44, 72*9);
  Bush(72*48, 72*10);
  Bush(72*48, 72*9);

  Bush(72*42, 72*5);
  Bush(72*42, 72*7);
  Bush(72*50, 72*5);
  Bush(72*50, 72*7);
  
  Bush(72*42, 72*2);
  Bush(72*42, 72*10);
  Bush(72*50, 72*2);
  Bush(72*50, 72*10);

  Point(72*51, 72*6);

}
function room6(){
  for(var a = 52; a<62; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a = 1; a<11; a=a+1){
    Edge(72*61, 72*a);
  }
  Edge(72*60, 72*2);
  Edge(72*59, 72*2);
  Edge(72*60, 72*3);
  Edge(72*52, 72*2);
  Edge(72*53, 72*2);
  Edge(72*52, 72*3);
  Edge(72*52, 72*10);
  Edge(72*53, 72*10);
  Edge(72*52, 72*9);
  Edge(72*60, 72*9);
  Edge(72*59, 72*10);
  Edge(72*60, 72*10);
  
  Edge(72*55, 72*4);
  Edge(72*55, 72*5);
  Edge(72*54, 72*5);

  Edge(72*54, 72*7);
  Edge(72*55, 72*7);
  Edge(72*55, 72*8);
  
  Edge(72*57, 72*4);
  Edge(72*57, 72*5);
  Edge(72*58, 72*5);

  Edge(72*58, 72*7);
  Edge(72*57, 72*7);
  Edge(72*57, 72*8);

  Bush(72*55, 72*10);
  Bush(72*56, 72*10);
  Bush(72*57, 72*10);

  Bush(72*55, 72*2);
  Bush(72*56, 72*2);
  Bush(72*57, 72*2); 

  Point(72*61, 72*6);
}
function room7(){
  for(var a = 61; a<72; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a =1; a<11; a =a+1){
    Edge(72*71, 72*a);
  }
  Edge(72*62, 72*4);
  Edge(72*62, 72*5);
  Edge(72*62, 72*2);

  Edge(72*62, 72*10);
  Edge(72*62, 72*8);
  Edge(72*62, 72*7);

  Edge(72*65, 72*2);
  Edge(72*66, 72*2);
  Edge(72*67, 72*2)

  Edge(72*65, 72*10);
  Edge(72*66, 72*10);
  Edge(72*67, 72*10)

  Edge(72*70, 72*4);
  Edge(72*70, 72*5);
  Edge(72*70, 72*2);

  Edge(72*70, 72*10);
  Edge(72*70, 72*8);
  Edge(72*70, 72*7);
  
  Bush(72*65, 72*4);
  Bush(72*66, 72*4);
  Bush(72*67, 72*4);
  Bush(72*65, 72*5);
  Bush(72*66, 72*5);
  Bush(72*67, 72*5);
  Bush(72*65, 72*6);
  Bush(72*66, 72*6);
  Bush(72*67, 72*6);
  Bush(72*65, 72*7);
  Bush(72*66, 72*7);
  Bush(72*67, 72*7);
  Bush(72*65, 72*8);
  Bush(72*66, 72*8);
  Bush(72*67, 72*8);
  Bush(72*64, 72*5);
  Bush(72*64, 72*6);
  Bush(72*64, 72*7);
  Bush(72*68, 72*5);
  Bush(72*68, 72*6);
  Bush(72*68, 72*7);

  Point(72*71, 72*6);


}
function room8(){
  for(var a = 71; a<82; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a=1; a<11; a=a+1){
    Edge(72*81, 72*a);
  }
  Edge(72*72, 72*3);
  Edge(72*72, 72*4);
  Edge(72*73, 72*4);

  Edge(72*73, 72*10);
  Edge(72*74, 72*10);
  Edge(72*74, 72*9);

  Edge(72*80, 72*3);
  Edge(72*80, 72*4);
  Edge(72*79, 72*4);

  Edge(72*78, 72*10);
  Edge(72*79, 72*10);
  Edge(72*78, 72*9);

  Bush(72*72, 72*2);
  Bush(72*73, 72*3);
  Bush(72*74, 72*4);

  Bush(72*72, 72*10);
  Bush(72*74, 72*8);
  Bush(72*73, 72*9);

  Bush(72*80, 72*2);
  Bush(72*78, 72*4);
  Bush(72*79, 72*3);

  Bush(72*78, 72*8);
  Bush(72*80, 72*10);
  Bush(72*79, 72*9);

  Bush(72*76, 72*6);

  Bush(72*75, 72*2);
  Bush(72*76, 72*2);
  Bush(72*77, 72*2);

  Bush(72*75, 72*10);
  Bush(72*76, 72*10);
  Bush(72*77, 72*10);

  Point(72*81, 72*6);

}
function room9(){
  for(var a = 81; a<92; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a=1; a<11; a=a+1){
    Edge(72*91, 72*a);
  }
  for(var a=82; a<91; a = a+1){
    Bush(72*a,72*10)
    Bush(72*a, 72*2)
    
  }

  Edge(72*82, 72*3);
  Edge(72*82, 72*4);
  Edge(72*82, 72*5);
  Edge(72*90, 72*3);
  Edge(72*90, 72*4);
  Edge(72*90, 72*5);
  
  Edge(72*82, 72*9);
  Edge(72*82, 72*8);
  Edge(72*82, 72*7);
  Edge(72*90, 72*9);
  Edge(72*90, 72*8);
  Edge(72*90, 72*7);

  Edge(72*83, 72*3);
  Edge(72*84, 72*3);

  Edge(72*88, 72*3);
  Edge(72*89, 72*3);

  Edge(72*83, 72*9);
  Edge(72*84, 72*9);

  Edge(72*88, 72*9);
  Edge(72*89, 72*9);

  Edge(72*88, 72*8);
  Edge(72*88, 72*7);

  Edge(72*88, 72*5);
  Edge(72*88, 72*4);

  Edge(72*84, 72*8);
  Edge(72*84, 72*7);

  Edge(72*84, 72*5);
  Edge(72*84, 72*4);

  Bush(72*86, 72*9);
  Bush(72*85, 72*9);
  Bush(72*87, 72*9);
  Bush(72*86, 72*8);
  Bush(72*85, 72*8);
  Bush(72*87, 72*8);
  Bush(72*86, 72*7);
  Bush(72*85, 72*7);
  Bush(72*87, 72*7);

  Bush(72*86, 72*3);
  Bush(72*85, 72*3);
  Bush(72*87, 72*3);
  Bush(72*86, 72*4);
  Bush(72*85, 72*4);
  Bush(72*87, 72*4);
  Bush(72*86, 72*5);
  Bush(72*85, 72*5);
  Bush(72*87, 72*5);

  Point(72*91, 72*6);


  
}
function room10(){
  for(var a = 91; a<102; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
    Edge(72*a, 72*2);
    Edge(72*a, 72*10);

  }
  for(var a=1; a<11; a=a+1){
    Edge(72*101, 72*a);
  }
  for(var a = 92; a<101; a=a+1){
    Bush(72*a, 72*3);
    Bush(72*a, 72*9);
  }
  Bush(72*92, 72*4);
  Bush(72*92, 72*5);
  Bush(72*92, 72*7);
  Bush(72*92, 72*8);

  Bush(72*100, 72*4);
  Bush(72*100, 72*5);
  Bush(72*100, 72*7);
  Bush(72*100, 72*8);

  Bush(72*96, 72*4);
  Bush(72*95, 72*4);
  Bush(72*97, 72*4);

  Bush(72*96, 72*8);
  Bush(72*95, 72*8);
  Bush(72*97, 72*8);
  
  Point(72*101, 72*6);
}
function room11(){
  for(var a = 101; a<112; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a=1; a<11; a=a+1){
    Edge(72*111, 72*a);
  }
  Bush(72*103, 72*3);
  Bush(72*103, 72*4);
  Bush(72*104, 72*3);
  Bush(72*105, 72*3);
  Bush(72*106, 72*3);
  Bush(72*107, 72*3);
  Bush(72*108, 72*3);
  Bush(72*109, 72*3);
  Bush(72*109, 72*4);

  Bush(72*103, 72*9);
  Bush(72*103, 72*8);
  Bush(72*104, 72*9);
  Bush(72*105, 72*9);
  Bush(72*106, 72*9);
  Bush(72*107, 72*9);
  Bush(72*108, 72*9);
  Bush(72*109, 72*9);
  Bush(72*109, 72*8);

  Point(72*111, 72*6);
  
}
function room12(){
  for(var a = 111; a<122; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a=1; a<11; a=a+1){
    Edge(72*121, 72*a);
  }
  Edge(72*112, 72*2);
  Edge(72*112, 72*3);
  Edge(72*112, 72*4);

  Edge(72*120, 72*10);
  Edge(72*120, 72*9);
  Edge(72*120, 72*8);

  Bush(72*113, 72*2);
  Bush(72*113, 72*3);
  Bush(72*113, 72*4);
  Bush(72*113, 72*5);
  Bush(72*113, 72*6);
  Bush(72*113, 72*7);
  Bush(72*113, 72*8);
  Bush(72*114, 72*8);

  Bush(72*119, 72*10);
  Bush(72*119, 72*9);
  Bush(72*119, 72*8);
  Bush(72*119, 72*7);
  Bush(72*119, 72*6);
  Bush(72*119, 72*5);
  Bush(72*119, 72*4);
  Bush(72*118, 72*4);

  Point(72*121, 72*6);

} 
function room13(){
  for(var a = 121; a<132; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a=1; a<11; a=a+1){
    Edge(72*131, 72*a);
  }
  Edge(72*122, 72*3);
  Edge(72*122, 72*4);
  Edge(72*122, 72*5);
  Edge(72*122, 72*7);
  Edge(72*122, 72*8);
  Edge(72*122, 72*9);

  Edge(72*130, 72*3);
  Edge(72*130, 72*4);
  Edge(72*130, 72*5);
  Edge(72*130, 72*7);
  Edge(72*130, 72*8);
  Edge(72*130, 72*9);

  Bush(72*123, 72*3);
  Bush(72*124, 72*3);
  Bush(72*125, 72*3);
  Bush(72*129, 72*3);
  Bush(72*128, 72*3);
  Bush(72*127, 72*3);

  Bush(72*123, 72*9);
  Bush(72*124, 72*9);
  Bush(72*125, 72*9);
  Bush(72*129, 72*9);
  Bush(72*128, 72*9);
  Bush(72*127, 72*9);

  Bush(72*126, 72*5);
  Bush(72*126, 72*6);
  Bush(72*126, 72*7);

  Point(72*131, 72*6);
}
function room14(){
  for(var a = 131; a<142; a=a+1){
    Edge(72*a, 72);
    Edge(72*a, 72*11);
  }
  for(var a=1; a<11; a=a+1){
    Edge(72*141, 72*a);
  }
  Edge(72*132, 72*10);
  Edge(72*140, 72*10);
  Edge(72*132, 72*2);
  Edge(72*140, 72*2);

  Bush(72*132, 72*9);
  Bush(72*133, 72*10);

  Bush(72*132, 72*3);
  Bush(72*133, 72*2);

  Bush(72*140, 72*9);
  Bush(72*139, 72*10);

  Bush(72*140, 72*3);
  Bush(72*139, 72*2);

/*Bush(72*133, 72*5);
  Bush(72*133, 72*6);
  Bush(72*133, 72*7);*/

  Bush(72*135, 72*5);
  Bush(72*135, 72*4);
  Bush(72*135, 72*6);
  Bush(72*135, 72*7);
  Bush(72*135, 72*8);
  Bush(72*136, 72*5);
  Bush(72*136, 72*4);
  Bush(72*136, 72*6);
  Bush(72*136, 72*7);
  Bush(72*136, 72*8);
  Bush(72*137, 72*5);
  Bush(72*137, 72*4);
  Bush(72*137, 72*6);
  Bush(72*137, 72*7);
  Bush(72*137, 72*8);
  Bush(72*134, 72*4);
  Bush(72*138, 72*4);
  Bush(72*134, 72*8);
  Bush(72*138, 72*8);

  Point(72*141, 72*6);

}