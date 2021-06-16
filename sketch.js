const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var walkingaa,walking;
var thunder1,thunder2,thunder3,thunder4,thunder;
var thundergroup;
var rand;
var batimg,bat;

var maxdrops = 100;
    var drops = [];
    

function preload(){
    walkingaa = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
    thunder3 = loadImage("thunder3.png");
    thunder4 = loadImage("thunder4.png");
   // batimg = loadAnimation("bat.png","bat2.png","bat3.png","bat4.png","bat5.png","bat6.png","bat7.png","bat8.png","bat9.png","bat10.png","bat11.png","bat12.png");
}

function setup(){
   createCanvas(500,600);
   engine = Engine.create();
   world = engine.world;
    walking = createSprite(200,480,20,20);
    walking.addAnimation("walking",walkingaa);
    walking.scale = 0.3;
    
    //bat = createSprite(200,100,10,10);
    //bat.addAnimation("moving",batimg);

    for (var i=0; i < maxdrops; i++){
        drops.push(new Drop (random(0,800),random(0,400)))

    }
    

    thundergroup = new Group();

}

function draw(){
    background(0);
    Engine.update(engine);
    thunderstome();


    for (var a = 1; a <maxdrops; a++){
        drops[a].display();
        drops[a].spwanRain();

    }
   

    drawSprites();
}   

function thunderstome(){
     rand = Math.round(random(1,4));

    if (frameCount%80===0){
        thunder = createSprite(200,100,20,20);
        thunder.x = Math.round(random(200,350));
        thunder.scale = 0.5;
        //thunder.lifetime=4;
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default : break 
        }
        thundergroup.add(thunder);    
        console.log(rand)
    }

if (frameCount%100===0){
    thundergroup.destroyEach();
}

}