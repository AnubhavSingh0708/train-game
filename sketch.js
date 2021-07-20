let seats = [];
let persons = [];

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  for(let i =0;i<4;i++){
    let seat = new Seat(i*120+50, 400);
    seats.push(seat);
  }
  
  let person = new Person("man", 1000, 500);
  persons.push(person);
  
  rectMode(CENTER);
}

function draw(){
  background(255);
  for(let i =0;i<seats.length;i++){
    seats[i].display();
  }
  
  for(let i =0;i<persons.length;i++){
    persons[i].display();
    persons[i].snap();
    persons[i].move();
  }
}
