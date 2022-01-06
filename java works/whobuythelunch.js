var names=["arshad","afsal","almal"];

function whoBuyLunch(names)
{
  var totalPositions=3;
  var randomPositions=Math.floor(Math.random()*3)
  var randomName=names[randomPositions];
  return console.log(randomName+"will buy the lunch"); 
}
whoBuyLunch()