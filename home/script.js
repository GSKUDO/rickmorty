function IDsearch(){  
  let ID = document.getElementById("ID").value;
  getText(`https://rickandmortyapi.com/api/character/${ID}`)
}

let arraycharacter = [];

async function getText(link) {
  let myObject = await fetch(link);
  let myText = await myObject.text();
  var character = JSON.parse(myText);
  console.log(character.name);
  document.getElementById("showname").innerHTML = character.name;
  arraycharacter.push(character.name);
  console.log(arraycharacter);
  namesearch();
}

function namesearch(){  
  let name = arraycharacter[arraycharacter.length - 1].replace(" ", "+");
  console.log("name" + name)
  getName(`https://rickandmortyapi.com/api/character//?name=${name}`);
}

async function getName(link) {
  let nameObject = await fetch(link);
  let nameText = await nameObject.text();
  var namereturn = JSON.parse(nameText);
  console.log("namereturn" + namereturn);
  console.log(typeof namereturn)
  document.getElementById("return").innerHTML = JSON.stringify(namereturn);
}