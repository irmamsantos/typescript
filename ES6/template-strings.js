const precos = ['10', '23', '19'];

const precosAcimaVinte = precos
    .filter(preco => preco > 20)
    .map(preco => `R$ ${preco},00`);

console.log(precosAcimaVinte);