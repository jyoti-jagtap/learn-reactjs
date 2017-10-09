import React, {Component} from  'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectIssue} from '../actions/index';
class IssueList extends Component{
    createIssueList(){
        return this.props.issues.map( (issue) =>{
            return (
                <li 
                key={issue.id}
                onClick={()=>this.props.selectIssue(issue)}>
                
                {issue.task}
                </li>
            );
        });
    }
    render(){
        return(
            <ul>
               {this.createIssueList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        issues:state.issues
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectIssue:selectIssue},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(IssueList);