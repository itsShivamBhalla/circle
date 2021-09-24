const email = (state="",action)=>{
    if(action.type==='ADD_EMAIL'){
        return action.payload;
    }
    return state;
}

export default email;