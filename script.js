document.body.querySelector("#endresult").innerHTML="End Result:"
var dragon = 10;
var player = 5;
while (dragon!=0&&player!=0){
var attacks = Number(prompt("How many attacks are you hitting the dragon?"))

var attackdmg = Math.floor((Math.random() * attacks));
var dragondmg = Math.floor((Math.random() * 1) + 1);

if(attacks==100){
 break;
}else if(attackdmg>5){
  var attackdmg = 1
}
if(isNaN(attacks)==true){
  var nan  = "Attacks must be a number."
  document.body.querySelector("#no").innerHTML=display
}

      dragon=dragon - attackdmg
       player=player - dragondmg
  var dragonhealth = `The dragon has ${dragon} health ` ;
  var playerhealth = `The player has ${player} health ` ;

}
  if(player==0){
    var result = "The player has died!"
  } else if(dragon==0){
    var result = "The dragon has been defeated!"
  }
document.body.querySelector("#dragondiv").innerHTML=dragonhealth
document.body.querySelector("#playerdiv").innerHTML=playerhealth
document.body.querySelector("#endingdiv").innerHTML=result