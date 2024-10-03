import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../../data/questions';
import Question from './questions';
import ProgressBar from './progressBar';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const handleAnswer = (optionIndex) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: optionIndex
    };
    setAnswers(newAnswers);
    
    // If last question, calculate result and navigate
    if (currentQuestion === questions.length - 1) {
      const result = calculateResult(newAnswers);
      navigate('/result', { state: { result } });
    } else {
      // Move to next question
      setCurrentQuestion(prev => prev + 1);
    }
  };
  
  const calculateResult = (answers) => {
    const scores = {
      shailputri: 0,
      brahmacharini: 0,
      chandraghanta: 0,
      kushmanda: 0,
      skandamata: 0,
      katyayani: 0,
      kaalratri: 0,
      mahagauri: 0,
      siddhidatri: 0
    };
    
    // Calculate scores for each form
    Object.entries(answers).forEach(([questionIndex, answerIndex]) => {
      const weights = questions[questionIndex].options[answerIndex].weights;
      Object.entries(weights).forEach(([form, weight]) => {
        scores[form] += weight;
      });
    });
    
    // Find highest scoring form
    let maxScore = 0;
    let resultForm = '';
    Object.entries(scores).forEach(([form, score]) => {
      if (score > maxScore) {
        maxScore = score;
        resultForm = form;
      }
    });
    
    return {
      form: resultForm,
      scores
    };
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-secondary-light to-white py-8 pt-40">
      <div className="nav-durga-container">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar 
            current={currentQuestion + 1} 
            total={questions.length} 
          />
          <p className="text-center mt-2 text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        
        {/* Question */}
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          selectedOption={answers[currentQuestion]}
        />
      </div>
    </div>
  );
}