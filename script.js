// Welcome prompt to capitalize name on input.
const playerName = prompt('Hello! What is your name?')
let capName = playerName[0].toUpperCase()
let restOfName = playerName.slice(1, playerName.length)
const player = capName + restOfName

alert('Welcome ' + player + '!')

//Confirming player is ready
const start = () => {
  let answer = confirm('Are you hungry?')

  if (answer === true) {
    alert("Let's go EAT! ")
  } else if (answer === false) {
    alert("Come back when you're HUNGRY!")
  }
}
start()

const foodType = () => {
  let foodPick = prompt(
    `${player} what would you like to eat? \n\u2022America\n\u2022Mexican\n\u2022Chinese\n\u2022Italian\n\u2022Japanese\n\u2022Mediterranean\n\u2022Cook at home`
  )
}
foodType()
