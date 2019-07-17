
class Game {
    constructor() {
        // Tracks number of missed letters & p
        this.missed = 0;
        this.phrases = this.createPhrases();
        // Phrase that is currently shpowing
        this.activePhrase = (null);
    }

    // Creates and returns array of possible phrases to be used in game
    createPhrases() {
        return [
            new Phrase("An avocado, thanks"),
            new Phrase("YEET"),
            new Phrase("I smell like beef"),
            new Phrase("Fre sha va ca do"),
            new Phrase("I could have dropped my croissant")
        ];
    }

    // Selects and returns random phrase from phrases property to be used in game
    getRandomPhrase() {
        const phraseIndex =[Math.floor(Math.random() * this.phrases.length)];
        return this.phrases[phraseIndex];
    }

    // Begins game by selecting a random phrase and displaying it to the user
    startGame() {
        $("#overlay").hide();
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

  // checks for a win if not returns false
    checkForWin() {
        if ($(".hide").length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
// Displays game over message & checks if user won
    gameOver(gameWon) {
        $("#overlay").show();
        // Insert win or lose message into header
        if (gameWon == true) {
           $("#game-over-message").empty().append("You win! Play again?");
           $("#overlay").removeClass("start").addClass("win");
        }
        else {
            $("#game-over-message").empty().append("Yikes! Try again?");
            $("#overlay").removeClass("start").addClass("lose");
        }
        // Set active phrase to nothing so app will not accept keyboard input
        this.activePhrase = '';
        // Remove previous phrase
        $("#phrase ul").empty();
        // Re-enable on-screen keyboard buttons, update each to use "key" class, not "chosen" or "wrong"
        $(".key").attr("disabled", false).removeClass("chosen").removeClass("wrong");
        // Reset heart lives
        $(".tries img").attr("src", "images/liveHeart.png");
    };

    // Checks if player has remaining lives and ends game if none remainin
    removeLife() {
        this.missed++;
        // Select heart image based on how many times the player has missed a correct guess
        const tries = $(`#scoreboard li:nth-child(${this.missed}) img`);

        if (tries.attr("src") == "images/liveHeart.png") {
            tries.attr("src", "images/lostHeart.png");
        }
        
        if (this.missed == 5) {
           this.gameOver(false);
        }
    };

    // Handles on-screen keyboard button clicks
    // Takes in HTML button element that was clicked
    handleInteraction(button) {
        $(button).attr("disabled", true);
        if (!this.activePhrase.checkLetter($(button).text())) {
            $(button).addClass("wrong");
            this.removeLife();
        }
        else {
            $(button).addClass("chosen");
            this.activePhrase.showMatchedLetter($(button).text());
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }
};