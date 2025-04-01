let randomNumber = Math.floor(Math.random() * 100); 
console.log(randomNumber); // Exibe o número gerado para depuração (pode ser removido depois)

function Adivinhação() {
    // Pega o valor inserido no campo de input
    let resp = document.getElementById("resp").value;
    let Adivinhação_resp = document.getElementById("Adivinhação_resp");

    // Verifica se o campo está vazio
    if (resp === "") {
        Adivinhação_resp.textContent = "Por favor, insira um número!";
        Adivinhação_resp.style.color = "red";
        return;
    }

    // Converte o valor de resp para um número
    resp = parseInt(resp);

    // Verifica se o valor inserido é um número válido
    if (isNaN(resp)) {
        Adivinhação_resp.textContent = "Por favor, insira um número válido!";
        Adivinhação_resp.style.color = "red";
        return;
    }

    // Verifica se o número inserido é igual, maior ou menor que o número aleatório
    if (resp === randomNumber) {
        Adivinhação_resp.textContent = "Parabéns! Você acertou!";
        Adivinhação_resp.style.color = "green";
        document.body.style.backgroundColor = "lightgreen"; // Muda o fundo para verde
    } else if (resp < randomNumber) {
        Adivinhação_resp.textContent = "Tente um número maior!";
        Adivinhação_resp.style.color = "orange";
        document.body.style.backgroundColor = "red"; // Muda o fundo para vermelho
    } else {
        Adivinhação_resp.textContent = "Tente um número menor!";
        Adivinhação_resp.style.color = "orange";
        document.body.style.backgroundColor = "red"; // Muda o fundo para vermelho
    }
}