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
