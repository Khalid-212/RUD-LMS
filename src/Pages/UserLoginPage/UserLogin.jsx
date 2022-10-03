import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { login, selectUser } from "../../userSlice";
import "./userLoginPage.css";
import { getStudentByCredentials } from "../../supabase";
import { useState } from "react";

function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [setuserdetail] = useState(null);
  const [currentusername, setcurrentusername] = useState("");
  // const [loginstate, setloginstate] = useState(false);
  const { register, handleSubmit } = useForm();
  const [errorborder, seterrorborder] = useState("");

  const onSubmit = async (data) => {
    const logn = await getStudentByCredentials(data.username, data.password);
    try {
      if (logn) {
        // setloginstate(true);
        // setuserdetail(logn);
        setcurrentusername(logn.userName);
        dispatch(
          login({
            username: logn.userName,
            firstname: logn.firstName,
            lastName: logn.lastName,
          })
        );
        navigate("/home");
      } else {
        alert("invalid credentials");
      }
    } catch (error) {
      console.log(error);
      seterrorborder("1px solid red");
    }
  };
  if (useSelector(selectUser)) {
    navigate("/userlogin");
  }

  return (
    <>
      <Header
        username={useLocation().pathname === "/home" ? currentusername : ""}
      />

      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <input
            style={{ border: errorborder }}
            className="UsernameInput"
            type="text"
            placeholder="username"
            {...register("username", {})}
            required
          />
          <input
            required
            className="PasswordInput"
            type="password"
            placeholder="password"
            {...register("password", {})}
          />
          <Link
            to="/admin"
            style={{ textDecoration: "none", color: "#1e9fe9" }}
          >
            admin login
          </Link>
          <input className="SubmitButton" type="submit" />
        </form>
        {/* <button onClick={tes}>try</button> */}
      </div>
    </>
  );
}

export default UserLogin;
