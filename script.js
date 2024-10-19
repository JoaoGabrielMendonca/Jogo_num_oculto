let oculto = null;
let tentativas = 5;

function iniciar() {
    oculto = parseInt(document.getElementById('oculto').value);
    if (isNaN(oculto) || oculto < 1 || oculto > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }
    document.getElementById('primeiro').style.display = 'none';
    document.getElementById('segundo').style.display = 'block';
}

function chutar() {
    const guess = parseInt(document.getElementById('guess').value)
    const mensagem = document.getElementById('mensagem')
    const sobrando = document.getElementById('sobrando')
    const pos = document.getElementById('pos')

    if (isNaN(guess) || guess < 1 || guess > 100) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    if (guess === oculto) {
        pos.textContent = "Parabéns! Você acertou o número!";
        document.getElementById('segundo').style.display = 'none';
    } else {
        tentativas--;
        if (tentativas > 0) {
            mensagem.textContent = guess > oculto ? "O número é menor." : "O número é maior.";
            sobrando.textContent = `Tentativas restantes: ${tentativas}`;
        } else {
            pos.textContent = `Você perdeu! O número era ${oculto}.`;
            document.getElementById('segundo').style.display = 'none';
        }
    }
}