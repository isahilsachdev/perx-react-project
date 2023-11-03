const initialState = {
    orgs: [],
};

const orgsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORGS':
        return { ...state, orgs: action.payload };
        default:
        return state;
    }
};

export default orgsReducer;