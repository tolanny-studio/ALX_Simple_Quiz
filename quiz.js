function checkAnswer() {
  // initiating a feedback
  const feedback = document.querySelector('#feedback')
  // identifying correct answer
  let correctAnswer = "4"
  // retrieve user's answer
  const answer = document.querySelector('input[name="quiz"]:checked')

  const userAnswer = answer.value

  // compare user's answer with the correct answer
  
  if(userAnswer === correctAnswer){
    feedback.textContent = "Correct! Well done."
  }else{
    feedback.textContent = "That's incorrect. Try again!"
  }

}

//add event listener to submit button

const button = document.getElementById('submit-answer')

button.addEventListener('click',checkAnswer)




