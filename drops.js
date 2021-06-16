class Drop {

    constructor(x,y){
    var options=  {
        friction : 0.1,
        isStatic : false
    }
    this.body = Bodies.circle(x,y,5,options);
    this.radius = 5;
    
    World.add(world,this.body);

}
spwanRain(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,800),y:random(0,400)})
    }
}
display(){
    push();
     var pos=this.body.position;
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();


}
}