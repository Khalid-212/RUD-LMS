import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseBanner from "../../Components/CourseBanner/CourseBanner";
import Header from "../../Components/Header/Header";
import { getCourse, getCourseForStudent } from "../../supabase";

function CoursePage() {
  const [course, setCourse] = useState(false);
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  const courseId = JSON.parse(
    JSON.stringify(useSelector((state) => state.course).usercourse.id)
  );
  const getcourse = async () => {
    setCourse(
      await getCourseForStudent("d9f13901-7b56-4117-950e-4d3e9c393538")
    );
  };
  useEffect(() => {
    getcourse();
    console.log(course);
  }, []);

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

export default CoursePage;
