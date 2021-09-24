// export const addInfo = (data) => {
//   return { 
//     type: "ADDINFO",
//     payload: data
//    };
// };

// export const editInfo = () =>{
//   return {
//     type: "EDITINFO"
//   }
// }


export const addFirstName=(firstName)=>{
  return {
    type: "ADD_FIRST_NAME",
    payload:firstName
  }
}

export const addLastName=(lastName)=>{
  return {
    type: "ADD_LAST_NAME",
    payload:lastName
  }
}

export const addEmail=(email)=>{
  return {
    type: "ADD_EMAIL",
    payload:email
  }
}

export const addNumber=(number)=>{
  return {
    type: "ADD_NUMBER",
    payload:number
  }
}

