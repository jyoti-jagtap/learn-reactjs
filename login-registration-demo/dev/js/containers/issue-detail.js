import React, {Component} from  'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class IssueDetail extends Component{
    render(){
       if(!this.props.issue){
           return(<h2>Select Issue....</h2>);
       }
        return(
            <div>
                <h3>ID : {this.props.issue.id}</h3>
                <h3>TASK:{this.props.issue.task}</h3>
                <h3>DESCRIPTION: {this.props.issue.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        issue:state.activeIssue
    }
}

export default connect(mapStateToProps)(IssueDetail);