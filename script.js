// Welcome prompt to capitalize name on input.
const playerName = prompt('Hello! What is your name?')
let capName = playerName[0].toUpperCase()
let restOfName = playerName.slice(1, playerName.length)
const player = capName + restOfName

alert('Welcome ' + player + '!')

//Confirming player is ready, 1 Question
const start = () => {
  let answer = confirm('Are you hungry?')

  if (answer === true) {
    alert("Let's go EAT! ")
  } else if (answer === false) {
    alert("Come back when you're HUNGRY!")
  }
}
start()

//   7 Destinations, Swtich Statement, +2 user responses , 1 Question
const foodType = () => {
  let foodPick = prompt(
    `${player} what would you like to eat? \n\u2022America\n\u2022Mexican\n\u2022Chinese\n\u2022Italian\n\u2022Japanese\n\u2022Mediterranean\n\u2022Cook at home`
  )
  switch (foodPick) {
    case 'American':
      alert("We're going to AppleBee's")
      break

    case 'Mexican':
      alert("Lets go to Rosa's")
      break

    case 'Chinese':
      alert("PF Chang's it is!")
      break

    case 'Italian':
      alert('Unlimited bread sticks at Olive Garden!')
      break

    case 'Japanese':
      alert("I haven't had that in a while!")
      break
    case 'Mediterranean':
      alert("is Pita Pan's still open?!")

    case 'Cook at home':
      alert("You're cooking!")
      break

    default:
      alert("That's not an option! You're getting Takeout.")
  }
}
foodType()

//parseInt, 1 Question
const canWeAfford = () => {
  let money = prompt('I only have $20.00, how much money do you have? (0.00)')
  let pay = parseInt(money)

  if (pay > 10) {
    alert(pay + ' That should be enough')
  } else {
    alert(pay + ' is not enough')
  }
}

canWeAfford()

//Replay Option
const replay = prompt('Want to eat again? (y/n)')

if (replay === 'y') {
  start()
}
