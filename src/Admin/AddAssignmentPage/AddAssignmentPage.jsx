import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import Tabs from "../../Components/Tabs/Tabs";
import { addQuestion, getQuestions } from "../../supabase";
import "./AddAssignmentPage.css";

function AddAssignmentPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    addQuestion(data);
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
