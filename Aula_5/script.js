// window.alert("hello world!")
console.log("hello world!");

// let nome = prompt("Qual o seu nome?");
// console.log(nome);

let i = 0;
while(i < 10){
    console.log(i);
    // i++;
    // 1 = i + 1;
    i +=1;
}

console.log("for");
for(let i = 0; i < 10; i ++){
    console.log(i);
}


console.log("Exe1");
for(let i = 1; i < 100; i += 2 ){
    console.log(i);
}

console.log("Exe2");
for(let i = 5; i <= 500; i += 5 ){
    console.log(i);
}

console.log("Exe3");
let x = parseInt(prompt("Digite um numero inteiro"));
if(x < 0){
    console.log("Numero invalido!");
}
for(let i = x; i >= 0; i--){
    console.log(i);
}

console.log("Exe4");
let num = parseInt(prompt("Digite um numero inteiro"));
if(num < 0){
    console.log("Numero invalido!")
}

let mult = 1;
for(let i = num; i > 0; i--){
    mult *= i;
    console.log(i, mult);
}