import React, { useState } from "react";

const Question = ({ question,number, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="grid h-auto card bg-base-300 rounded-box px-12 m-3">
      <h3 className="mt-5">{number} - {question}</h3>
      <form>
     
        {options.map((option, index) => (
          <label className="flex flex-row ml-2 my-5" key={index} htmlFor={`option-${index}`}>
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
