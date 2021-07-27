class Button{

  constructor(x,y,width,height,func){
    this.pos=createVector(x,y);
    this.width= width;
    this.height=height;
    this.func = func;
  }

  display(){
    rect(this.pos.x,this.pos.y,this.width,this.height);
  }

  work(){
    this.func()
  }
  
}
