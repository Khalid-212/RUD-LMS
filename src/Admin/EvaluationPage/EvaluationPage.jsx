import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import Tabs from "../../Components/Tabs/Tabs";
import {
  getAssignmentById,
  getQuestionById,
  getRewatibByStudentId,
  getRewatiDataByDateAndStudentId,
  getStudentById,
  updateCorrectAnswer,
} from "../../supabase";
import "./EvaluationPage.css";
import AssignmentStatusCard from "../../Components/AssignmentStatusCard/AssignmentStatusCard";
import { act } from "react-dom/test-utils";
import ReportTable from "../../Components/ReportTable/ReportTable";

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

  const getQuestion = async () => {
    for (let i = 0; i < assignments.length; i++) {
      await getQuestionById(assignments[i].Question).then((data) => {
        setQuestions((prev) => [...prev, data]);
      });
    }
  };

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [selectedDate, setSelectedDate] = useState(date);
  const [rewatib, setrewatib] = useState([]);

  const RewatibData = async () => {
    await getRewatiDataByDateAndStudentId(selectedDate, studentId).then(
      (data) => {
        console.log(data);
        setrewatib(data);
      }
    );
  };

  const tilawa = rewatib.map((rewatib) => rewatib.tilawa).toString();
  const Selat = rewatib.map((rewatib) => rewatib.selatinjemaa).toString();
  const fasting = rewatib.map((rewatib) => rewatib.fasting).toString();
  const SunnahSelat = rewatib.map((rewatib) => rewatib.SunnahSelat).toString();
  const witr = rewatib.map((rewatib) => rewatib.witr).toString();
  const Azkar = rewatib.map((rewatib) => rewatib.Azkar).toString();

  if (tilawa === "5-6 days") {
    console.log("70%");
  } else if (tilawa === "3-4 days") {
    console.log("50%");
  } else if (tilawa === "1-2 days") {
    console.log("30%");
  } else if (tilawa === "0 days") {
    console.log("0%");
  }

  useEffect(() => {
    getQuestion();
  }, [assignments]);
  useEffect(() => {
    RewatibData();
  }, [selectedDate]);

  const clicked = async (id, correct, student) => {
    await updateCorrectAnswer(id, correct, student);
  };

  const [page, setPage] = useState("rewatibPage");

  const ActivePage = (page) => {
    if (page === "rewatibPage") {
      setPage("rewatibPage");
    } else if (page === "assignmentPage") {
      setPage("assignmentPage");
    }
  };

  // console.log(rewatib);
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

      <div className="evaluationPageTabs">
        <div onClick={() => ActivePage("rewatibPage")}>Rewatib</div>
        <div onClick={() => ActivePage("assignmentPage")}>Assignment</div>
        <div>
          <span>pick a date</span>
          <input
            className="datePicker"
            type="date"
            name=""
            id=""
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>
      {page === "assignmentPage" ? (
        <div>
          {assignments ? (
            assignments.map((assignment, index) => (
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
                        clicked(
                          assignments[index].Question,
                          "accepted",
                          assignments[index].StudentId
                        );
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => {
                        clicked(
                          assignments[index].Question,
                          "rejected",
                          assignments[index].StudentId
                        );
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      ) : (
        <div>
          <div>
            <div className="studentReport">
              <div>{"tilawa " + tilawa}</div>
              <div>{"Selat " + Selat}</div>
              <div>{"fasting " + fasting}</div>
              <div>{"SunnahSelat " + SunnahSelat}</div>
              <div>{"witr " + witr}</div>
              <div>{"Azkar " + Azkar}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EvaluationPage;
