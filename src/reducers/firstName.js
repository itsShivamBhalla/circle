const firstName = (state="",action)=>{
    if(action.type==='ADD_FIRST_NAME'){
        return action.payload;
    }
    return state;
}

export default firstName;