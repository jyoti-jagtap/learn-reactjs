const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export default function reducer(state = {
  isLoginSuccess: false,
 // isLoginPending: false,
  loginError: null,
  message:""
}, action) {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.payload
      });
 
    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.payload
      });
 
    default:
      return state;
  }
}