![General Assembly's Logo](https://camo.githubusercontent.com/603ef5eae7d28900a9678ae96c6c60a9c72f8a059c328b28cf978df999cea1f8/68747470733a2f2f692e696d6775722e636f6d2f6c7a56493364382e706e67)

# SEI Project 1: Elisabetta's Frogger

### Table of Contents
- Project Overview
- Goal
    - Technologies Used
- Approach Taken
- Challenges and Wins
    - Challenges
    - Wins
    - Bugs
    - Key Learnings
- Future Enhancements

---

# Project Overview
As a first project, upon thoroughly researching different beginner-level friendly options,  I decided to try recreating the famous Frogger game, giving it a more personal styling. 
### Link to the game: [Frogger](https://emaspero.github.io/GA-Project01-Frogger/)
![Frogger](/icons/screenshots/Frogger.png)
![Frogger2](/icons/screenshots/Frogger2.png)

# Goal
Build a web application from scratch using programming skills to work out the game logic for a website. Include separate HTML, CSS, JavaScript files. Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles. Use JavaScript and/or jQuery for DOM manipulation.

## Technologies Used
- HTML
- CSS 
- Flexbox
- Vanilla JavaScript

# Approach Taken
I started this project by simply outlining a grid on Figma and developed a clearer visual idea for my project.

I, then developed my User Stories that helped me identifying my objectives for the game:
- As a User, I want to be able to move the frog around the board and to reach the end-point
- As a User, I want the end-point to be clear and easy to find
- As a User, I want to able to start, pause and restart the game
- As a User, I want to know how much time I have got left before losing the game
- As a User, I want to see a “You won/lost” message, depending on the outcome of the game

I began working on my grid as a first step and created the divs that compose the grid as a consequence. I used flexbox to arrange the divs within the grid in a suitable manner and I gave some of them an initial background color to help me to delineate the starting and ending points and the initial position for my frog.

After assigning the divs within the grid classes and ids in order to differentiate them, I created my first function which is the one that allows the frog to move around the board and I decided to use a switch statement in JS to achieve this. The switch statement takes into consideration the size of the grid for the frog’s movements, for example, the first rows has an index of 1 to 9, if the index of the frog’s position is less than 0, then this means that the frog is already on the first row, therefore it’s not able to move anymore upwards. I have left my comments in the below snippet to explain the logic behind each moving statement.
```
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
```
Subsequently I have assigned different colors to the divs representing the logs and cars on my board and created a function that allowed them to move. I have, once again, used a switch statement here.

Once the elements were all moving on my board, I created a function to determine the conditions that would make me lose the game (eg. when the frog was hit by a car) and the condition that would allow me to win the game (when the frog landed on the chosen ending point).

I added a countdown timer and a "result" area displaying a responsive "You win/lose" message.

During the final stages of the project I have added an additional div container on the main page and used it to display my h1, my timer/results and a credits tab showing the source for the icons that I have used in my game.

The main problem-solving strategy for me has been console.log() every element every time I encountered an obstacle with my code, for example when trying to get my elements to move, the function would not work as the constant that I created to contain them was not picking them up correctly, only by console logging I figured out that they were appearing as undefined.


# Challenges and Wins
## Challenges
My biggest challenge right now is to figure out how to get the frog to flow on the river remaining on the logs/turtles as whenever I input a solution I do not get any error messages, but my solutions so far haven't solved the problem, the frog does stand still in the same spot which eventually leads you to lose the game once the log beneath it moves on to the next spot. I have tried creating a function that would check if the frog was standing on a log (depending on whether the log would flow to the left or right) and that would move the frog class along with the log class. As I mentioned, I do not end up getting any errors, but the bug still happens.

## Wins
I did really enjoy figuring out how to make my frog move along the board and discovering and using a switch statement for the first time. Also setting the boundaries for the frog not to get outside the board was challenging, but made me feel empowered once I managed to make it work correctly.
 
## Bugs
- Frog does not flow along the river on a log.

## Key Learnings
As this was my first project, the whole process was a steep learning curve for me. Starting from researching and planning how to best approach the game, all the way to debugging and testing/playing the game. An important step was actually discovering how to Google things correctly. I have also learnt that sometimes it is best to take a break and face a bug with a fresh mind.

# Future Enhancements
- Add different levels to the game (easy, intermediate, difficult).
- Add a background music that can be played/stopped according to user's preference.
- Re-write the code and comply more with DRY principle and try to add the initial grid in JS rather than HTML.
- Re-write the code using jQuery rather than JS.
- Use LocalStorage to persist data locally to allow websites to continue after page refresh or loss of internet connectivity.
- Make the site fully responsive.
