// 1 chiedere al clt km da percorrere

  // dichiaro variabile sui km e trasformo in numero intero
  var kmRichiesti = parseInt(prompt("Quanti km devi percorrere?"));

// 2 chiedere età clt

  // dichiaro var età da richiedere al clt

  var etaCliente = parseInt(prompt("Qual è la tua età?"));

// 3 calcolare prezzo (0.21 euro al km)

  // dichiaro variabile prezzo lordo
  var prezzoLordo = 0.21 * kmRichiesti;

// 4 applicare sconto 20% minorenni 40% over 65

  // condizione sconto minorenni

  if (etaCliente < 18 ) {

    var sconto = ( prezzoLordo * 20 ) / 100;

    var prezzoNetto = prezzoLordo - sconto;

    document.getElementById("prezzo").innerHTML = prezzoNetto.toFixed(2);

  } else if ( etaCliente >= 65 ) {

    var sconto = ( prezzoLordo * 40 ) / 100;

    var prezzoNetto = prezzoLordo - sconto;

    document.getElementById("prezzo").innerHTML = prezzoNetto.toFixed(2);

  } else{

    document.getElementById("prezzo").innerHTML = prezzoLordo.toFixed(2);

  }




// 5 esito costo su html
