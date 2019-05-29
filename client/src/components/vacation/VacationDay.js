import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import VacationDisplay from './VacationDisplay';
import DatePicker from 'react-date-picker';

class VacationDay extends Component {
    constructor(props) {
        super();
        this.state = {
            current_park:0
        };
    }

    load_park_wait_times(date_to_load, park_id) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    }

    componentDidMount() {
        this.load_park_wait_times(this.props.date, this.props.current_park);
    }

    componentDidUpdate(props) {

    }

    render() {

        return (
        <div className="row">
            <div class="card">
                <div className="row">
                    <div className="col-2">Date</div>
                    <div className="col-10">
                        <select name="park_selected" id="park_selected" className="form-control">
                            <option>DisneyWorld</option>
                            <option>Universal Studios</option>
                        </select>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                        
                        </div>
                        <div className="col-4">
                            <div className="row"><img src="..." alt="Park Image"></img></div>
                            <div className="row">Overall Wait Time:</div>
                            <div className="row"><h3>5/10</h3></div>
                        </div>
                        <div className="col-8">
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>Ride</th>
                                        <th>Wait Time</th>
                                        <th>Open?</th>
                                    </tr>
                                    <tr>
                                        <td>Space Mountain</td>
                                        <td>2:00</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Space Mountain</td>
                                        <td>2:00</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Space Mountain</td>
                                        <td>2:00</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Space Mountain</td>
                                        <td>2:00</td>
                                        <td>Yes</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        );
    }

}

export default VacationDay;