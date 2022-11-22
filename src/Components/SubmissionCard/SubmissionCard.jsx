import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./SubmissionCard.css";
import { studenttoreview } from "../../adminSlice";

function SubmissionCard({ name, Submissiondate, number, val }) {
  const date = Submissiondate?.slice(0, 10);
  const dispatch = useDispatch();
  const cardclick = (val) => {
    const currentstudent = val;
    dispatch(studenttoreview(currentstudent));
  };
  return (
    <>
      <Link to="/admin/manage/evaluation" onClick={() => cardclick(val)}>
        <div className="submissioncard">
          <div className="studentname">
            <p>{name ? name : ""}</p>
          </div>
          {/* <div className="coursename">
        <p>Sira</p>
      </div> */}
          <div className="submissiondate">
            <p>{date}</p>
          </div>
          <div className="assignmentnumber">
            <p>{"Assignment " + number}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SubmissionCard;
