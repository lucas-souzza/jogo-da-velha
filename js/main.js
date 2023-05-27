const listaCelulas = document.querySelectorAll('.tabela-celula');
const resultadoDiv = document.querySelector('.resultado');
const novamenteBtn = document.querySelector('.resultado-button');
const playerVencedor = document.querySelector('.resultado-ganhador');

let contClick = 0;

listaCelulas.forEach( (elemento) => {
    elemento.addEventListener('click', () => {
        if(!elemento.textContent) {
            adicionaForma(elemento);
            checaResultado(listaCelulas);

            contClick += 1;
        }
    });
});

function adicionaForma(elemento) {
    if(contClick === 0 || contClick % 2 === 0) {
        elemento.textContent = 'X';
    }
    else {
        elemento.textContent = 'O';
    }
    
    return 'ok';
}

function checaResultado(lista) {
    if(lista[0].textContent === 'X' && lista[1].textContent === 'X' && lista[2].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[3].textContent === 'X' && lista[4].textContent === 'X' && lista[5].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[6].textContent === 'X' && lista[7].textContent === 'X' && lista[8].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[0].textContent === 'X' && lista[3].textContent === 'X' && lista[6].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[1].textContent === 'X' && lista[4].textContent === 'X' && lista[7].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[2].textContent === 'X' && lista[5].textContent === 'X' && lista[8].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[0].textContent === 'X' && lista[4].textContent === 'X' && lista[8].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[2].textContent === 'X' && lista[4].textContent === 'X' && lista[6].textContent === 'X') {
        mostraResultado('player1');
    }
    else if(lista[0].textContent === 'O' && lista[1].textContent === 'O' && lista[2].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[3].textContent === 'O' && lista[4].textContent === 'O' && lista[5].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[6].textContent === 'O' && lista[7].textContent === 'O' && lista[8].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[0].textContent === 'O' && lista[3].textContent === 'O' && lista[6].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[1].textContent === 'O' && lista[4].textContent === 'O' && lista[7].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[2].textContent === 'O' && lista[5].textContent === 'O' && lista[8].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[0].textContent === 'O' && lista[4].textContent === 'O' && lista[8].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[2].textContent === 'O' && lista[4].textContent === 'O' && lista[6].textContent === 'O') {
        mostraResultado('player2');
    }
    else if(lista[0].textContent && lista[1].textContent && lista[2].textContent && lista[3].textContent && lista[4].textContent && lista[5].textContent && lista[6].textContent && lista[7].textContent) {
        mostraResultado('velha');
    }
}

function mostraResultado(vencedor) {
    if(vencedor === 'player1') {
        playerVencedor.textContent = 'Player 1 ganhou!';
    }
    else if(vencedor === 'player2') {
        playerVencedor.textContent = 'Player 2 ganhou!';
    }
    else {
        playerVencedor.textContent = 'Deu velha!';
    }

    setTimeout(() => {
        resultadoDiv.style.display = 'flex';
    }, 100)

    novamenteBtn.addEventListener('click', () => {zeraTudo()});
}

function zeraTudo() {
    listaCelulas.forEach( (elemento) => {
        elemento.textContent = '';
    })
    contClick = 0;
    resultadoDiv.style.display = 'none';
}