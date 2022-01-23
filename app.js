const game = () => {
    let pScore = 0;
    let tScore = 0;
    let cScore = 0;



    const startGame =() => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const scoreScreen = document.querySelector(".score");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            scoreScreen.classList.add("fadeIn");
        });
    };



    const playMatch = () => {

        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
    
        const computerOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    
    

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        const tieScore = document.querySelector(".tie-score p");

        playerScore.textContent = pScore;
        tieScore.textContent = tScore;
        computerScore.textContent = cScore;
    }


    
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            tScore++;
            updateScore();
            return;
        }
    
        if (playerChoice === "rock") {
            
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins :(";
                cScore++;
                updateScore();
                return;
            }
        }
    
        if (playerChoice === "paper") {
    
            if (computerChoice === "rock") {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins :(";
                cScore++;
                updateScore();
                return;
            }
        }
    
        if (playerChoice === "scissors") {
    
            if (computerChoice === "paper") {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins :(";
                cScore++;
                updateScore();
                return;
            }
        }
    };



    const quitGame = () => {
        const quitBtn = document.querySelector(".quit button");

        quitBtn.addEventListener("click", () => {
            window.location.reload();
        }); 
    };



    startGame();
    playMatch();
    quitGame();
};

game();