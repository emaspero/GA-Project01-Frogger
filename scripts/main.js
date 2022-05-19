// Set the elements that we will be using/calling throughout the code:
const timeLeft = document.querySelector("#timeLeft");
const result = document.querySelector("#result");
const startPauseBtn = document.querySelector("#startPauseBtn");
const cells = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".logLeft");
const logsRight = document.querySelectorAll(".logRight");
const carsLeft = document.querySelectorAll(".carLeft");
const carsRight = document.querySelectorAll(".carRight");
const restartBtn = document.querySelector("#restartBtn");

const width = 9;
let currentIndex = 76;
let timerID;
let currentTime = 21;
let currentStatus;

//Function to open the Credits tab:
function openCredit(credit, cName) {
  // var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cName).style.display = "block";
  credit.currentTarget.className += " active";
}

//Function to move the Frog:
function moveFrog(e) {
  // console.log(e);
  cells[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      // console.log("Moved Left");
      if (currentIndex % width !== 0) currentIndex -= 1; //if this is true, then we know that we are located on the further left column, then we don't want to be able to move left any further, if it equals 0 the statement is not true therefore we don't proceed
      break;

    case "ArrowRight":
      // console.log("Moved Right");
      if (currentIndex % width < width - 1) currentIndex += 1; //we want to more right as long as the remainder is smaller than 8 (as the grid only has 9 columns)
      break;

    case "ArrowUp":
      // console.log("Moved Up")
      if (currentIndex - width >= 0) currentIndex -= width; //the first row has index 1 to 9, if the index is 1 - width then it's less than 0, we don't want to go further up as we already on the highest row
      break;

    case "ArrowDown":
      // console.log("Moved Down")
      if (currentIndex + width < width * width) currentIndex += width; //any cells minus the last row will allow us to move further down
      break;
  }

  cells[currentIndex].classList.add("frog");
}

//Function that checks the current time left and that calls for functions which move the elements:
function autoMoveElements() {
  currentTime--;
  timeLeft.textContent = currentTime;
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
}

//Check if won or lost the game:
function checkStatus() {
  lose();
  win();
}

//Below functions to move the logs, turtles (labelled as logs) and cars:
function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("log1"):
      logLeft.classList.remove("log1");
      logLeft.classList.add("log2");
      break;

    case logLeft.classList.contains("log2"):
      logLeft.classList.remove("log2");
      logLeft.classList.add("log3");
      break;

    case logLeft.classList.contains("log3"):
      logLeft.classList.remove("log3");
      logLeft.classList.add("log4");
      break;

    case logLeft.classList.contains("log4"):
      logLeft.classList.remove("log4");
      logLeft.classList.add("log5");
      break;

    case logLeft.classList.contains("log5"):
      logLeft.classList.remove("log5");
      logLeft.classList.add("log6");
      break;

    case logLeft.classList.contains("log6"):
      logLeft.classList.remove("log6");
      logLeft.classList.add("log7");
      break;

    case logLeft.classList.contains("log7"):
      logLeft.classList.remove("log7");
      logLeft.classList.add("log8");
      break;

    case logLeft.classList.contains("log8"):
      logLeft.classList.remove("log8");
      logLeft.classList.add("log9");
      break;

    case logLeft.classList.contains("log9"):
      logLeft.classList.remove("log9");
      logLeft.classList.add("log1");
      break;
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains("log18"):
      logRight.classList.remove("log18");
      logRight.classList.add("log10");
      break;

    case logRight.classList.contains("log17"):
      logRight.classList.remove("log17");
      logRight.classList.add("log18");
      break;

    case logRight.classList.contains("log16"):
      logRight.classList.remove("log16");
      logRight.classList.add("log17");
      break;

    case logRight.classList.contains("log15"):
      logRight.classList.remove("log15");
      logRight.classList.add("log16");
      break;

    case logRight.classList.contains("log14"):
      logRight.classList.remove("log14");
      logRight.classList.add("log15");
      break;

    case logRight.classList.contains("log13"):
      logRight.classList.remove("log13");
      logRight.classList.add("log14");
      break;

    case logRight.classList.contains("log12"):
      logRight.classList.remove("log12");
      logRight.classList.add("log13");
      break;

    case logRight.classList.contains("log11"):
      logRight.classList.remove("log11");
      logRight.classList.add("log12");
      break;

    case logRight.classList.contains("log10"):
      logRight.classList.remove("log10");
      logRight.classList.add("log11");
      break;

    case logRight.classList.contains("log27"):
      logRight.classList.remove("log27");
      logRight.classList.add("log19");
      break;

    case logRight.classList.contains("log26"):
      logRight.classList.remove("log26");
      logRight.classList.add("log27");
      break;

    case logRight.classList.contains("log25"):
      logRight.classList.remove("log25");
      logRight.classList.add("log26");
      break;

    case logRight.classList.contains("log24"):
      logRight.classList.remove("log24");
      logRight.classList.add("log25");
      break;

    case logRight.classList.contains("log23"):
      logRight.classList.remove("log23");
      logRight.classList.add("log24");
      break;

    case logRight.classList.contains("log22"):
      logRight.classList.remove("log22");
      logRight.classList.add("log23");
      break;

    case logRight.classList.contains("log21"):
      logRight.classList.remove("log21");
      logRight.classList.add("log22");
      break;

    case logRight.classList.contains("log20"):
      logRight.classList.remove("log20");
      logRight.classList.add("log21");
      break;

    case logRight.classList.contains("log19"):
      logRight.classList.remove("log19");
      logRight.classList.add("log20");
      break;
  }
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("car1L"):
      carLeft.classList.remove("car1L");
      carLeft.classList.add("car2");
      break;

    case carLeft.classList.contains("car2"):
      carLeft.classList.remove("car2");
      carLeft.classList.add("car3");
      break;

    case carLeft.classList.contains("car3"):
      carLeft.classList.remove("car3");
      carLeft.classList.add("car1L");
      break;
  }
}

