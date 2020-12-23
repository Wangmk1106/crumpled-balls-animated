class Box{
    constructor(x, y, width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.image=loadImage("sprites/dustbin.png");
       // this.width = width;
       // this.height = height;
       // Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;

        rectMode(CENTER);
        //strokeWeight(4);
        //stroke("green");
        //fill(255);
        rect(pos.x,pos.y, this.width, this.height);
      }
}