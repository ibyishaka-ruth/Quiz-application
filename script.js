const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    },
    {
        question:"who is the president of rwanda ?",
        options: ["kagame","tshisekedi", "Barthazar"],
        answer: 1
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });

        nextButton.style.display = "none"; 
    } else {
        questionElement.textContent = "Quiz completed!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none"; // Hide next button
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById("next-button");

    if (selectedIndex === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer. The correct answer was: " + currentQuestion.options[currentQuestion.answer]);
    }

    currentQuestionIndex++;
    nextButton.style.display = "block"; 
}

document.getElementById("next-button").onclick = () => {
    loadQuestion();
};

loadQuestion(); // Load the first question
