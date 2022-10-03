import React from "react";
import "./CourseCard.css";

function CourseCard({ title, progress, styling, color }) {
  return (
    <div className={color}>
      <div className={styling}>
        <h1>{title}</h1>
        <progress value={progress} max="100" />
      </div>
    </div>
  );
}

export default CourseCard;
