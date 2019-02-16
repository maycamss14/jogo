 const numAleatorio = function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
console.log(numAleatorio(0,50));

let numUsuario = Number(prompt('Você é um número entre 0 e 50. Digite algum. Você tem 10 tentativas.'));

let vidas = (10);

while (vidas>0 && numAleatorio != numUsuario){
for (const numAleatorio of numUsuario);
{
  if(numUsuario == numAleatorio){
    alert('Parabens, você acertou!');
  }

  else{
    vidas --;
    if (vidas=0){
      alert('Você perdeu.')
    }
    }
   if(numUsuario>numAleatorio){
     alert('O seu palpite é maior que o número aleatório.Tente novamente. Você tem ' +vidas 'vidas.')
    }
   if(numUsuario<numAleatorio){
     alert('O seu palpite é menor que o número aleatório.Tente novamente. Você tem ' +vidas 'vidas.')
}

}
}