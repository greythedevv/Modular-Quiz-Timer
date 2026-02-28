const quizData = [
    {
        question:"what does DOM stands for in javascript?",
        Options:[
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Data Oriented Model"
        ],
        correct: 0
    },

    {
        question:"what method is used to get an element by its ID?",
        Options:[
            "getElementById",
            "getElementsByClassName",
            "getElementsByTagName",
            "querySelector"
        ],
        correct: 0
    },

     {
        question:"which event fires on input change?",
        Options:[
            "onchange",
            "onclick",
            "oninput",
            "onsubmit"
        ],
        correct: 2
    }
]

let questions = [...quizData].sort(() => Math.random() - 0.5)
let currentQuestion = 0
let score = 0
let timer;
let timeLeft;

const questionElement = document.getElementById("Question")
const optionsElement = document.getElementById("options")
const submitButton = document.getElementById("next-btn")
const resultElement = document.getElementById("result")
const timerElement = document.getElementById("timer")

function loadQuestion(){
    clearInterval(timer)
    timeLeft = 15
    updateTimer()
    // timerElement.textContent = `🕛 ${timeLeft}`
    timer = setInterval(countdown, 1000)
let q = questions[currentQuestion]
questionElement.textContent = `Q${currentQuestion + 1}.${q.question}`
optionsElement.innerHTML= ""
q.Options.forEach((option, index)=>{
    let btn = document.createElement("button")
    btn.classList.add("option-btn")
    btn.textContent = option
    btn.addEventListener("click",()=>{ selectAnswer(index , true)
    
    })
    optionsElement.appendChild(btn)
   submitButton.style.display ="none"
});

function countdown(){
        timeLeft--
        updateTimer()
        if(timeLeft === 0){
            clearInterval(timer)
            selectAnswer(questions[currentQuestion]?.correct, false )
}
    }
    function updateTimer(){
        timerElement.textContent = `🕛 ${timeLeft}`
    }

function selectAnswer(index, shouldScore){
    clearInterval(timer)
    const q= questions[currentQuestion]
    const buttons = document.querySelectorAll(".option-btn")
    buttons.forEach(btn => btn.disabled = true)
    if(index=== q.correct){
       shouldScore && score++
        buttons[index].classList.add("correct")
    } else { buttons[index].classList.add("wrong")
        buttons[q.correct].classList.add("correct")
    }
    submitButton.style.display ="inline-block"
    }

    

}
submitButton.addEventListener("click", ()=>{
    currentQuestion++
    if(currentQuestion  < questions.length){
        loadQuestion()
        
    } else{
        showResult()
    }} )


function showResult(){
    submitButton.style.display ="none"
    const highScore = localStorage.getItem("highScore") || 0

    const isNew = score > highScore

    if(isNew){
        localStorage.setItem("highScore", score)
    }
    resultElement.innerHTML = `<h2> hurray!!! Quiz Completed</h2>
    <p>You have scored ${score} out of ${questions.length} questions</p>
    <p>highScore: ${Math.max(score, highScore)}</p>
     <p>${isNew ? "Congratulations! You have a new high score!" : "Try again to beat the high score!"}</p>
     <button class="restart-btn" onclick= "restartQuiz()">Restart Quiz</button>`

    

}

function restartQuiz(){
    currentQuestion = 0
    score = 0
    resultElement.innerHTML = ""
    loadQuestion()
}
loadQuestion()