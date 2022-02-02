const title = document.querySelector(".title")
const start = document.querySelector(".start")
const invadersBox = document.querySelector(".invader-container")
const invaders = document.querySelectorAll(".invaders")
let lasers = [];
const laserAudio = new Audio("sounds/laser.mp3")
let invadersArr = []
// let deadInvaders = []

let gameState;
function setState(state) {
    gameState = state
    if (state === "play") {
        title.style.visibility = "hidden"
        start.style.visibility = "hidden"
    }
    else if (state === "menu") {
        title.style.visibility = "visible"
        start.style.visibility = "visible"
    }
}


class battleShip {
    constructor() {
        this.el = document.createElement("img");
        this.el.src = "images/battleship.png";
        document.body.appendChild(this.el)
        
        this.el.classList.add("battleship")
        this.x = window.innerWidth/2;
        this.y = window.innerHeight;
        this.speed = 4;
    }

    setX(x) {
        this.x = x;
        this.el.style.left = `${this.x}px`;
    }
    setY(y) {
        this.y = y;
        this.el.style.top = `${this.y}px`
    }

    moveLeft() {
        this.setX(this.x - this.speed)
    }

    moveRight() {
        this.setX(this.x + this.speed)
    }
}

const ship = new battleShip() 

let laserY = window.innerHeight - 130 +"px";
class laser {
    constructor() {
        this.el = document.createElement("div")
        this.el.classList.add("laser")
        this.el.style.height = 30 + "px"
        this.el.style.width = 3 + "px"
        document.body.appendChild(this.el)
        this.el.style.left = `${ship.x}px`;
        
        
        this.el.style.top = laserY
        this.speed = 10

        // this.move = function() {
        //     this.y = laserY -= 100
        // }
    }

    setX(x) {
        this.x = x;
        this.el.style.left = `${ship.x}px`;
    }
    setY(y) {
        this.y = y;
        this.el.style.top = laserY;
    }

    
}

const createShot = () => {
    const laserbeam = new laser()
    laserAudio.play()
    
    lasers.push(new laser({
        x: ship.x,
        y:ship.y,
    }));
    // setInterval(laserbeam.moveUp)
}





let movementX = window.innerWidth / 2
let movementY = 0
const leftMargin = window.innerWidth / 10
const rightMargin = window.innerWidth -100
console.log(rightMargin)

    function moveInvaders() {
        
        movementX += 30;
        movementY += 20;
        if(movementX > leftMargin) {
            invadersBox.style.left = movementX + "px"
        } else if(movementX > rightMargin) {
            invadersBox.style.right = movementX + "px"
        } 
         }
    
  setInterval(moveInvaders, 800)
  


const updateGame =() => {
    if(keys["ArrowLeft"] /*way to stop ship leaving edge of screen here*/ ) {
    ship.moveLeft()
    } else if (keys["ArrowRight"] ){
        ship.moveRight()
    }
}
setInterval(updateGame,20)

const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    spacebar: false,
};

// ######### EVENT LISTENERS ###########
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    if(e.key === " ") {
        createShot()
    }

    if(e.key == "Enter") {
      setState("play")
    }

    if(e.key == "Escape") {
        setState("menu")
    }
})

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
})



// ########### generate background stars #############
const space = document.querySelector(".space")
const stars = document.querySelector("i")

function createStars() {
    const numOfStars = 30;
    for (let i= 0; i<numOfStars; i++ ) {
const stars = document.createElement("i");
let x = Math.floor(Math.random() * window.innerWidth)
let y = Math.floor(Math.random() * 70)
let size = Math.floor(Math.random() * 2.1 )
stars.style.animationDuration = Math.random()* 5 + 6 + "s";

stars.style.left = x+"px"
stars.style.top = y+"px"
stars.style.width = size+"px"
stars.style.height = size+"px"
space.appendChild(stars)

setTimeout(() => {
    stars.remove()
    }, 10000)
  }
}
setInterval(createStars, 1500)



