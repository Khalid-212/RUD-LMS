import React from "react";
import { useSelector } from "react-redux";
import CourseBanner from "../../../Components/CourseBanner/CourseBanner";
import Header from "../../../Components/Header/Header";

function SiraPage() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  return (
    <div className="SiraPage">
      <Header username={username ? username : ""} />
      <CourseBanner
        courseprogress="68"
        courseModule="Rehikel Mekhtum"
        courseName="Sira"
      />
    </div>
  );
}

export default SiraPage;
