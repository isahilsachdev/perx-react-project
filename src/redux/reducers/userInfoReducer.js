const initialState = {
    user: null,
};
  
const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
        return { ...state, user: action.payload };
        default:
        return state;
    }
};
  
export default userInfoReducer;