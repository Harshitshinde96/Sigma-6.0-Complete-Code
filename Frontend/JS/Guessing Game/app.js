const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }

  if (guess == random) {
    console.log("you are right! congrats!! random number was ",random);
    break;
  } else if(guess<random){
    guess= prompt("hint: your guess was too small. please try larger number")

  }else{
    guess=prompt("hint: your guess was too large. please try smaller number")
  }
  
//   else {
//     guess = prompt("your giess was wrong. please try again");
//   }
}
