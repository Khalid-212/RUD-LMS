import React from "react";
import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard({ Questionnumber, QuestionBody }) {
  return (
    <>
      <div className="questionCard">
        <Link to="/admin/Assignmentreport" style={{ textDecoration: "none",color:"#1e9fe9" }}>
          <div className="questionWrapper">
            <div className="questionNumber">{Questionnumber + ","}</div>
            <div className="questionBody">{QuestionBody}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default QuestionCard;
