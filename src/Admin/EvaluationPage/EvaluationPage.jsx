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
        // console.log(data);
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

  const percentage = (prop) => {
    if (prop === "7 days") {
      return 100;
    } else if (prop === "5-6 days") {
      return 80;
    } else if (prop === "3-4 days") {
      return 50;
    } else if (prop === "1-2 days") {
      return 30;
    } else if (prop === "0 days") {
      return 0;
    } else {
      return 0;
    }
  };
  // total percentage of tilawa+selat+fasting+sunnahselat+witr+azkar
  const [totalPercentage1, setTotalPercentage1] = useState([]);
  const totalPercentage = () => {
    setTotalPercentage1(
      (percentage(tilawa) +
        percentage(Selat) +
        percentage(fasting) +
        percentage(SunnahSelat) +
        percentage(witr) +
        percentage(Azkar)) /
        6
    );
  };

  useEffect(() => {
    getQuestion();
  }, [assignments]);
  useEffect(() => {
    RewatibData();
  }, [selectedDate]);
  useEffect(() => {
    totalPercentage();
  }, [rewatib]);
  // console.log(totalPercentage1);

  // console.log(selectedDate);

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

      <div className="studentName">
        <div>{student.firstName + " " + student.lastName}</div>
      </div>
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
              <div className="flex">
                <div className="tableItem">Selat In Jema'a</div>
                <div className="percentage">
                  {Selat + percentage(Selat) + "%"}
                </div>
              </div>
              <div className="flex">
                <div className="tableItem">fasting</div>
                <div className="percentage">
                  {fasting + percentage(fasting) + "%"}
                </div>
              </div>
              <div className="flex">
                <div className="tableItem">Sunnah Selat</div>
                <div className="percentage">
                  {SunnahSelat + percentage(SunnahSelat) + "%"}
                </div>
              </div>
              <div className="flex">
                <div className="tableItem">witr</div>
                <div className="percentage">
                  {witr + percentage(witr) + "%"}
                </div>
              </div>
              <div className="flex">
                <div className="tableItem">Azkar</div>
                <div className="percentage">
                  {Azkar + percentage(Azkar) + "%"}
                </div>
              </div>
              <div className="flex">
                <div className="tableItem">tilawa</div>
                <div className="percentage">
                  {tilawa + percentage(tilawa) + "%"}
                </div>
              </div>
              <div className="total">
                <div>total</div>
                <div>{totalPercentage1 + "%"}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EvaluationPage;
