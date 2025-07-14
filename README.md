# Quiz_Master
## Date:
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Quiz Master</title>
</head>
<body>
    <div class="container">
        <h1>Quiz Master</h1>
        <div class="quiz">
            <p>Who is the 7<sup>th</sup> member to join Straw Hats?</p>
            <input type="text" placeholder="Your answer....">
            <p>What is the age of Sabo, the Chief-of-Staff of the Revolutionary Army?</p>
            <input type="text" placeholder="Your answer....">
            <p>What is the family name of Killua?</p>
            <input type="text" placeholder="Your answer...."><br>
            <button onclick="strictEval()">Strict Score</button>
            <button onclick="lenientEval()">Lenient Score</button>
            <p id="score" style="text-align: center;"></p>
        </div>
    </div>
</body>
</html>
```
## CSS Code:
```css
body{
    margin: 0;
    background-color: rgb(240, 48, 48);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    box-sizing: border-box;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1{
    margin-top: -10px;
    text-align: center;
}

.container{
    background-color: rgba(63, 62, 62, 0.921);
    flex-wrap: wrap;
    padding: 40px;
    width:30%;
    box-shadow: 2px 4px 10px rgba(50, 46, 38, 0.8);
    border-radius: 10px;
    font-weight: 700;
}

button{
    color: rgb(255, 255, 255);
    margin-top: 5%;
    padding: 1%;
    border: none;
    border-radius: 5px;
    background-color: #000000;
    width:49%;
    font-size: medium;
    font-weight: 600;
}

button:hover{
    background-color: #1dbc22;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}

input{
    font-weight: 600;
    padding: 2%;
    width:90%;
    border: none;
    border-radius: 5px;
}
```
## JavaScript Code:
```js
const correctAnswers = ["nico robin", "22", "zoldyck"];

function calculateScore(checkFn) {
    const input1 = document.querySelectorAll("input")[0].value.trim().toLowerCase();
    const input2 = document.querySelectorAll("input")[1].value.trim().toLowerCase();
    const input3 = document.querySelectorAll("input")[2].value.trim().toLowerCase();
    let score = 0;
    score += checkFn(input1, correctAnswers[0], 1);
    score += checkFn(input2, correctAnswers[1], 2);
    score += checkFn(input3, correctAnswers[2], 3);

    document.getElementById("score").textContent = "Score: " + score + "/3";
}

function strictEval() {
    calculateScore((user, correct, qNum) => {
        if (user === correct) {
        return 1;
        } else {
        return 0;
        }
    });
}

function lenientEval() {
    calculateScore((user, correct, qNum) => {
        if (qNum === 2) {
            if (user === correct) {
                return 1;
            } else if (user > 20) {
                return 0.5;
            } else {
                return 0;
            }
        }
        else {
            if (user === correct) {
                return 1;
            } else if (user.startsWith(correct.slice(0, 2))) {
                return 0.5;
            } else {
                return 0;
            }
        }
    });
}

```
## Output:
<img width="1157" height="758" alt="image" src="https://github.com/user-attachments/assets/6ec8068d-0282-4d9e-badb-f9707c34a466" />

## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
