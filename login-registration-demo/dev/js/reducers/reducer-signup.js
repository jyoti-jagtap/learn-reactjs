const SET_SIGNUP_SUCCESS = 'SIGNUP_USER_SUCCESS';
const SET_SIGNUP_ERROR = 'SIGNUP_USER_FAILURE';
export default function reducer(state = {
	isSignUpSuccess: false,
	signUpError: null,
	message:""
}, action) {
	switch (action.type) {
		case SET_SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				isSignUpSuccess: true,
				data: action.payload
			});

		case SET_SIGNUP_ERROR:
			return Object.assign({}, state, {
				signUpError: action.payload
			});

		default:
		return state;
	}
}