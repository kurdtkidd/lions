const minhaMesa = ['Letícia', 'Johan', 'Bruna', 'Fernanda', 'Gabriel'];

console.log(
  `Meu nome é ${minhaMesa[1]}, meus colegas são: ${minhaMesa[0]}, ${minhaMesa[2]}, ${minhaMesa[3]} e ${minhaMesa[4]}.`
);

minhaMesa.push('Larissa');

console.log(minhaMesa);

minhaMesa.shift();

console.log(minhaMesa);

minhaMesa.splice(2, 1);

console.log(minhaMesa);



