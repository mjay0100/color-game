let numOfSquares = 6
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".squares")
let messageDisplay = document.querySelector(".message")
let h1 = document.querySelector("h1")
let colorDisplay = document.getElementById("colorDisplay");
let resetButton = document.querySelector(".new-game")
let modeButton = document.querySelectorAll(".mode")


init();

function init() {
    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("active");
            modeButton[1].classList.remove("active");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            this.classList.add("active")
            reset();
        })
    }

    for (let i = 0; i < squares.length; i++) {
    //add initial colors to each squares by looping through
        squares[i].style.backgroundColor= colors[i];

        //addEventListener to each square
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare click color with picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct"
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
                colorOfSquares(clickedColor);
                
            } else{
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        });
    }
    reset();
}

resetButton.addEventListener("click", reset);

//reset function
function reset() {
    //generate new colors
   colors = generateColors(numOfSquares)
   //pick a new color
   pickedColor = pickColor();
   //change colorDisplay to new picked color
   colorDisplay.textContent = pickedColor;
   //loop through and updates new square color
   for (let i = 0; i < squares.length; i++) {
       if(colors[i]){
        //displays all squares
           squares[i].style.display = "block";
           squares[i].style.backgroundColor= colors[i];
       } else{
           //hides squares based on numOfSquares
           squares[i].style.display = "none";
       }
    }
   resetButton.textContent = "New Colors"
   h1.style.backgroundColor = "steelblue"
   messageDisplay.textContent = "";
}

//function to turn all squares to the same color
function colorOfSquares(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//function to pick a randow color
function pickColor() {
    let random = Math.floor((Math.random()) * colors.length)
    return colors[random];
}

//generates randow colors
function generateColors (num){
    //create an array
    let array =[];
    //loop through and create each array
    for (let i = 0; i < num; i++) {
        array.push(randomColor());
    }
    return array
}

//randow color function
function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}






