import React from "react";
import { useSelector } from "react-redux";
import CourseBanner from "../../../Components/CourseBanner/CourseBanner";
import Header from "../../../Components/Header/Header";

function HadisPage() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  return (
    <div>
      <Header username={username} />
      <CourseBanner
        courseprogress="77"
        courseModule="40 Hadis"
        courseName="Hadis"
      />
    </div>
  );
}

export default HadisPage;
