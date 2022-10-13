import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import Tabs from "../../Components/Tabs/Tabs";
import { getStudentById } from "../../supabase";
import useravatar from "../../Assets/user.svg";
import "./EvaluationPage.css";
import AssignmentStatusCard from "../../Components/AssignmentStatusCard/AssignmentStatusCard";

function EvaluationPage() {
  const [student, setStudent] = React.useState([]);
  const studentId = useSelector((state) => state.adminstat).studenttoreview;
  const getStudent = async () => {
    setStudent(await getStudentById(studentId));
  };
  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <Tabs />
      <div className="evaluationPageHeader">
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
      </div>
      <div className="Submissions">
        <AssignmentStatusCard
          Assignmentnumber={4}
          Assignmentstatus={"done"}
          AssingmentSubmissionDate={"25-5-25"}
        />
        <AssignmentStatusCard
          Assignmentnumber={5}
          Assignmentstatus={"done"}
          AssingmentSubmissionDate={"2-5-25"}
        />
        <AssignmentStatusCard
          Assignmentnumber={6}
          Assignmentstatus={"pending"}
          AssingmentSubmissionDate={"4-5-25"}
        />
      </div>
    </div>
  );
}

export default EvaluationPage;
