// import editingField  from "./editingField";
import firstName from "./firstName";
import lastName from "./lastName";
import email from "./email";
import number from "./number";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    fname:firstName,
    lname:lastName,
    email:email,
    phoneNumber:number,
})

export default rootReducer;