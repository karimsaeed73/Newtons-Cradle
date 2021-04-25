class Rope {
constructor(body1, body2, offsetx, offsety)
{
 var options = {
     bodyA: body1, bodyB: body2, pointB : {x:offsetx, y:offsety}
 }
 this.rope = Constraint.create (options)
 this.xoff = offsetx ; this.yoff = offsety;
 World.add (world, this.rope)
}
display(){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;
stroke ("blue");
strokeWeight (2);
line(pointA.x,pointA.y,pointB.x+ this.xoff, pointB.y + this.yoff );
}
}