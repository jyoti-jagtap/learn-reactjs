import React, {Component} from  'react';
import { BrowserRouter as Router, Route, NavLink, browserHistory} from 'react-router-dom';

class Footer extends Component {
  render(){
    return (
            <footer className='example'>
                <h5 className="white-text">&copy; 2015 Copyright Text</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </footer>
    );
 }
}
export default Footer;