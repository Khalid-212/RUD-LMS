import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { useForm } from "react-hook-form";
import { getAdminByCredentials } from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminstat, selectadmin } from "../adminSlice";
// import { getAdmin } from "../supabase";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [setuserdetail] = useState(null);
  const [currentusername, setcurrentusername] = useState("");
  // const [loginstate, setloginstate] = useState(false);
  const { register, handleSubmit } = useForm();
  // const [errorborder, seterrorborder] = useState("");
  const onSubmit = async (data) => {
    const adminlogn = await getAdminByCredentials(data.username, data.password);
    // console.log(adminlogn.username);
    try {
      if (adminlogn) {
        // setloginstate(true);
        // setuserdetail(adminlogn);
        setcurrentusername(adminlogn.userName);
        dispatch(
          adminstat({
            username: adminlogn.username,
            firstname: adminlogn.firstname,
            lastName: adminlogn.lastname,
          })
        );
        navigate("/admin/adminhome");
      } else {
        alert("invalid credentials");
      }
    } catch (error) {
      console.log(error);
      // seterrorborder("1px solid red");
    }
  };
  if (useSelector(selectadmin)) {
    navigate("/adminhome");
  }
  return (
    <div>
      <Header />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <input
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
          <input className="SubmitButton" type="submit" />
        </form>
        {/* <button onClick={caller}>try</button> */}
      </div>
    </div>
  );
}

export default AdminLogin;
