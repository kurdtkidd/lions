let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 2 == 0) {
    somaPares += i;
    totalPares++;
  } else {
    somaImpares += i;
    totalImpares++;
  }
}

let mediaPares = somaPares / totalPares;
let mediaImpares = somaImpares / totalImpares;

console.log(
  `A soma dos valores pares é ${somaPares}, o total de números pares é ${totalPares} e a média deles é ${mediaPares}.`
);
console.log(
  `A soma dos valores ímpares é ${somaImpares}, o total de números ímpares é ${totalImpares} e a média deles é ${mediaImpares}.`
);

