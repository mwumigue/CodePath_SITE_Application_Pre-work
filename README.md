# Pre-work - Flash Memories

**Flash Memories** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Miguel Wu Liang**

Time spent: **12** hours spent in total

Link to project: https://glitch.com/edit/#!/pear-enormous-mule

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn


## Video Walkthrough (GIF)
![ezgif-1-ff0dc30af1](https://user-images.githubusercontent.com/59422107/161269002-9bc5ac54-ed7c-425d-8cc0-3c69e55efbbf.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    * https://studio.code.org/courses
    * https://www.w3schools.com/js/default.asp
    * https://www.designwizard.com/blog/design-trends/colour-combination

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

   While I was creating this submission, I faced multiple challenges. I think the main challenge I encountered was working on the Checking the user???s response section, especially the guess function, of the game given that it was a long section that combined everything we had to do in the previous sections and, by taking into account that I have very little basic knowledge of HTML and CSS with the fact that the last time I programmed in JavaScript was during my high school senior year, I think it was very challenging to put everything to make the game work correctly in both logic and design. Also, this was my first time using audioContext in JavaScript, therefore I found it harder than I thought it would be, considering that I had basic knowledge on how to apply logic on my code but in another programming language. I was able to overcome this challenge by doing some research about how audioContext works on JavaScript, and once I found the information I needed, I was able to sketch a diagram and trace my code to make sure the game works correctly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    The main concern I have after I submitted my prework assignment is that I do not know how to connect my JavaScript code with my HTML file. This is given that I tried to work on the optional feature of giving the player 3 strikes and I was able to make the JavaScript code work, however I couldn???t display it on the game screen, even though I made some research on how to do it. Therefore, I am wondering if we are going to learn how to link files of different languages since I think it is an essential aspect of web development.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
    
    If I had more time to work on this project, I would spend them on refining the game by making the code I wrote more efficient. Also, I would spend time adding more features given that this game, in my opinion, still lacking some basic elements. Some of the features I have been thinking on adding to this game if I had more time are:
    * Adding a timer for the player to guess
    * Giving the user multiple attempts to guess a pattern
    * Creating multiple levels where the time for the player to guess is shorter, the pattern is longer and plays faster, and the number of buttons increases with the level
    * Adding a multiplayer mode


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/dad957bd66d8411db352f7dfd91fa82b?sharedAppSource=personal_library)


## License

    Copyright Miguel Wu Liang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
