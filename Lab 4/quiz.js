// Prompt Quizzer – A Quiz Game

const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What does CSS stand for?", answer: "cascading style sheets" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "What does AWS stand for?", answer: "amazon web services" },
    { question: "Which company owns Android?", answer: "google" }
];

function runQuiz() {
    let score = 0; 
    
    for (let i = 0; i < quizQuestions.length; i++) {  
        let userInput = prompt(quizQuestions[i].question);  
        if (userInput === null) {  
            alert("You cancelled the quiz!");
            return;
        }

        let cleanInput = userInput.toLowerCase().trim();
        
        if (cleanInput === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");  // Step 8
        } else {
            alert("Incorrect! The right answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

runQuiz();
