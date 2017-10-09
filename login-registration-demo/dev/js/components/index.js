import React from 'react';
import LoginForm from '../containers/login';
import RegistrationForm from '../containers/register';
import Dashboard from '../containers/dashboard';
import Header from './common/header';
import Sidebar from './common/sidebar';
import Footer from './common/footer';
import { BrowserRouter as Router, Route, NavLink, browserHistory, IndexRoute} from 'react-router-dom';
require('../../sass/style.sass');

const Layout = () => (
    <Router history={browserHistory}>
        <section className="clearfix">            
            <Header />
            {/* <Sidebar /> */}
            <Route exact path="/" component={LoginForm} />
            <Route path="/register" component={RegistrationForm}  />
            <Route path="/dashboard" component={Dashboard} />
            <Footer />
        </section>        
    </Router>
);

const App = () => (
	<Layout />
);

export default App;