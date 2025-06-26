let gaemSeq = [];
let userSeq = [];

let btn = ["green", "red", "yellow", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let reandomIdx = Math.floor(Math.random() * 4);
  let randColor = btn[reandomIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(reandomIdx)
  // console.log(randbtn)
  // console.log(randColor)

  gaemSeq.push(randColor);
  console.log(gaemSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gaemSeq[idx]) {
    if (userSeq.length === gaemSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userflash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
{
  for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
  }
}

function reset() {
  started = false;
  gaemSeq = [];
  userSeq = [];
  level = 0;
}
