import React, {Component} from  'react';
import { BrowserRouter as Router, Route, NavLink, browserHistory} from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="list-group">
                <nav className="navbar navbar-inverse navbar-fixed-top ng-scope">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="dashboard.html">FQA</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/logout">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <NavLink  exact activeClassName="active" to="/">Login</NavLink>
                <NavLink  activeClassName="active" to="/register">Register</NavLink>
            </header> 
        );
    }
}

export default Header;