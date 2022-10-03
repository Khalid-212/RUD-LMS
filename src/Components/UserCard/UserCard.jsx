import React from "react";
import studentPicture from "../../Assets/user.svg";
import "./UserCard.css";

function UserCard({ studentName }) {
  return (
    <div className="usercard">
      <img src={studentPicture} alt="" className="userPicture" />
      <p>{studentName}</p>
      {/* <p>ffe</p> */}
    </div>
  );
}

export default UserCard;
