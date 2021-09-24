const number = (state="",action)=>{
    if(action.type==='ADD_NUMBER'){
        return action.payload;
    }
    return state;
}

export default number;