let seats = [];
let persons = [];
let buttons = [];

let gameState = "start";

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  for(let i = 0; i < 4; i++){
    let seat = new Seat(i * 120 + 50, 400);
    seats.push(seat);
  }
  
  let person = new Person("man", 1000, 500);
  persons.push(person);
  
  let play = new Button(width / 2, height / 2, 100, 50, ()=>{gameState="play";})
                                                             //this.pos.x = 1000;
                                                             //this.pos.y = 500});
  buttons.push(play);
  
  rectMode(CENTER);
}

function draw(){
  background(255);
  if(gameState = "start"){
    buttons[0].display(); 
  
  }else if(gameState = "play"){
    for(let i = 0; i < seats.length; i++){
      seats[i].display();
    }

    for(let i = 0; i < persons.length; i++){
      persons[i].display();
      persons[i].snap();
      persons[i].move();
    }
  }
}

function mousePressed(){
  for(let i = 0; i < buttons.length; i++){
    if (abs(mouseX - buttons[i].pos.x) < buttons[i].width / 2 && abs(mouseY - buttons[i].pos.y) < buttons[i].height / 2){
      buttons[i].work();
    }
  }
}

