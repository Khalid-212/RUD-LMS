import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import AssignmentReportCard from "../../Components/StudentCard/AssignmentReportCard";
import Tabs from "../../Components/Tabs/Tabs";
import {
  getQuestions,
  getStudentByQuestionId,
  getStudentlist,
} from "../../supabase";
import "./AssignmentReportPage.css";
import { SyncLoader, BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import AssignmentReportCardStudent from "../AssignmentReportCardStudent/AssignmentReportCardStudent";
// import { useSelector } from "react-redux";

function AssignmentReportPage() {
  const adminusername = JSON.parse(
    JSON.stringify(useSelector((state) => state.adminstat).adminstat.username)
  );
  const [studentList, setStudentList] = useState([]);
  const [questions, setQuestions] = useState([]);

  const questionsList = async () => {
    setQuestions(await getQuestions());
  };
  useEffect(() => {
    questionsList();
  }, []);

  // console.log(studentList);

  const [loadingList, setLoadingList] = useState(false);
  const getStudent = async (questionId) => {
    setLoadingList(true);
    await getStudentByQuestionId(questionId)
      .then((data) => {
        // console.log(data);
        setStudentList(data);
      })
      .catch((error) => {
        // console.log(error);
        setStudentList([]);
      })
      .finally(() => setLoadingList(false));
  };
  // }, 100);
  return (
    <div>
      <HeaderAdmin username={adminusername} />
      <Tabs />
      {loadingList ? (
        <div className="totalSubmissions">
          Total number of Submissions {studentList.length}
        </div>
      ) : (
        <div className="totalSubmissions">
          Total number of Submissions {studentList.length}
        </div>
      )}
      <div className="assignmentReportPage">
        <div className="AssignmentReportPageright">
          {/* <div className="AssignmentList"> */}
          {questions ? (
            questions.map((question) => (
              <AssignmentReportCard
                onClick={() => getStudent(question.id)}
                name={question.Question}
                key={question.id}
              />
            ))
          ) : (
            <SyncLoader color="#1e9fe9" />
          )}
          {/* </div> */}
        </div>
        <div className="AssignmentReportPageleft">
          <ul className="StudentList">
            <p>student list</p>
            {loadingList !== true && studentList.length > 0 ? (
              studentList.map((student) => (
                <AssignmentReportCardStudent
                  name={student.StudentName}
                  val={student.StudentId}
                />
              ))
            ) : (
              <div className="center">
                <BeatLoader color="#1e9fe9" />
              </div>
            )}
          </ul>
        </div>
        <div className="AssignmentReport"></div>
      </div>
    </div>
  );
}

export default AssignmentReportPage;
