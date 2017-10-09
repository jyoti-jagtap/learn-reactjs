import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadDocumentRequest } from '../actions/index';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import JsonTable  from 'react-json-table';
import dashjson from '../reducers/dash-jsondata';

class Dashboard extends React.Component {
  constructor(props) {
		super(props);
		this.handleFileUpload = this.handleFileUpload.bind(this);
		this.state = {     										   
						file: ""
					}
    }

	handleFileUpload() {
		const files = this.refs.file.files[0];
		const name = files.name;
		const { uploadDocumentRequest } = this.props.actions;
		uploadDocumentRequest({ files, name });
	
	}
  
	render() {
		return (
			<div>My Dashboard Jyoti
				  <div className="row placeholders">
            <div className="col-xs-6 placeholder">
              <span><img src="img/bell.png" alt="notify" className="bell"/>
              <span className="notify">15</span>
              </span>
              
              <img src="img/1.jpg" width="150" height="150" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Total Test Cases</h4>
              <span className="text-muted">1000</span>
            </div>
            <div className="col-xs-6 placeholder">
            
              <img src="img/2.jpg" width="150" height="150" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Total Test Scenarios</h4>
              <span className="text-muted">1000</span>
            </div>


            <div className="col-xs-6 placeholder">
            <span><img src="img/bell.png" alt="notify" className="bell"/>
              <span className="notify">15</span>
              </span>
              <img src="img/3.jpg" width="150" height="150" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Total Upload</h4>
              <span className="text-muted">600</span>
            </div>


            <div className="col-xs-6  placeholder">
           
              <img src="img/4.jpg" width="150" height="150" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Total Download</h4>
              <span className="text-muted">400</span>
            </div>


            <div className="col-xs-6 placeholder">
              <span><img src="img/bell.png" alt="notify" className="bell"/>
              <span className="notify">15</span>
              </span>
              <img src="img/5.jpg" width="150" height="150" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Total Failed</h4>
              <span className="text-muted">100</span>
            </div>

         <div>
         <h3>Upload History</h3>
            <div className="table-bordered ">
             
            <JsonTable rows={ dashjson } className="table table-striped"/>
            </div>
          <a href="scenarios.html" className=" center-block submit">Run test cases</a>
        </div>
      </div>

				 <form>
					<input type="file" ref="file" onChange={this.handleFileUpload} />
				</form> 
			</div>
		)
		
	}
}
const mapStateToProps = (state) => {
	return {
		uploadSuccess: state.uploadDocumentRequest.uploadSuccess,
		uploadError: state.uploadDocumentRequest.uploadError
	};
}
 
const mapDispatchToProps = (dispatch) => { 
	return { 
		actions: bindActionCreators({uploadDocumentRequest}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
