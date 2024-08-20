// script.js
document.querySelectorAll('.choice').forEach(img => {
    img.addEventListener('click', () => {
        const userChoice = img.id;
        const choices = ['pedra', 'papel', 'tesoura'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Atualiza as imagens de escolha
        document.getElementById('playerChoice').src = `${userChoice}.png`;
        document.getElementById('computerChoice').src = `${computerChoice}.png`;

        let result = '';

        if (userChoice === computerChoice) {
            result = 'Empate!';
        } else if (
            (userChoice === 'pedra' && computerChoice === 'tesoura') ||
            (userChoice === 'papel' && computerChoice === 'pedra') ||
            (userChoice === 'tesoura' && computerChoice === 'papel')
        ) {
            result = 'Você ganhou!';
        } else {
            result = 'Você perdeu!';
        }

        document.getElementById('message').textContent = `Você escolheu ${userChoice}. O computador escolheu ${computerChoice}. ${result}`;
    });
});
