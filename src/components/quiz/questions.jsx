
  export default function Question({ question, onAnswer, selectedOption }) {
    return (
      <div className="question-card">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">{question.text}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={`option-button ${
                selectedOption === index ? 'border-primary bg-primary-light' : 'border-gray-200'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  }