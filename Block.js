class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
        }
        this.width = 30;
        this.height = 40;
        this.body = Bodies.rectangle(x, y,this.width,this.height, options);
        World.add(world, this.body);
        this.visibility=255;
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world,this.body)
        push();
         this.visibility = this.visibility -5;
         pop(); 
      }
      }
      Score(){
        if(this.visibility<0 && this.visibility >-1005){
        score++;
        }
      }
      
}