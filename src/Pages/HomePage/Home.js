import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Header from "../../Components/Header/Header";
import "./Home.css";
import { getCourse, getCourseForStudent } from "../../supabase";
import { usercourse } from "../../courseSlice";
import { SyncLoader } from "react-spinners";

function Home() {
  const username = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.username)
  );
  const [courses, setCourses] = useState(false);
  const dispatch = useDispatch();
  const uid = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const getstudentcourselist = async () => {
    const courseRelations = await getCourseForStudent(uid);
    const courses = await Promise.all(
      courseRelations.map(async (relation) => {
        const data = await getCourse(relation.CourseId);
        return { relation, course: data[0] };
      })
    );
    setCourses(courses);
  };

  useEffect(() => {
    getstudentcourselist();
  }, []);
  const selectedCourse = (selected, progress) => {
    dispatch(
      usercourse({
        id: selected,
        progress: progress,
      })
    );
  };

  return (
    <div>
      <Header username={username ? username : ""} />
      <div className="courseList">
        {courses ? (
          courses.map((course) => (
            <Link
              onClick={() =>
                selectedCourse(
                  course.relation.CourseId,
                  course.relation.courseProgress
                )
              }
              to={"/coursepage"}
              style={{ textDecoration: "none" }}
              key={course.relation.CourseId}
            >
              <CourseCard
                styling="courseCard"
                color="blue"
                title={course.course.name}
                progress={course.relation.courseProgress}
              />
            </Link>
          ))
        ) : (
          <SyncLoader color="#1e9fe9" />
        )}
        <Link to="/form" className="formlink">
          Rewatib Form
        </Link>
      </div>
    </div>
  );
}

export default Home;