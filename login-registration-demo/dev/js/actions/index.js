import axios from 'axios';
const ROOT_URL = "http://localhost:4000";
export const selectIssue = (issue) =>{
    console.log('You clicked on issue ',issue.task);
    return{
        type:'ISSUE_SELECTED',
        payload:issue
    }
}

export function login(email, password) {
  if(email === 'admin@yash.com' && password === 'admin')
    return {
        type:"SET_LOGIN_SUCCESS", 
        payload:true
    }
  else
    return {
        type:"SET_LOGIN_ERROR", 
        payload:false
    }
}

export function signUpUserSuccess(user) {
    return {
        type: "SIGNUP_USER_SUCCESS",
        payload: user
    };
}

export function signUpUserFailure(error) {
    return {
        type: "SIGNUP_USER_FAILURE",
        payload: error
    };
}

export function signup(formValues){
    return function (dispatch) {
        const url = `${ROOT_URL}/user`;
        axios.post(url, {data: formValues}).then(response => {
            dispatch(signUpUserSuccess(response.data));
        }).catch(function (response) {
            dispatch(signUpUserFailure(response.data));
        });
    }
}

export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    payload: data
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    payload: error
  };
}

export function uploadDocumentRequest({ files, name }) {  
    let data = new FormData();
    data.append('files', files);
    data.append('name', name);

    return (dispatch) => {
        const url = `${ROOT_URL}/files`;
        axios.post(url, data)
            .then(response => {
                dispatch(uploadSuccess(response));
            })
            .catch(error => { 
                dispatch(uploadFail(error));
            });
    };
}


