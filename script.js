var sana = "TERVE";
var arvatutKirjaimet = [];
var hutiLukuja = 0;

function arvaaKirjain() {
  var kirjain = document.getElementById("kirjain").value;

  if (sanassa.indexOf(kirjain) != -1) {
    arvatutKirjaimet.push(kirjain);
    var sanat = "";
    for (var i = 0; i < sana.length; i++) {
      if (arvatutKirjaimet.indexOf(sana[i]) != -1) {
        sanat += sana[i];
      } else {
        sanat += "_";
      }
    }
    document.getElementById("kirjaimet").innerHTML = sanat;
  } else {
    hutiLukuja++;
    document.getElementById("hirsipuu").innerHTML = hirsipuu(hutiLukuja);
  }

  if (hutiLukuja == 6) {
    alert("Hävisit!");
  } else if (sana.length == arvatutKirjaimet.length) {
    alert("Voitit!");
  }
}

function hirsipuu(huts) {
  var puu = "";
  for (var i = 0; i < huts; i++) {
    puu += "X";
  }
  return puu;
}

document.getElementById("arvaa").addEventListener("click", arvaaKirjain);
