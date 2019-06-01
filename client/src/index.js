import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
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
import VacationView from './components/vacation/VacationView';

ReactDOM.render(
    <Router>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Young At Heart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-control="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul>
                        <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about_us">About Us</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact_us">Contact Us</NavLink></li>
                        <li className="nav-item"><NavLink to="/create_vacation">Create Vacation</NavLink></li>
                        <li className="nav-item"><NavLink to="/my_vacations">My Vacations</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
        <main role="main">
            <div className="container-fluid">
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/about_us' component={AboutUs} />
                <Route path='/contact_us' component={ContactUs} />
                <Route path='/create_vacation' component={CreateVacationForm} />
                <Route path='/my_vacations' component={Vacations} />
                <Route path='/view_vacation/:vacation_id' component={VacationView} />
            </div>
            <footer class="container">
                <p className="float-right"><a href="#">Back to Top</a></p>
                <p>&copy; 2019 Young At Heart, Inc. &middot; <Link to="/privacy">Privacy</Link>
                &middot; <Link to="/tos">Terms</Link></p>
            </footer>
        </main>    
    </Router>,
     document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();