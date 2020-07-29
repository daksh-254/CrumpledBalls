class Dustbin1 extends Dustbin{
    constructor(x, y, width, height){
      super(x, y, width, height);
      this.image = loadImage("sprites/dustbingreen.png");
 }
   
   display(){
    super.display();
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y - 70, this.width + 20, 250);
   }
}