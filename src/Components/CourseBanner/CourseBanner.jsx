import React from "react";
import "./CourseBanner.css";

function CourseBanner({ courseName, courseModule, courseprogress }) {
  return (
    <div className="CourseBanner">
      <div className="BannerRight">
        <div className="title">
          <h1>{courseName}</h1>
        </div>
      </div>
      <div className="BannerLeft">
        <div className="CourseModule">
          <h2>{courseModule}</h2>
        </div>
        <div className="progress">
          <progress value={courseprogress} max="100" />
          <h4>{courseprogress}% progress</h4>
        </div>
      </div>
    </div>
  );
}

export default CourseBanner;
