import React from "react";
import { useSelector } from "react-redux";
import CourseBanner from "../../../Components/CourseBanner/CourseBanner";
import Header from "../../../Components/Header/Header";

function QuranPage() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  return (
    <div>
      <Header username={username ? username : ""} />
      <CourseBanner
        courseModule="Al-Quran"
        courseName="Quran"
        courseprogress="57"
      />
    </div>
  );
}

export default QuranPage;
