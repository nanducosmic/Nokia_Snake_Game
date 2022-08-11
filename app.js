document.addEventListener('DOMContentLoaded',()=>{
const square=document.querySelectorAll('.container div')
const scoreDisplay=document.querySelector('span')
const startBtn=document.querySelector('.button')

const width=10
let currentIndex=0 //first div in container
let appleIndex=0 //"                     "
let currentSnake=[2,1,0]
let direction=1
let score=0
let intervalTime=0
let interval=0

//To start and restart the game
function startGame(){
    currentSnake.forEach(index => square[index].classList.remove('snake'))
    square[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score=1
    //random apple()
    direction =1
    scoreDisplay.innerText=score
    intervalTime=1000
    currentSnake[2,1,0]
    currentIndex =0
    currentSnake.forEach(index =>square[index].classList.add('snake'))
    interval=setInterval(moveOutcomes,intervalTime)

}


//function to deal with the outcome of snake

function moveOutcomes(){
    if(
        (currentSnake[0]+width>=(width*width)&& direction ===width) ||  //if snake hits bottom
        (currentSnake[0] %width=== width -1 && direction ===1) ||       //if snake hits right wall
        (currentSnake[0]% width === 0 && direction ===-1)||             //if snake hits left wall
        (currentSnake[0]-width <0 && direction === -width)||              //if snake hits top
        square[currentSnake[0] + direction].classList.contains('snake')
      ){
      return clearInterval(interval)     //this will clear the interval if any of the above happen
      }
  

const tail =currentSnake.pop() //removes last item of array
square[tail].classList.remove('snake')//removes class of snake from the tail
currentSnake.unshift(currentSnake[0]+direction)//gives direction to the head of the array

//deals with snake getting apple
 if(square[currentSnake[0]].classList.contains('apple')){
    square[currentSnake[0]].classList.remove('apple')
    square[tail].classList.add('snake')
    currentSnake.push(tail)
    //randomApple()
    score++
    scoreDisplay.textContent =score
    clearInterval(interval)
    intervalTime =intervalTime*Speed 
    interval =setInterval(moveOutcomes,intervalTime)
 }
 square[currentSnake[0]].classList.add('snake')
}
//assigning functions to keycodes
function control(e){
     square[currentIndex].classList.remove('snake')

     if(e.keyCode ===39){//right
        direction=1
     }else if(e.keyCode ===38){//up
        direction = -width
     }else if(e.keyCode ===37){//left
        direction = -1
     }else if(e.keyCode ===40){
        direction = +width
     }
}
document.addEventListener('keyup',control)
startBtn.addEventListener('click',startGame)
})
