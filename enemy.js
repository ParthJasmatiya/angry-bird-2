class Enemy {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/face.jpg");
      World.add(world, this.body);
    } 
    display(){
    var pos =this.body.position;
      push();
      stroke(48,22,8);
      strokeWeight(3);
      enemy.scale=0.2;
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image( this.image,0, 0, this.width, this.height);
      pop();
    }
    };