let code1;

code1 = 7 + 3;

let code2 = (100 - 20) / 2; // (100 - 20) = 80; 80 / 2 = 40

let code3 = (100 % 61) + (20 % 10); // 100 % 61 = 39, 20 % 10 = 0 → 39 + 0 = 39

let message = "The vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3;

let codeB = `${code1}-${code2}-${code3}`;

console.log(message);
console.log(codeA);
console.log(codeB);
