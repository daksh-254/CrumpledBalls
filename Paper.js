class Paper {
  constructor(x, y, radius) {
    var options = {
         restitution:1.0,
         friction:0.5,
         density:1.2,
    }

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/paper.png");
    World.add(world, this.body);
  }

display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius);
    ellipse(pos.x, pos.y, this.radius);
    pop();
  }
};
