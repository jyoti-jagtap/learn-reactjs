import {combineReducers} from 'redux';
import IssueReducer from './reducer-issue';
import ActiveIssueReducer from './reducer-active-issue.js';
import LoginReducer from './reducer-login';
import SignupReducer from './reducer-signup';
import DashboardReducer from './reducer-dashboard';
// here you will put all the separate reducers, this allReducers will help to create store as a big js object in Redux.
const allReducers=combineReducers({
    issues: IssueReducer,
    login: LoginReducer,
    signup: SignupReducer,
    uploadDocumentRequest: DashboardReducer,
    activeIssue:ActiveIssueReducer
});

export default allReducers;