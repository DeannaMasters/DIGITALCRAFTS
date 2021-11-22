const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_FIRSTNAME":
            return { ...state, firstName: action.payload };
        case "LOGIN_LASTNAME":
            return { ...state, lastName: action.payload };
        case "LOGIN_EMAIL":
            return { ...state, email: action.payload };
        case "LOGIN_PASSWORD":
            return { ...state, password: action.payload };
        
        default:
            return state
    }
}
export default rootReducer;