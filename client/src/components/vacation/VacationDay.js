import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import VacationDisplay from './VacationDisplay';
import DatePicker from 'react-date-picker';
import Select from 'react-select';

const park_options = [
    { value: 'WDW_MK', label: 'Magic Kingdom' },
    { value: 'WDW_EPCOT', label: 'Epcot Center' },
    { value: 'WDW_HS', label: 'Hollywood Studios' },
    { value: 'WDW_AK', label: 'Animal Kingdom' },
    { value: 'USTUDIOS_FL', label: 'Universal Studios Orlando' },
    { value: 'USTUDIOS_IOA_FL', label: 'Islands Of Adventure' },
];


class VacationDay extends Component {

    constructor(props) {
        super();
        this.state = {
            current_park: 'WDW_MK',
            vacation_day: props.vacation_day,
            overall_wait_time: 0,
            rides: []
        };
    }

    handleParkChange = (current_park, e) => {
        this.setState({ current_park });
        console.log('option selected: ' + current_park);
    }

    load_park_wait_times(date_to_load, park_id) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/parks/' , {
            park_id: park_id,
            date_to_query: date_to_load
        })
        .then(res => {
            console.log('loaded park wait times');
            console.log(res.data);
            this.setState({ rides: res.data });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    componentDidMount() {
        this.load_park_wait_times(this.props.vacation_date, this.state.current_park);
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    displayLogo() {

    }


    render() {
        const date_formatted = new Date(this.props.vacation_date).toLocaleDateString();
        const { current_park } = this.state;
        const { rides } = this.state;
        return (
        <div className="row h-40">
            <div className="card col-md-10">
                <div className="card-header">
                    <div className="row">
                        <div className="col-3">{date_formatted}</div>
                        <div className="col-9">
                            <Select
                                value={current_park}
                                onChange={this.handleParkChange}
                                options={park_options}
                                selected={current_park}
                                placeholder='Select a park...'
                                defaultValue='WDW_MK'
                            />    
                        </div>
                    </div>
                </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="row"><img src="..." alt="Park Image"></img></div>
                                <div className="row">Overall Wait Time:</div>
                                <div className="row"><h3>5/10</h3></div>
                            </div>
                            <div className="col-8">
                                <table className="table table-striped table-bordered table-condensed table-sm waiting-table">
                                    <thead>
                                        <tr>
                                            <th className="ride-column">Ride</th>
                                            <th className="ride-column">Wait Time</th>
                                            <th className="ride-column">Open?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="wait-time-table">    
                                        {
                                            rides.map(ride => (
                                                <tr key={ride.id}>
                                                    <td>{ride.name}</td>
                                                    <td>{ride.waitTime}</td>
                                                    <td>{ride.active}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>    
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