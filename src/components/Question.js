import React, { useState } from "react";

const Question = ({ question,number, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <h3>{number} - {question}</h3>
      <form>
        {options.map((option, index) => (
          <label className="ml-2 mb-3" key={index} htmlFor={`option-${index}`}>
            <input
              className="mr-4"
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Question;
