//Character of the Game.
var character = document.getElementById("character");

//Sliding blocks
var block = document.getElementById("block");

//To display score
var score = document.getElementById("score");

//Replay buton
var replayButton = document.getElementById("replay");

//For displaying game over message
var gameOver = document.getElementById("game-over")

//Reload function simply reloads the page.
function reloadFunc(){
    location.reload();
}

//FUnction call to start timer (score) as soon as the page loads.
startTimer();

//Function to make the character jump
function jump(){
    if(character.classList != "animate")
    {
        character.classList.add("animate");
    }
    setTimeout(()=>{
        character.classList.remove("animate");
    },500);
}

//Function to check if the Character has collided with the block. It is called at an interval of 10ms.
var checkDead = setInterval(()=>{
    //Getting the top position of the character.
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    //Getting the left position of the block.
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    //Comparing, 
    //Dead condition 1: Top position of character > 130, as the block is 20px tall so the character top position can be maximum 150-20 px.
    //Dead condition 2: Left position of block < 60 and > 0, as the character is 50px wide.  
    if(blockLeft<60 && blockLeft>0 && characterTop>=130){
        block.style.animation="none";
        block.style.display="none";
        resetTimer();
        replayButton.setAttribute("style","display:inline-block;");
        gameOver.setAttribute("style","display:inline-block;");
    }
},10);

//Function for starting the timer (score).
function startTimer(){
    startTime = new Date().getTime();
    
    //Score function is called at an interval of 10ms.
    tInterval = setInterval(scoreFunc, 10); 
}

//Function to find the score and display it in the score span.
function scoreFunc(){
    updatedTime = new Date().getTime();
    difference =  updatedTime - startTime;
    var seconds = (difference / 1000);
    score.innerHTML = seconds;
    if(seconds>=20 && seconds<40){
        block.setAttribute("style","animation: block 900ms infinite linear;");
    }
    else if(seconds>=40 && seconds<80){
        block.setAttribute("style","animation: block 800ms infinite linear;");
    }
    else if(seconds>=80){
        block.setAttribute("style","animation: block 700ms infinite linear;");
    }
}

//Function to reset the timer/score.
function resetTimer(){
    clearInterval(tInterval);
    difference = 0;
}
