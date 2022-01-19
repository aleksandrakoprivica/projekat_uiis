const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'U kom filmu od ponudjenih glavnu ulogu tumaci Tom Hanks?',
    answers: [
      { text: 'The Green Mile', correct: true },
      { text: 'The Lord of Rings', correct: false }
      
    ]
  },
  {
    question: 'Fakultet tehnickih nauka se nalazi u...',
    answers: [
      { text: 'Nisu', correct: false },
      { text: 'Kragujevcu', correct: false },
      { text: 'Novom Sadu', correct: true },
      { text: 'Zrenjaninu', correct: false }
    ]
  },
  {
    question: 'Neuredjena lista u HTMLu se oznacava sa:',
    answers: [
      { text: '<nl></nl>', correct: false },
      { text: '<ul></ul>', correct: true },
      { text: '<ol></ol>', correct: false },
      { text: 'nista od navedenog', correct: false }
    ]
  },
  {
    question: 'Kada pocinje jesen?',
    answers: [
      { text: '23.09.', correct: true },
      { text: '21.10.', correct: false }
    ]
  }
]