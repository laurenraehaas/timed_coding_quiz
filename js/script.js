const counter = document.getElementById("timer");
const startQuiz = document.getElementById("start-quiz");
const starterPage = document.getElementById("starter-page")
const questionsEl = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesEl = document.getElementById("choices")
const buttonEl = document.getElementById("submit");
const endscreenEL = document.getElementById("end-screen")
const scoreEl = document.getElementById("final-score")

let questionIndex = 0;
let score = 0;
let time = 0;

const endQuiz = () => {
    questionsEl.setAttribute("class", "hide");
    scoreEl.textContent = score;
    endscreenEL.setAttribute("class", "visible")
}

const startTimer = () => {
    time = 1000 * 6
    let countDown = setInterval(() => {
        if(time > 0) {
            counter.textContent = time;
            time--
        } else {
            counter.textContent = "--"
           // endQuiz()
            clearInterval(countDown)
        }
    },1000)
}

const startQuestions = () => {
    questionsEl.setAttribute("class", "visible")
    questionTitle.textContent = questions[questionIndex].question;
    choicesEl.innerHTML = "";
    let answers = questions[questionIndex].options;
    for(let i = 0; i < questions.length; i++) {
        console.log(questions.length)
        //let answers = questions[questionIndex].options;
        //console.log(answers[i]);
        var button = document.createElement("submit");
        //var choiceButton = document.createElement();
       // button.textContent = answers;
        button.setAttribute("class", "answers");
        button.setAttribute("value", questions[questionIndex].answer);
        button.textContent = i + 1 + " " + answers[i];
        //console.log(answers[i]);
        choicesEl.appendChild(button);
    }
}

choicesHandler = (event) => {
    let choice = event.target;
    console.log(choice)
    let choiceData = choice.getAttribute("value");
    console.log(choiceData)
    let answer = questions[questionIndex].answer
    if(answer === choiceData) {
        console.log(answer + choiceData);
        score +=10;
    } else {
        console.log("wrong");
        time -=10;
    }
    if(questionIndex === (questions.length - 1)) {
        time = 0
        endQuiz()
    } else {
        questionIndex++
        startQuestions()
    }
}
//const startQuestions = () => {
  //  questionsEl.setAttribute("class", "visible")
    //questionTitle.textContent = questions[questionIndex].question;
    //choicesEl.innerHTML = "";
    //let answers = questions[questionIndex].options;
    //for(let i = 0; i < questions.length; i++) {
        //console.log(answers[i]);
        
      //  let answers = questions[questionIndex].options;

        //var button = document.createElement("submit");
        //var choiceButton = document.createElement();

        //button.textContent = answers;
        //button.setAttribute("class", "answers");
        //button.setAttribute("value", answers);
        //button.textContent = i + " " + answers[i];
        //console.log(answers[i]);
        //choicesEl.appendChild(button);
    //}
//}


const startHandler = () => {
    startTimer()
    starterPage.setAttribute("class", "hide");
    startQuestions();
};

startQuiz.addEventListener("click", startHandler);
choicesEl.addEventListener("click", choicesHandler)
