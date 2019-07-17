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

const game = new Game();
const startButton = document.getElementById('btn__reset')
const keys = document.querySelectorAll('.key');

// Add a click event handler to the start button to begin the game
startButton.addEventListener('click', function() {
    //
  game.startGame()});
// Add a click event handler to each key in the game to see if theres a match or not 
keys.forEach(key => {
  key.addEventListener('click', function() {
    game.handleInteraction(key);
  });
});