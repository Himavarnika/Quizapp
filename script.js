const questions = [
    {
        question: "What does HTTP stand for?",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "HighText Transfer Protocol", correct: false },
            { text: "HyperText Transmission Protocol", correct: false },
            { text: "Hyper Transfer Text Protocol", correct: false }
        ]
    },
    {
        question: "Who developed the theory of general relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1942", correct: false },
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "Which part of the cell is responsible for energy production?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Endoplasmic Reticulum", correct: false }
        ]
    },
    {
        question: "Which programming language is primarily used for statistical computing?",
        answers: [
            { text: "Python", correct: false },
            { text: "R", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "What is the Heisenberg Uncertainty Principle related to?",
        answers: [
            { text: "Thermodynamics", correct: false },
            { text: "Relativity", correct: false },
            { text: "Quantum Mechanics", correct: true },
            { text: "Classical Mechanics", correct: false }
        ]
    },
    {
        question: "Which ancient civilization built Machu Picchu?",
        answers: [
            { text: "Aztecs", correct: false },
            { text: "Mayans", correct: false },
            { text: "Incas", correct: true },
            { text: "Olmecs", correct: false }
        ]
    },
    {
        question: "What is the main component of natural gas?",
        answers: [
            { text: "Carbon Monoxide", correct: false },
            { text: "Methane", correct: true },
            { text: "Propane", correct: false },
            { text: "Butane", correct: false }
        ]
    },
    {
        question: "Which sorting algorithm has the best average-case time complexity?",
        answers: [
            { text: "Bubble Sort", correct: false },
            { text: "Merge Sort", correct: true },
            { text: "Selection Sort", correct: false },
            { text: "Insertion Sort", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons as of 2024?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Neptune", correct: false }
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;
     currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer);
     });
}
function resetState(){
    nextButton.style.display= "none";
 // Remove all existing answer options before showing the next question
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct=== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // Show correct answers and disable all options
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextButton.style.display= "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML= "play Again";
    nextButton.style.display= "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();




