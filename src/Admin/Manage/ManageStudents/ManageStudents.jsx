import React from "react";
import { useForm } from "react-hook-form";
import "./ManageStudents.css";
import HeaderAdmin from "../../../Components/Header/HeaderAdmin";
import Tabs from "../../../Components/Tabs/Tabs";
import { addStudent } from "../../../supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ManageStudents() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await addStudent({
      firstName: data.firstname,
      lastName: data.lastname,
      password: data.password,
      userName: data.username,
      phoneNumber: data.phonenumber,
    });
    (async () => {
      toast.success("Student Added Successfully");
      await navigate("/admin/studentlist");
    })();
  };
  return (
    <>
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
