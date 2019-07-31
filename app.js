// Rover Object Goes Here
// ======================
var rover1={
  direction:"N",
  x:0,
  y:0,
  travelLog:[[0,0]],
  name: 'Rover1'
}

var rover2={
  direction:"N",
  x:10,
  y:10,
  travelLog:[[10,10]],
  name: 'Rover2'
}
// ======================
function turnLeft(rover){
  console.log(rover.name+" direction: "+rover.direction);
  console.log("turnLeft was called on "+rover.name);
  switch (rover.direction) {
    case "N":
      rover.direction="W";
      break;
    case "S":
      rover.direction="E"; 
      break;  
    case "E":
      rover.direction="N";
      break;
    case "W":
      rover.direction="S";
      break;
  }

  console.log(`new ${rover.name} direction: ${rover.direction}`);
}

function turnRight(rover){
  console.log(rover.name +" direction: "+rover.direction);
  console.log("turnRight was called on "+rover.name);
  switch (rover.direction) {
    case "N":
      rover.direction="E";
      break;
    case "S":
      rover.direction="W"; 
      break;  
    case "E":
      rover.direction="S";
      break;
    case "W":
      rover.direction="N";
      break;
  }

  console.log(`new ${rover.name} direction: ${rover.direction}`);
}

function moveForward(rover){
  console.log("moveForward was called on "+rover.name);
  switch (rover.direction) {
    case "N":
      (rover.y>0)?rover.y-=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
      break;
    case "S":  
      (rover.y<10)?rover.y+=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
      break;
    case "E":
      (rover.x<10)?rover.x+=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
      break;
    case "W":
      (rover.x>0)?rover.x-=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
  }

  rover.travelLog.push([rover.x,rover.y]);
}


//Move backwards function

function moveBackward(rover){
  console.log("moveBackward was called on "+rover.name);
  switch (rover.direction) {
    case "N":
      (rover.y<10)?rover.y+=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
      break;
    case "S":  
      (rover.y>0)?rover.y-=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
      break;
    case "E":
      (rover.x>0)?rover.x-=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
      break;
    case "W":
      (rover.x<10)?rover.x+=1:console.log("Caution: You are trying to move "+rover.name+" out of the map");
  }

  rover.travelLog.push([rover.x,rover.y]);
}


// function to execute the commands in a list

function execListComnds(listStrng,rover) {
  
  for(let i=0;i<listStrng.length;i++)
  {
    if(listStrng[i]==='l')
    {
      turnLeft(rover);
    } else if(listStrng[i]==='r')
    {
      turnRight(rover);
    } else if(listStrng[i]==='f')
    {
      moveForward(rover);
    } else if(listStrng[i]==='b')
    {
      moveBackward(rover);
    }
     else
    {
      console.log(`${listStrng[i]} is not the right command for ${rover}, inputs must be only 'l', 'r', 'f' or 'b'`);
      break; 
    }

  }
}
