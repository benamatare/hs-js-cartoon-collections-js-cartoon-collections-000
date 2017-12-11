
function dwarfRollCall(dwarves) {
  for (var i = 0; i < dwarves.length; i++) {
    var num = i + 1;
    dwarves[i] = num + '. ' + dwarves[i];
  } // Edit the array to become i+1 + Dwarves+'space' (For however long the array is)
  return dwarves.join(" ").toString();


function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){
      planeteerCalls[i] = planeteerCalls[i].toUpperCase()+'!';
    } // Edit the array's index to be ALL CAPS + !
    return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= 4) { // If the index's length is less than or equal to 4
      return false;
    } else if (words[i].length >= 4) { // If the index's length is greater than or equal to 4
      return true;
    }
  }
}


function findTheCheese(foods) {

  for (var i = 0; i <foods.length; i++){
    if (foods[i] === 'cheddar') {
      return foods[i]
    } else if (foods[i] === 'gouda') {
      return foods[i]
    } else if (foods[i] === 'camembert') {
      return foods[i]
    }
  }
  return 'no cheese!'
}
