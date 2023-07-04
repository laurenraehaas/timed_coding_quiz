const counter = document.getElementById("timer");
const startQuiz = document.getElementById("start-quiz");
const starterPage = document.getElementById("starter-page")
const questionsEl = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesEl = document.getElementById("choices")
const buttonEl = document.getElementById("button");

let questionIndex = 0;

const startTimer = () => {
    let time = 1000 * 6
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
    //let answers = questions[questionIndex].options;
    for(let i = 0; i < questions.length; i++) {
        let answers = questions[questionIndex].options;
        //console.log(answers[i]);
        
        var button = document.createElement("submit");
        //var choiceButton = document.createElement();

        button.textContent = answers;
        buttonEl.setAttribute("class", "answers");
        buttonEl.setAttribute("value", answers);
        buttonEl.textContent = i + " " + answers[i];
        console.log(answers[i]);
        choicesEl.appendChild(buttonEl);
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

