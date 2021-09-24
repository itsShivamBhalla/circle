const lastName = (state="",action)=>{
    if(action.type==='ADD_LAST_NAME'){
        return action.payload;
    }
    return state;
}

export default lastName;