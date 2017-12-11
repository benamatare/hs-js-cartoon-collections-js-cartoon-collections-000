

//Accepts an array (Dwarves) and outputs a string of numbered dwarves i.e.
// 1.Doc 2.Dopey 3.Bashful 4.Grumpy
// Have to take the array and convert it into a string, but before each index add
// An incremently increasing variable? ++


function dwarfRollCall(dwarves) {
  for (var i = 0; i < dwarves.length; i++) {
    var num = i + 1;
    dwarves[i] = num + '. ' + dwarves[i];
  }
  return dwarves.join(" ").toString();
}

// Accepts an array (planeteerCalls) outputs a new array with each word capitilized and with an exclamation point at the end

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){
      planeteerCalls[i] = planeteerCalls[i].toUpperCase()+'!';
      }
    return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= 4) {
      return false;
    } else if (words[i].length >= 4) {
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
