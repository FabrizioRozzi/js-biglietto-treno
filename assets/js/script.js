var euroKm = parseFloat(0.21 +" "+ "€");
var totKm = prompt("Quanti km devi percorrere?");
var eta = prompt("Quanti anni hai?");
var euroKmMinorenni = parseFloat(euroKm-((euroKm*20)/100)).toFixed(2);
var euroKmOver = parseFloat(euroKm-((euroKm*40)/100)).toFixed(2);

if(eta>=65){
  console.log("Il prezzo da pagare é di :" + (totKm * euroKmOver).toFixed(2));
}else if(eta <= 18){
  console.log("Il prezzo da pagare é di :" + (totKm * euroKmMinorenni).toFixed(2));
}else{
  console.log("Il prezzo da pagare é di :" + (totKm * euroKm).toFixed(2));
}


