import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import CourseBanner from "../../Components/CourseBanner/CourseBanner";
import Header from "../../Components/Header/Header";
import { getCourse } from "../../supabase";
import "./CoursePage.css";

function CoursePage() {
  const [course, setCourse] = useState(false);
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  const courseId = JSON.parse(
    JSON.stringify(useSelector((state) => state.course).usercourse.id)
  );
  const courseprogress = JSON.parse(
    JSON.stringify(useSelector((state) => state.course).usercourse.progress)
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
        courseprogress={course && courseprogress}
        courseModule={course && course[0].courseModule}
        courseName={course && course[0].name}
      />
      <div className="assignments">
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
      </div>
    </div>
  );
}

export default CoursePage;
