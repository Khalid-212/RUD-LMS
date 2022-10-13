import React from "react";
import { useForm } from "react-hook-form";
import "./ManageStudents.css";
import HeaderAdmin from "../../../Components/Header/HeaderAdmin";
import Tabs from "../../../Components/Tabs/Tabs";
import { addStudent } from "../../../supabase";

function ManageStudents() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await addStudent({
      firstName: data.firstname,
      lastName: data.lastname,
      password: data.password,
      userName: data.username,
      phoneNumber: data.phonenumber,
    });
    alert("Student Added");
  };
  return (
    <>
      <HeaderAdmin />
      <Tabs />
      <div className="manageusers">
        <form className="manageusersform" onSubmit={handleSubmit(onSubmit)}>
          <h2>Creat Student</h2>
          <input
            className="stu_reg_input"
            type="text"
            placeholder="FirstName"
            {...register("firstname", {})}
            required
          />
          <input
            className="stu_reg_input"
            type="text"
            placeholder="LastName"
            {...register("lastname", {})}
            required
          />
          <input
            className="stu_reg_input"
            type="text"
            placeholder="username"
            {...register("username", {})}
            required
          />
          <input
            className="stu_reg_input"
            type="password"
            placeholder="password"
            {...register("password", {})}
            required
          />
          <input
            className="stu_reg_input"
            type="tel"
            maxLength="10"
            placeholder="phonenumber"
            {...register("phonenumber", {})}
            required
          />
          <input className="submit_btn" type="submit" />
        </form>
      </div>
    </>
  );
}

export default ManageStudents;
