import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/pages/about_us';
import ContactUs from './components/pages/contact_us';


ReactDOM.render(
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about_us">About Us</Link></li>
                    <li><Link to="/contact_us">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/about_us' component={AboutUs} />
            <Route path='/contact_us' component={ContactUs} />
        </div>
    </Router>,
     document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
