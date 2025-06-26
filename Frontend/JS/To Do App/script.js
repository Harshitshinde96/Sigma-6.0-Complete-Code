let toDo = [];

let req = prompt("please enter your request");
console.log(req);

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("---------------");
    for (let i = 0; i < toDo.length; i++) {
      console.log(i, toDo[i]);
    }
    console.log("---------------");
  } else if (req == "add") {
    let task = prompt("please enter the task you want");
    toDo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt("Please enter the task index");
    toDo.splice(idx, 1);
    console.log("task deleted");
  }else{
    console.log("wrong request")
  }
  req = prompt("please enter your request");
}
