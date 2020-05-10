"use strict";

// veiksmai su kintamaisiais

const sk1 = 27;
const sk2 = 3;

const suma = sk1 + sk2;
console.log(suma);

const skirtumas = sk1 - sk2;
console.log(skirtumas);

const sandauga = sk1 * sk2;
console.log(sandauga);

const dalyba = sk1 / sk2;
console.log(dalyba);

console.log(suma - (skirtumas * sandauga) / dalyba);

// tekstines operacijos

const vardas = "vardenis";
const pavarde = "pavardenis";
const pilnasVardas = vardas + " " + pavarde;

console.log(vardas);
console.log(pavarde);
console.log(pilnasVardas);

//Mano megstama spalva yra "Juoda".
const spalva = "juoda";
const spalvosSakinys = 'mano megstama spalva yra "' + spalva + '".';

console.log(spalvosSakinys);

// Skaicius "20" yra lyginis.

const skaicius = 20;
const skaiciausSakinys = 'Skaicius "' + skaicius + '" yra lyginis.';

console.log(skaiciausSakinys);
