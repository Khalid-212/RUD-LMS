import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import Tabs from "../../Components/Tabs/Tabs";
import {
  getAssignmentById,
  getQuestionById,
  getStudentById,
  updateCorrectAnswer,
} from "../../supabase";
import "./EvaluationPage.css";
import AssignmentStatusCard from "../../Components/AssignmentStatusCard/AssignmentStatusCard";

function EvaluationPage() {
  const [student, setStudent] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [questions, setQuestions] = useState([]);
  const studentId = useSelector((state) => state.adminstat).studenttoreview;
  const getStudent = async () => {
    setStudent(await getStudentById(studentId));
    setAssignments(await getAssignmentById(studentId));
  };

  useEffect(() => {
    getStudent();
  }, []);

  // console.log(assignments ? assignments[0].Question : "question");

  const getQuestion = async () => {
    for (let i = 0; i < assignments.length; i++) {
      await getQuestionById(assignments[i].Question).then((data) => {
        setQuestions((prev) => [...prev, data]);
      });
    }
  };

  // if (assignments) {
  useEffect(() => {
    getQuestion();
  }, [assignments]);
  // }

  // console.log(questions);
  const clicked = async (prop) => {
    await updateCorrectAnswer(prop);
  };
  return (
    <div>
      <HeaderAdmin />
      <Tabs />
      {/* <div className="evaluationPageHeader">
        <div className="evaluationPageHeaderLeft">
          <img src={useravatar} alt="" className="Studentprofilepic" />
          <h1>{student.firstName + " " + student.lastName}</h1>
        </div>
        <div className="evaluationPageHeaderRight">
          <div className="courseProgress">
            <p>Sira</p>
            <progress value={70} max="100" />
          </div>
          <div className="courseProgress">
            <p>Hadis</p>
            <progress value={50} max="100" />
          </div>
          <div className="courseProgress">
            <p>Quran</p>
            <progress value={84} max="100" />
          </div>
        </div>
      </div> */}
      {assignments
        ? assignments.map((assignment, index) => (
            <div>
              <br />
              <br />
              <div className="assignmentQuestion" key={assignment.id}>
                <h3>
                  Question number{" "}
                  {questions[index] ? questions[index][0].number : ""}
                </h3>
                {questions[index] ? questions[index][0].Question : ""}
              </div>
              <div className="assignmentAnswer">
                <h3>Answer</h3>
                <p>{assignment.Answer}</p>
                <div className="buttons">
                  <button
                    onClick={() => {
                      clicked("5f3f379c-6f25-4404-8026-32e0c3ce98e9", "true");
                    }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      clicked(
                        "a1294818-c0d2-4007-8cba-0886d78bda49",
                        "a1294818-c0d2-4007-8cba-0886d78bda49"
                      );
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default EvaluationPage;
