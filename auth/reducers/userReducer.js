import { CREATE_USER_SUCCESS, CREATE_USER_ERROR } from '../../actions/types';

const INITIAL_STATE = {
    user: null,
    role: null,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return { ...state, user: action.payload.user, role: action.payload.role, error: null };
        case CREATE_USER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};