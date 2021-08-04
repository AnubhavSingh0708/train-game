class Person{

  constructor(type,x ,y){
  	this.x = x;
  	this.y = y;
  	this.type = type;
  	this.dragged = false;
  
  }
  
  display(){
 		rect(this.x, this.y, 25, 50);
  }
  
  move(){
   	if(dist(mouseX, mouseY, this.x, this.y) < 25 && mouseIsPressed){
			for(let i =0;i<persons.length;i++){
  			if(persons[i].dragged == false){
					this.dragged = true
				}
			}
		}else{
			this.dragged = false
		}
		if(this.dragged == true){
			this.x = mouseX;
    	this.y = mouseY;
		}
	}
  
  snap(){
    for(let i =0;i<seats.length;i++){
      if(dist(this.x, this.y, seats[i].x, seats[i].y) < 50 && !mouseIsPressed){
				this.x = seats[i].x;
				this.y = seats[i].y;
				this.dragged = false;
			}
  	}
	}
}
