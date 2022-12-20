import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Header from "../../Components/Header/Header";
import "./Home.css";
import {
  fileUpload,
  getAssignments,
  getCourse,
  getCourseForStudent,
  getQuestions,
  getRejectedSubmissions,
} from "../../supabase";
import { usercourse } from "../../courseSlice";
import { SyncLoader, BarLoader } from "react-spinners";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import { userassignment } from "../../assignmentSlice";
import AssignmentCardRejected from "../../Components/AssignmentCard/AssignmentCardRejected";

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

  const [RejectedAssignments, setRejectedAssignments] = useState();

  const rejectedSubmissions = async () => {
    await getRejectedSubmissions(uid).then((data) => {
      setRejectedAssignments(data);
      // console.log(data);
    });
  };

  useEffect(() => {
    getstudentcourselist();
    rejectedSubmissions();
  }, []);
  const selectedCourse = (selected, progress) => {
    dispatch(
      usercourse({
        id: selected,
        progress: progress,
      })
    );
  };
  const selectedAssignmnet = (selected) => {
    dispatch(userassignment(selected));
  };
  const [questions, setQuestions] = useState();
  const getQuestionList = async () => {
    setQuestions(await getQuestions());
  };

  useEffect(() => {
    getQuestionList();
  }, []);
  // console.log(courses);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);
    fileUpload(username, formData).then((data) => {
      console.log(data);
    });
  };
  const notify = () => {
    Notification.requestPermission().then((result) => {
      console.log(result);
      if (result === "granted") {
        new Notification("Notification", {
          body: "Your file has been uploaded",
        });
      }
    });
  };
  return (
    <div>
      <Header username={username ? username : ""} />
      <div className="courseList">
        {/* {courses ? (
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
        )} */}
        <Link to="/form" className="formlink">
          Rewatib Form
        </Link>
      </div>
      {/* <Link to="/assignmentsubmissionpage">
          Assignments
        </Link> */}

      <div className="rejectedSubmisssions">
        <h1 className="rejected_submission">
          {rejectedSubmissions.length} Rejected Submissions
        </h1>
        <div className="assignmentList">
          {RejectedAssignments ? (
            RejectedAssignments.map((assignment) => (
              <Link
                to="/assignmentresubmissionpage"
                onClick={() => selectedAssignmnet(assignment.Question)}
                style={{ textDecoration: "none" }}
                key={assignment.id}
              >
                <AssignmentCardRejected number={assignment.id} />
              </Link>
            ))
          ) : (
            <SyncLoader />
          )}
        </div>
      </div>
      <div className="assignmentList">
        {questions ? (
          questions.map((question) => (
            <Link
              to="/assignmentsubmissionpage"
              onClick={() => selectedAssignmnet(question.id)}
              style={{ textDecoration: "none" }}
              key={question.id}
            >
              <AssignmentCard number={question.number} />
            </Link>
          ))
        ) : (
          <SyncLoader />
        )}
      </div>
      {/* <div className="fileUpload">
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div> */}
      <button onClick={() => notify()}>notification</button>
    </div>
  );
}

export default Home;
