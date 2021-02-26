// 1 chiedere al clt km da percorrere

  // dichiaro variabile sui km e trasformo in numero intero
  var kmRichiesti = parseInt(prompt("Quanti km devi percorrere?"));

  if(isNaN(kmRichiesti)){

      kmRichiesti = parseInt(prompt("Devi inserire solo il numero dei km! Grazie"));

  }
    document.getElementById("km-scelti").innerHTML = kmRichiesti;

// 2 chiedere età clt

  // dichiaro var età da richiedere al clt

  var etaCliente = parseInt(prompt("Qual è la tua età?"));

  if(isNaN(etaCliente)){

    etaCliente = parseInt(prompt("Devi inserire solo il numero! Grazie"));

  }

  document.getElementById("eta-clt").innerHTML = etaCliente;

// 3 calcolare prezzo (0.21 euro al km)

  // dichiaro variabile prezzo lordo e sconto e prezzo netto
  var prezzoLordo = 0.21 * kmRichiesti;

  var prezzoNetto;

  var sconto;

// 4 applicare sconto 20% minorenni 40% over 65

  // condizione sconto minorenni

  if (etaCliente < 18 ) {

    sconto = ( prezzoLordo * 20 ) / 100;

    prezzoNetto = prezzoLordo - sconto;

    document.getElementById("prezzo").innerHTML = prezzoNetto.toFixed(2) + " € grazie al tuo sconto young hai risparmiato " + sconto.toFixed(2) + "€";

  } else if ( etaCliente >= 65 ) {

    sconto = ( prezzoLordo * 40 ) / 100;

    prezzoNetto = prezzoLordo - sconto;

    document.getElementById("prezzo").innerHTML = prezzoNetto.toFixed(2) + " € grazie al tuo sconto over60 hai risparmiato " + sconto.toFixed(2) + "€";

  } else{

    document.getElementById("prezzo").innerHTML = prezzoLordo + " €";

  }