function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains("car1R"):
      carRight.classList.remove("car1R");
      carRight.classList.add("car3");
      break;

    case carRight.classList.contains("car2"):
      carRight.classList.remove("car2");
      carRight.classList.add("car1R");
      break;

    case carRight.classList.contains("car3"):
      carRight.classList.remove("car3");
      carRight.classList.add("car2");
      break;
  }
}

//Functions that determine if the conditions to lose or win the game have been met:
//The lose function also stops/clears the timer and removes the frog from the board.
function lose() {
  if (
    cells[currentIndex].classList.contains("car1R") ||
    cells[currentIndex].classList.contains("car1L") ||
    cells[currentIndex].classList.contains("car1R") ||
    cells[currentIndex].classList.contains("log3") ||
    cells[currentIndex].classList.contains("log5") ||
    cells[currentIndex].classList.contains("log7") ||
    cells[currentIndex].classList.contains("log9") ||
    cells[currentIndex].classList.contains("log11") ||
    cells[currentIndex].classList.contains("log13") ||
    cells[currentIndex].classList.contains("log14") ||
    cells[currentIndex].classList.contains("log15") ||
    cells[currentIndex].classList.contains("log18") ||
    cells[currentIndex].classList.contains("log19") ||
    cells[currentIndex].classList.contains("log21") ||
    cells[currentIndex].classList.contains("log23") ||
    cells[currentIndex].classList.contains("log24") ||
    cells[currentIndex].classList.contains("log26") ||
    currentTime <= 0
  ) {
    result.textContent = "You lose!";
    clearInterval(timerID);
    clearInterval(currentStatus);
    cells[currentIndex].classList.remove("frog");
    document.removeEventListener("keyup", moveFrog);
  }
}

function win() {
  if (cells[currentIndex].classList.contains("end")) {
    result.textContent = "You win!";
    clearInterval(timerID);
    clearInterval(currentStatus);
    document.removeEventListener("keyup", moveFrog);
  }
}

//On click you van start and/or pause the game:
//When you start the game it also makes the grid visible as it's hidden when the page loads.
startPauseBtn.addEventListener("click", () => {
  if (timerID) {
    clearInterval(timerID);
    clearInterval(currentStatus);
    currentStatus = null;
    timerID = null;
    document.removeEventListener("keyup", moveFrog);
  } else {
    timerID = setInterval(autoMoveElements, 1000);
    currentStatus = setInterval(checkStatus, 100);
    document.addEventListener("keyup", moveFrog);
    cells.forEach((cell) => setVisibility(cell));
  }
});

function setVisibility(cell) {
  cell.style.visibility = "visible";
}

//The restart button reloads the page when clicked:
restartBtn.addEventListener("click", () => {
  window.location.reload();
});
