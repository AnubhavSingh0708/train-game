class Person{

  constuctor(type,x ,y){
    this.x = x;
    this.y=  y;
    this.type = type;
  
  
  }
  
  display(){
   rect(this.x,this.y,25, 50);
  }
  
  move(){
    if(dist(mouseX,mouseY,this.x,this.y)<25){
        this.x=mouseX;
        this.y=mouseY;
    }
  }
}
