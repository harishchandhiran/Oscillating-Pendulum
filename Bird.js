class Bird{
  constructor(x, y, radius) {
      this.body = Bodies.circle(x, y, radius);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x,pos.y, this.radius, this.radius);
      if(mouseIsPressed){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
      }
    }
}
