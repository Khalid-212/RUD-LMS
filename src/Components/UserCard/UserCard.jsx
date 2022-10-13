import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { studenttoreview } from "../../adminSlice";
import studentPicture from "../../Assets/user.svg";
import "./UserCard.css";

function UserCard({ studentName, val }) {
  const dispatch = useDispatch();
  const cardclick = (val) => {
    const currentstudent = JSON.parse(JSON.stringify(val.val));
    dispatch(studenttoreview(currentstudent));
  };
  return (
    <>
      <Link to="/admin/manage/evaluation">
        <div className="usercard" onClick={() => cardclick({ val })}>
          <img src={studentPicture} alt="" className="userPicture" />
          <p>{studentName}</p>
          {/* <p>ffe</p> */}
        </div>
      </Link>
    </>
  );
}

export default UserCard;
