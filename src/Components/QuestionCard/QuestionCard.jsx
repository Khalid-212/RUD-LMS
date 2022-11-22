import React from "react";
import "./QuestionCard.css";

function QuestionCard({ Questionnumber, QuestionBody }) {
  return (
    <div className="questionCard">
      <div className="questionWrapper">
        <div className="questionNumber">{Questionnumber + ","}</div>
        <div className="questionBody">{QuestionBody}</div>
      </div>
    </div>
  );
}

export default QuestionCard;
