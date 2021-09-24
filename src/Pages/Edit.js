import React, { useEffect, useState } from "react";
import Icon from "../Elements/Icon";
import Line from "../Elements/Line";
import cross from "../Assets/Ellipse 4.svg";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";

import {
  addFirstName,
  addLastName,
  addEmail,
  addNumber,
} from "../actions";


const Edit = ({ field_number }) => {


  const [change, setChange] = useState(false);
  const [field_name, setField_name] = useState();
  const [field_data, setField_data] = useState();


  const dispatch = useDispatch();

  const myfirstname = useSelector((state) => {
    return state.fname;
  });

  const mylastname = useSelector((state) => {
    return state.lname;
  });

  const myemail = useSelector((state) => {
    return state.email;
  });

  const mynumber = useSelector((state) => {
    return state.phoneNumber;
  });

  useEffect(() => {
    if (field_number === "1") {
      setField_name("First Name");
      // setField_data(JSON.parse(localStorage.getItem("firstName")));
      setField_data(myfirstname);
    } else if (field_number === "2") {
      setField_name("Last Name");
      // setField_data(JSON.parse(localStorage.getItem("lastName")));
      setField_data(mylastname);
    } else if (field_number === "3") {
      setField_name("Email ID");
      // setField_data(JSON.parse(localStorage.getItem("emailId")));
      setField_data(myemail);
    } else {
      setField_name("Phone Number");
      // setField_data(JSON.parse(localStorage.getItem("phoneNumber")));
      setField_data(mynumber);
    }
  }, [field_number]);

  const header = {
    display: "flex",
    width: "375px",
    height: "56px",
    alignItems: "center",
  };

  const heading = {
    color: "#343434",
    fontSize: "16px",
    fontFamily: "Helvetica, Helvetica Neue",
    width: "68%",
    textAlign: "center",
  };

  const line = {
    width: "375px",
    height: "1px",
    backgroundColor: "#E4E4E4",
    border: "none",
  };

  const cross_base = {
    margin: "16px",
  };

  const iconWord = {
    position: "absolute",
    top: "19px",
    left: "24px",
    fontFamily: "Helvetica, Helvetica Neue",
    width: "9.78px",
    height: "9.78px",
    cursor: "pointer",
  };

  const save = {
    position: "absolute",
    top: "458px",
    left: "16px",
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

  const input = {
    border: "1px solid #343434",
    borderRadius: "8px",
    margin: "0 16px",
    width: "327px",
    height: "53px",
    position: "absolute",
    outline: "none",
    paddingLeft: "16px",
  };

  const input_field = {
    color: "#CECECE",
    fontSize: "12px",
    fontFamily: "Helvetica, Helvetica Neue",
    margin: "32px 24px 8px",
  };

  function editFieldValue(e) {
    setField_data(e.target.value);
  }

  function saveChanges() {
    setChange(true);

    if (field_number === "1") {
      // localStorage.setItem("firstName", JSON.stringify(field_data));
      dispatch(addFirstName(field_data));
    } else if (field_number === "2") {
      // localStorage.setItem("lastName", JSON.stringify(field_data));
      dispatch(addLastName(field_data));
    } else if (field_number === "3") {
      // localStorage.setItem("emailId", JSON.stringify(field_data));
      dispatch(addEmail(field_data));
    } else {
      // localStorage.setItem("phoneNumber", JSON.stringify(field_data));
      dispatch(addNumber(field_data));
    }
  }

  function isFieldEdited() {
    if (field_data === null || field_data === "") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      {change ? (
        <Profile />
      ) : (
        <>
          <div style={header}>
            <Icon iconStyle={cross_base} icon={cross} />
            <p
              style={iconWord}
              onClick={() => {
                setChange(true);
              }}
            >
              x
            </p>
            <h2 style={heading}>Edit</h2>
          </div>
          <Line lineStyle={line} />

          <p style={input_field}>{field_name}</p>

          <input
            type="text"
            style={input}
            value={field_data}
            onChange={editFieldValue}
            autoFocus="autofocus"
          />

          <button style={save} onClick={saveChanges} disable={isFieldEdited()}>
            Save Changes
          </button>
        </>
      )}
    </div>
  );
};

export default Edit;
