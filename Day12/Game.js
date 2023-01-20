
  const questions = [
    {
        question: "What is the duration of the code streak?",
        answers: {
            a: "10 days",
            b: "20 days",
            c: "30 days"
        },
        correctAnswer: "b"
    },
    {
        question: "This Quiz is made by using?",
        answers: {
            a: "HTML, CSS",
            b: "JavaScript",
            c: "All of above"
            
        },
        correctAnswer: "c"
    },
    {
        question: "What is the full form of CSS?",
        answers: {
            a: "Cascading style sheets",
            b: "Changed style sheet",
            c: "Cascading style scripts"
            
        },
        correctAnswer: "a"
    }

    
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    // get the current question
    const currentQuestion = questions[currentQuestionIndex];
    // update the question text
    const questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestion.question;
    // clear any existing answer choices
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";
    // display the answer choices
    for (const key in currentQuestion.answers) {
        const answer = currentQuestion.answers[key];
        const button = document.createElement("button");
        button.type = "button";
        button.value = key;
        button.textContent = answer;
        button.addEventListener("click", selectAnswer);
        answersElement.appendChild(button);
    }
}

function selectAnswer(event) {
    // get the selected answer
    const selectedAnswer = event.target.value;
    // check if it is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
    // move on to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        displayResult();
    } else {
        displayQuestion();
    }
}

function displayResult() {
    // show the final score
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

// start the quiz
displayQuestion();