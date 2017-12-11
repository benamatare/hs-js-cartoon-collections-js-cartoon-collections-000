
//Question 1
function dwarfRollCall(dwarves) {
  for (var i = 0; i < dwarves.length; i++) { //Iterate through the array
    var num = i + 1;      // Variable for the local postion of the index +1
    dwarves[i] = num + '. ' + dwarves[i];
  } // Edit the array to become i+1 + Dwarves+'space' (For however long the array is)
  return dwarves.join(" ").toString(); //.join gets rid of the , seperator



//Question 2
function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){ // Iterate through the array
      planeteerCalls[i] = planeteerCalls[i].toUpperCase()+'!';
    } // Edit the array's index to be ALL CAPS + !
    return planeteerCalls;
}

//Question 3
function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) { //Iterate through the array
    if (words[i].length <= 4) { // If the index's length is less than or equal to 4
      return false;
    } else if (words[i].length >= 4) { // If the index's length is greater than or equal to 4
      return true;
    }
  }
}

//Question 4
function findTheCheese(foods) {
  for (var i = 0; i <foods.length; i++){
    if (foods[i] === 'cheddar') {
      return foods[i] // If an index matches cheddar return that index
    } else if (foods[i] === 'gouda') {
      return foods[i] // If an index matches gouda return that index
    } else if (foods[i] === 'camembert') {
      return foods[i] // If an index matches camebert return that index
    }
  } // If all logic fails then return the string 'no cheese!'
  return 'no cheese!'
}
