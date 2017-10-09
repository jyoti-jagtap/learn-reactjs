import React, {Component} from  'react';
import { BrowserRouter as Router, Route, NavLink, browserHistory} from 'react-router-dom';

class Sidebar extends Component {
  render(){
    return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul>
                        <li><NavLink  exact activeClassName="active" to="/dashboard">dashboard</NavLink></li>
                        <li><NavLink  activeClassName="active" to="/scenarios">scenarios</NavLink></li>
                        <li><NavLink  exact activeClassName="active" to="/scenario2">scenario2</NavLink></li>
                        <li><NavLink  activeClassName="active" to="/testcases">Test Cases</NavLink></li>
                    </ul>
                    {/* <section>            	
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/register" component={RegistrationForm} />
                    </section> */}
                </section>
            </aside>

    );
 }
}
export default Sidebar;