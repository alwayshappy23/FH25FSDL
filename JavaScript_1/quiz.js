const quiz = new Map([
    ['What is 2 + 2?', '4'],
    ['What is the capital of France?', 'Paris'],
  ]);
  
  const users = new Set();
  
  function takeQuiz(user, answers) {
    users.add(user);
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === [...quiz.values()][index]) score++;
    });
    console.log(`${user} scored ${score}/${quiz.size}`);
  }
  
  takeQuiz('Alice', ['4', 'Paris']);
  takeQuiz('Bob', ['5', 'London']);
  console.log(`Unique users: ${[...users].join(', ')}`);