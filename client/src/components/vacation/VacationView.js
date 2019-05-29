import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import VacationDisplay from './VacationDisplay';
import DatePicker from 'react-date-picker';

class VacationView extends Component {

    constructor(props) {
        super();
        this.state = {
            vacation_nickname: props.vacation_nickname,
            start_date: props.start_date,
            end_date: props.end_date
        };
    }

    componentDidMount() {
        //get the database info for this vacation
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        // axios.get('/api/vacation')
    }

    render() {
        const { vacation_nickname, start_date, end_date } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Edit Vacation</h2>
                </div>
                <div className="form-group">
                    <label for="vacationNickname">Enter a nickname for this vacation: </label>
                    <input type="text" className="form-control" placeholder="Enter a nickname" id="vacationNickname" />
                </div>
                <div className="row">
                    <label>Enter a start date:</label>
                    <DatePicker id="start_date" selected={this.state.startDate}></DatePicker>
                </div>
                <div className="row">
                    <label>Enter an end date:</label>
                    <DatePicker id="end_date" selected={this.state.endDate}></DatePicker>
                </div>
            </div>
        );
    }
}
export default VacationView;