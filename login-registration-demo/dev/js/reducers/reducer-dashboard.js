const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
const UPLOAD_FAILURE = 'UPLOAD_FAILURE';
export default function reducer(state = {
	uploadSuccess: false,
	uploadError: null,
	message:""
}, action) {
	switch (action.type) {
		case UPLOAD_SUCCESS:
			return Object.assign({}, state, {
				uploadSuccess: true,
				data: action.payload
			});

		case UPLOAD_FAILURE:
			return Object.assign({}, state, {
				uploadError: action.payload
			});

		default:
		return state;
	}
}