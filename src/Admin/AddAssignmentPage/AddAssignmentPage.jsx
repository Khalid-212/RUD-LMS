import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import Tabs from "../../Components/Tabs/Tabs";
import { addQuestion, getQuestions } from "../../supabase";
import "./AddAssignmentPage.css";
import { ToastContainer, toast } from "react-toastify";

function AddAssignmentPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    addQuestion(data);
    toast.success("Question Added");
  };
  const [questions, setQuestions] = useState();
  const getQuestionList = async () => {
    setQuestions(await getQuestions());
  };
  useEffect(() => {
    getQuestionList();
  }, []);
  return (
    <div>
      <HeaderAdmin />
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />

      <Tabs />
      <form className="addQuestionForn" onSubmit={handleSubmit(onSubmit)}>
        <h3>Add Question</h3>
        <textarea
          className="addQuestionInput"
          type="text"
          placeholder="Add Question"
          {...register("Question", {})}
          required
        />
        <input className="submit_btn" type="submit" />
      </form>
      {questions
        ? questions.map((question) => (
            <QuestionCard
              Questionnumber={question.number}
              QuestionBody={question.Question}
              key={question.id}
            />
          ))
        : ""}
    </div>
  );
}

export default AddAssignmentPage;
