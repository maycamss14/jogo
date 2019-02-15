function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
console.log(aleatorio(0,50));

let numUsuario = Number(prompt('Digite um número'));

if (numUsuario==aleatorio){
    alert('Parabéns, você acertou!');
}
else {
        alert('Você errou, tente novamente.')
    }
