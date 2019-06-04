import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import './components/pages/home';
import HomePage from './components/pages/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacations: [],
      isLoggedIn: false
    };
  }
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('api/vacation')
      .then(res => {
        this.setState({ vacations: res.data });
        console.log(this.state.vacations);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push('/login');
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }

}

export default App;
