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
  console.log(courseId);
  const currentCourse = async () => {
    setCourse(await getCourse(courseId));
  };
  useEffect(() => {
    if (!course) {
      currentCourse();
    }
    // currentCourse();
  }, [course]);
  console.log(course ? course : "no course");

  return (
    <div>
      <Header username={username} />
      <CourseBanner
        courseprogress={course && course[0].name}
        courseModule={course && course[0].courseModule}
        courseName={course && course[0].name}
      />
    </div>
  );
}

export default CoursePage;
