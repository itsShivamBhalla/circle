import React, { useState } from "react";
import Line from "../Elements/Line";
import Logo from "../Elements/Logo";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { editInfo, addInfo, addFirstName, addLastName, addEmail, addNumber } from "../actions";


const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");

 

  const dispatch = useDispatch();
  // const details = useSelector((state)=>state);
  // console.log(details)

  
  const logo = {
    width: "101px",
    height: "31px",
    top: "69px",
    left: "16px",
    margin: "69px 16px 0px ",
  };

  const heading = {
    margin: "40px 16px 0",
    color: "#343434",
    fontFamily: "Helvetica, Helvetica Neue",
    height: "28px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const content = {
    // position: "absolute",
    // top: "176px",
    // left: "16px",
    margin: "8px 16px 0",
    fontFamily: "Helvetica, Helvetica Neue",
    fontSize: "16px",
    color: "#85898D",
    width: "217px",
  };

  const input = {
    border: "1px solid #CECECE",
    borderRadius: "8px",
    margin: "0 16px",
    width: "327px",
    height: "53px",
    outline: "none",
    paddingLeft:'16px'
  };

  const input_first_name = {
    ...input,
    margin: "40px 16px 0",
  };

  const input_last_name = {
    ...input,
    margin: "24px 16px 0",
  };

  const input_phone = {
    ...input,
    margin: "24px 16px 0",
  };

  const input_email = {
    ...input,
    // top: "252px",
    margin: "24px 16px 0",
  };

  const input_password = {
    ...input,
    // top: "328px",
    margin: "24px 16px 0",
  };

  const forgot_password = {
    // position: "absolute",
    // top: "388px",
    // left: "238px",
    margin: "8px 24px 38px 238px",
    color: "#3B88FD",
    fontSize: "14px",
    fontFamily: "Helvetica, Helvetica Neue",
  };

  const login = {
    // position: "absolute",
    // top: "458px",
    // left: "16px",
    margin: "16px",
    backgroundColor: "#3B88FD",
    color: "#FFFFFF",
    fontFamily: "Helvetica, Helvetica Neue",
    fontSize: "16px",
    textTransform: "uppercase",
    width: "343px",
    height: "48px",
    outline: "none",
    border: "none",
    borderRadius: "8px",
  };

  const line = {
    // position: "absolute",
    width: "375px",
    height: "1px",
    backgroundColor: "#E4E4E4",
    // top: "442px",
    // left: "0",
    border: "none",
  };


  function handleLogIn(e) {

    e.preventDefault();
    setLoginSuccess(true);

    // localStorage.setItem("firstName", JSON.stringify(first_name));
    // localStorage.setItem("lastName", JSON.stringify(last_name));
    // localStorage.setItem("emailId", JSON.stringify(email_id));
    // localStorage.setItem("phoneNumber", JSON.stringify(phone_number));
    // localStorage.setItem("password", JSON.stringify(password));

    dispatch(addFirstName(first_name))
    dispatch(addLastName(last_name))
    dispatch(addEmail(email_id))
    dispatch(addNumber(phone_number))
  };


  function emailId(e) {
    setEmail_id(e.target.value);
  }


  function firstName(e) {
    setFirst_name(e.target.value);
  }


  function lastName(e) {
    setLast_name(e.target.value);
  }


  function phoneNumber(e) {
    setPhone_number(e.target.value);
  }


  function getPassword(e) {
    setPassword(e.target.value);
  }


  function hasUserData() {

    if (
      email_id === null ||
      email_id === "" ||
      first_name === null ||
      first_name === "" ||
      last_name === null ||
      last_name === "" ||
      password === null ||
      password === "" ||
      phone_number === null ||
      phone_number === "" )
    {
      return true;
    } 
    else {
      return false;
    }


  }

  
  return (
    <>
      {loginSuccess ? (
        <Home />
      ) : (
        <>
          <Logo logoStyle={logo} />
          <h1 style={heading}>Log in</h1>
          <p style={content}>Log in and start watching best content.</p>

          <form>
            <input
              type="text"
              placeholder="First Name"
              style={input_first_name}
              onChange={firstName}
              autoFocus="autofocus"
            />

            <input
              type="text"
              placeholder="Last Name"
              style={input_last_name}
              onChange={lastName}
            />
            <input
              type="email"
              placeholder="Email"
              style={input_email}
              onChange={emailId}
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              style={input_phone}
              onChange={phoneNumber}
            />

            <input
              type="password"
              placeholder="Password"
              style={input_password}
              onChange={getPassword}
              onPaste={(e) => {
                e.preventDefault();
              }}
            />
            <p style={forgot_password}>Forgot password?</p>
            <Line lineStyle={line} />
            <button
              type="submit"
              style={login}
              onClick={handleLogIn}
              disabled={hasUserData()}
            >
              Log in
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
