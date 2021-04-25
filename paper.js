class Bob {
constructor (x, y, radius){
    var options ={
        isStatic : false,
        restituation: 1,
        friction: 0,
        density: 0.8
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius= radius;
    World.add(world, this.body);
}
display(){
   
    var pos = this.body.pos;
    push();
    translate(this.body.position.x, this.body.position.y);
    fill ("grey");
    ellipseMode (CENTER);
    ellipse (0,0,this.radius*2,this.radius*2)
    pop();

}
}