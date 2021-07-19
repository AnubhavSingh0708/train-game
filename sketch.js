seats = [];


function setup(){
  createCanvas(windowWidth,windowHeight);
  
  for(let i =0;i<4;i++){
    let seat = new Seat(i*120+50, 400);
    seats.push(seat);
  }
}

function draw(){
  for(let i =0;i<seats.length;i++){
    seats[i].display();
  }

}
