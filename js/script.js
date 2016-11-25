word();

function word()
{
  var mot = prompt("Entrez un mot");
console.log(mot);

// création du tableau :
var tab = document.getElementById("tableau");
var row = tab.insertRow();

// création ligne case 1 -- mot en gras et en couleur :
var cells = row.insertCell();
cells.style.color = "red";
cells.style.fontWeight = "bold";
cells.innerHTML = mot;

// création case 2 -- mot minuscule :
var cells = row.insertCell();
cells.innerHTML = mot.toLowerCase();

// création case 3 -- mot majuscule :
var cells = row.insertCell();
cells.innerHTML = mot.toUpperCase();


// création case 4 -- nb de consonne & voyelle :
var voyelle = ["a","e","i","o","u","y"];
var cons = 0;
var voy = 0;
var cells = row.insertCell();
for(i=0; i<mot.length; i++){
  for(j=0; j<voyelle.length; j++){
    if(voyelle[j]==mot[i])
    {voy++}
  }
}
cells.innerHTML = "nombre de voyelle(s) : " + voy + " <br/> nombre de consonne(s) : " + (mot.length - voy);


// création case 5 -- mot avec lettres inversées :
var cells = row.insertCell();
cells.innerHTML = mot.split("").reverse().join("");

// création case 6 -- mot est un palindrome ou pas :
var cells = row.insertCell();
if(mot == mot.split("").reverse().join("")){
  cells.innerHTML = "est un palindrome";
}else{
  cells.innerHTML = "n'est pas un palindrome";
}
}
// Com
