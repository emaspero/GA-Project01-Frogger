# Project-01-Elisabetta's Frogger

### List technologies used:
- HTML
- CSS and Flexbox
- Vanilla JavaScript

### Link to wireframes and user stories:


### Document your planning and tell a story about your development process and problem-solving strategy:
I started this project by simply outlining a grid on Figma and developed a clearer visual idea for my project. I began working on my grid as a first step and created the *divs* that compose the grid as a consequence.
I used flexbox to arrange the *divs* within the grid in a suitable manner and I gave some of them an initial background color to help me to delineate the starting and ending points and the initial position for my frog. 

After assigning the *divs* within the grid classes and ids in order to differentiate them, I created my first function which is the one that allows the frog to move around the board, I decided to use a switch statement in JS to achieve this. Subsequently I have assigned different colors to the *divs* representing the logs and cars on my board and created a function that allowed them to move. I have, once again, used a switch statement here.

Once the elements were all moving on my board, I created a function to determine the conditions that would make me lose the game (eg. when the frog was hit by a car) and the condition that would allow me to win the game (when the frog landed on the chosen ending point).

I added a countdown timer and a "result" area displaying a responsive "You win/lose" message. 

During the final stages of the project I have added an additional *div* container on the main page and used it to display my *h1*, my timer/results and a credits tab showing the source for the icons that I have used in my game.

The main problem-solving strategy for me has been console.log() every element every time I encountered an obstacle with my code, for example when trying to get my elements to move, the function would not work as the constant that I created to contain them was not picking them up correctly, only by console logging I figured out that they were appearing as undefined. 

My biggest challenge right now is to figure out how to get the frog to flow on the river remaining on the logs/turtles as whenever I input a solution I do not get any error messages, but my solutions so far haven't solved the problem, the frog does stand still in the same spot which eventually leads you to lose the game once the log beneath it moves on to the next spot.

### List unsolved problems and future amendments:
- The frog does not flow along with the logs/turtles in the river.
- Add different levels to the game (easy, intermediate, difficult).
- Add a background music that can be played/stopped according to user's preference.
- Re-write the code and comply more with DRY principle and try to add the initial grid in JS rather than HTML.
- Re-write the code using jQuery rather than JS.
- Use LocalStorage to persist data locally to allow websites to continue after page refresh or loss of internet connectivity.
- Make the site fully responsive.

### Describe how you solved for the winner:
I do not think that I solved everything, on the contrary this game and my code can use a lot of improving. I am looking forward learning more and consolidating my knowledge in order to fork this again in the coming weeks and compare "My Frogger 2.0" to this one. 

### Describe how some of your favorite functions work:
I did really enjoy figuring out how to make my frog move along the board and discovering and using a switch statement for the first time. Also setting the boundaries for the frog not to get outside the board was challenging, but made me feel empowered once I managed to make it work correctly. 