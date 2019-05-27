import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import VacationDisplay from './VacationDisplay';

class VacationView extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        //get the database info for this vacation
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        // axios.get('/api/vacation')
    }

    render() {
        return 'vacation view';
    }
}
export default VacationView;