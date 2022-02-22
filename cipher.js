let decryptBtn = document.getElementById('descriptografar')

function decode() {
  let textoSaida = document.getElementById('textoSaida1'); // Apresenta o valor codificado
  let textoEntrada = document.getElementById('textoEntrada1').value; // Recebe o valor da mensagem
  let deslocamento = document.getElementById('deslocamento1').value; // Recebe o valor do deslocamento

  let offset = parseInt(deslocamento); // Transoforma o valor deslocamento para number
  offset = offset % 26;

  let lowerCase = textoEntrada.toLowerCase(); // Trasnforma o texto em minúsculo
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Divide o alfabeto para transformá-lo em um array
  let frasePronta = '';

  for (let i = 0; i < lowerCase.length; i++) { // Percorre todo o texto para identificar o indice de cada letra
    let letra = lowerCase[i];

    if (alphabet.indexOf(letra) < 0) {
      frasePronta += letra;
      continue;
    }
    let letraIndex = alphabet.indexOf(letra);
    let newIndex = letraIndex - offset;

    if (newIndex < 25)
      newIndex = newIndex + 26;

    if (newIndex > 25)
      newIndex = newIndex - 26;


    if (textoEntrada[i] === textoEntrada[i].toUpperCase()) {
      frasePronta += alphabet[newIndex].toUpperCase();
    }
    else { 
      frasePronta += alphabet[newIndex];
    }

  }
  textoSaida.value = frasePronta
}

decryptBtn.addEventListener('click', decode);