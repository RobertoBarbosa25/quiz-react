import React, { useState } from 'react';

const Quiz = () => {
  // Definimos um array de objetos que representam cada pergunta opçoes e resposta
  const questions = [
    {
      question: 'Qual nome do professor de FrontEnd?', 
      answers: ['Kelson', 'Iverson', 'Lucas', 'Roberto'],
      correctAnswer: 'Kelson',
    },
    {
      question: 'Quantos titulos mundiais tem a seleção brasileira?',
      answers: ['Dois', 'Nove', 'Quatro', 'Cinco'],
      correctAnswer: 'Cinco',
    },
    {
      question: 'Estamos em qual periodo?',
      answers: ['Primeiro', 'Segundo', 'Terceiro', 'Quarto'],
      correctAnswer: 'Quarto',
    },
  ];

  // usando useState para definir o estado inicial e atualizar o valor inicial
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Função para verificar se a resposta é a correta,
  // se correta a pontuação do usuario é atualizada
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
// aqui temos uma condicional que verifica se a variavel é menor
// que o comprimento do array, se verdadeira a função será executada
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Renderizamos o conteúdo do quiz
  return (
  //condicional para verificar se a variavel é verdadeira, se for verdadeira mostrará
  // a pontuação do usuário e também o numero de perguntas e quantas foram acertadas
    <div>
      <h1>Quiz</h1>
      {showScore ? (
        <div>
          <h2>Você acertou {score} de {questions.length} perguntas.</h2>
        </div>
      ) : (
        <div>
          {/* Essa parte do código renderiza a pergunta e 
          as opções de resposta em botões, que ao serem clicados
           chamam a função handleAnswerOptionClick. */}
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <ul>
              {questions[currentQuestion].answers.map((answerOption, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswerOptionClick(answerOption === questions[currentQuestion].correctAnswer)}>
                    {answerOption}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;