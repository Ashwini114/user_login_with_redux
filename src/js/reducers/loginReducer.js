const initialState = {
    credentials: {
        "username":"hruday@gmail.com",
        "password" :'hruday123' 
    },
    login_status : false
  };
  function loginReducer(state = initialState, action) {
    if (action.type === "CHANGE_LOGIN_STATUS") {
        
       // state.login_status = action.payload;
        state = {...state,login_status:action.payload}
    }
   
    return state;
  };
  export default loginReducer;