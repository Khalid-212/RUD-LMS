import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { studenttoreview } from "../../adminSlice";
import "./AssignmentReportCardStudent.css";

function AssignmentReportCardStudent({ name, val }) {
  const dispatch = useDispatch();
  const cardclick = (val) => {
    const currentstudent = JSON.parse(JSON.stringify(val.val));
    dispatch(studenttoreview(currentstudent));
  };
  return (
    <div>
      <Link to="/admin/manage/evaluation">
        <div
          className="AssignmentReportCardStudent"
          onClick={() => cardclick({ val })}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

export default AssignmentReportCardStudent;
