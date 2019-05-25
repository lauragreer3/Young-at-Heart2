import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/pages/about_us';
import ContactUs from './components/pages/contact_us';
import CreateVacationForm from './components/vacation/CreateVacationForm';
import Vacations from './components/vacation/Vacations';
import Create from './components/Register';

ReactDOM.render(
    <Router>
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about_us">About Us</NavLink></li>
                    <li><NavLink to="/contact_us">Contact Us</NavLink></li>
                    <li><NavLink to="/create_vacation">Create Vacation</NavLink></li>
                    <li><NavLink to="/my_vacations">My Vacations</NavLink></li>
                </ul>
            </nav>
        </div>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/about_us' component={AboutUs} />
            <Route path='/contact_us' component={ContactUs} />
            <Route path='/create_vacation' component={CreateVacationForm} />
            <Route path='/my_vacations' component={Vacations} />
        </div>
    </Router>,
     document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();