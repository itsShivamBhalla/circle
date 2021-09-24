import React, { useState } from "react";
import Icon from "../Elements/Icon";
import Line from "../Elements/Line";
import ProfileInputs from "../Components/ProfileInputs";
import Avatar from "../Elements/Avatar";
import leftChevron from "../Assets/Mask Group 3.svg";
import Edit from "./Edit";
import Home from "./Home";
import { useSelector } from "react-redux";



const Profile = () => {

  const [editable, setEditable] = useState(false);

  const [go_back, setGo_back] = useState(false);

  const [edit_field, setEdit_field] = useState();


  // const [email_id, setEmail_id] = useState(getEmailId());
  // const [first_name, setFirst_name] = useState(getFirstName());
  // const [last_name, setLast_name] = useState(getLastName());
  // const [phone_number, setPhone_number] = useState(getPhoneNumber());




  const  myfirstname = useSelector((state)=> {
    return state.fname 
  });
  console.log("-----",myfirstname);

  
  const  mylastname = useSelector((state)=> {
    return state.lname 
  });
  console.log("----->>",mylastname);


  const myemail = useSelector((state)=>{
    return state.email
  })
  console.log(">>>", myemail);

  const mynumber = useSelector((state)=>{
    return state.phoneNumber
  })

  
  const mynumberfull = useSelector((state)=>{
    return "+91"+state.phoneNumber
  })
  

  console.log("===",mynumber)

  // const data = {
  //   id: details[details.length-1].id +1,
  //   user_name,
  //   user_number
  // }

  // console.log(data);
   



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

  const chevron = {
    margin: "16px",
  };

  const avatar = {
    width: "80px",
    height: "80px",
  };

  const profile_photo = {
    color: "#85898D",
    fontSize: "12px",
    fontFamily: "Helvetica, Helvetica Neue",
    padding: "4px",
  };

  const change_photo = {
    color: "#3B88FD",
    fontSize: "12px",
    fontFamily: "Helvetica, Helvetica Neue",
    padding: "4px",
  };


  return (
    <>
      {editable ? (
        <Edit 
        field_number={edit_field}

         />
                   ) : go_back ? (
                                <Home />
                                ) : (
                                  <>
                                    <div style={header}>
                                      <Icon
                                        iconStyle={chevron}
                                        icon={leftChevron}
                                        click={() => {
                                          setGo_back(true);
                                        }}
                                      />
                                      <h2 style={heading}>Profile</h2>
                                    </div>

                                    <Line lineStyle={line} />

                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        margin: "40px 0",
                                      }}
                                    >
                                    <span style={profile_photo}>Profile Photo</span>
                                    <Avatar avatarStyle={avatar} />
                                    <span style={change_photo}>Change</span>
                                    </div>

                                    <ProfileInputs
                                      fieldName="First Name"
                                      click={() => {
                                        setEditable(!editable);
                                        setEdit_field("1");
                                      }}
                                      editable={!editable}
                                      value={myfirstname}
                                    />

                                    <ProfileInputs
                                      fieldName="Last Name"
                                      click={() => {
                                        setEditable(!editable);
                                        setEdit_field("2");
                                      }}
                                      editable={!editable}
                                      value={mylastname}
                                    />

                                    <ProfileInputs
                                      fieldName="Email Id"
                                      click={() => {
                                        setEditable(!editable);
                                        setEdit_field("3");
                                      }}
                                      editable={!editable}
                                      value={myemail}
                                    />

                                    <ProfileInputs
                                      fieldName="Phone Number"
                                      click={() => {
                                        setEditable(!editable);
                                        setEdit_field("4");
                                      }}
                                      editable={!editable}
                                      value={mynumberfull}
                                    />
                                  </>
      )}
    </>
  );
};

export default Profile;
