import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import Header from "../../Components/Header/Header";
import {
  getAssignments,
  getQuestionById,
  getQuestions,
  getStudentById,
  submitAnswer,
} from "../../supabase";
import "./AssignmentSubmissionPage.css";

function AssignmentSubmissionPage() {
  const [StudentName, setStudentName] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    submitAnswer({
      StudentId: uID,
      Question: questionId,
      Answer: data.Answer,
      StudentName: StudentName,
    });
  };

  const uID = JSON.parse(
    JSON.stringify(useSelector((state) => state.user).user.id)
  );
  const questionId = JSON.parse(
    JSON.stringify(useSelector((state) => state.assignment).userassignment)
  );

  const getStudentName = async () => {
    const student = await getStudentById(uID);
    setStudentName(student.firstName + " " + student.lastName);
  };

  const [question, setQuestion] = useState();
  const getQuestion = async () => {
    setQuestion(await getQuestionById(questionId));
  };

  useEffect(() => {
    getQuestion();
    getStudentName();
  }, []);
  console.log(StudentName);

  return (
    <div>
      <Header />
      <div className="assignmentPage">
        <h3>Question {question ? question[0].number : ""}</h3>
        <div className="question">
          <p>{question ? question[0].Question : ""}</p>
        </div>
        <form className="AnswerForm" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            required
            className="AnswerInput"
            type="text"
            placeholder="Your Answer Here"
            {...register("Answer", {})}
          />
          <input className="AnswerButton" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AssignmentSubmissionPage;
