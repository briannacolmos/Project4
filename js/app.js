document.addEventListener("keyup", (event) => {
    // If activePhrase is empty, do not accept keyboard input
    if (game.activePhrase == '') {
        return;
    }
    if (event.keyCode >= 65 && event.keyCode <= 90 ) {
        const button = $(`.keyrow button:contains(${event.key})`);
        if (button.prop('disabled') == false) {
            game.handleInteraction(button);
        }
    }
});

let game = new Game();
document.getElementById('btn__reset').addEventListener('click', () => {
	game = new Game();
	game.startGame();
});
// get all key elements
const keyElements = document.querySelectorAll('.key');
// add eventListener to all key elements
keyElements.forEach(keyElement => {
 	keyElement.addEventListener('click', () => {
 		game.handleInteraction(keyElement);
 	});
});