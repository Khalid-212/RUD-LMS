import React from "react";
import { useDispatch } from "react-redux";
import "./AssignmentReportCard.css";
import { userassignment } from "../../assignmentSlice";
import { Link } from "react-router-dom";

function AssignmentReportCard({ onClick, name, question }) {
  const selectedAssignmnet = (selected) => {
    const dispatch = useDispatch();
    dispatch(userassignment(selected));
  };

  return (
    <>
      <div onClick={onClick}>
        <div className="StudentCard" onClick={selectedAssignmnet(question)}>
          <div className="StudentName">{name}</div>
        </div>
      </div>
    </>
  );
}

export default AssignmentReportCard;
