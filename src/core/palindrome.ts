
function esPalindromo(texto: string): boolean {
  const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

  
  const textoInvertido = textoLimpio.split('').reverse().join('');

  
  return textoLimpio === textoInvertido;
}


console.log(esPalindromo("reconocer")); 
console.log(esPalindromo("anagrama"));



