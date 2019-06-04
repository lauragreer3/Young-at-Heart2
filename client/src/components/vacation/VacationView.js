import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import VacationDisplay from './VacationDisplay';
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import VacationDay from './VacationDay';


class VacationView extends Component {

    constructor(props) {
        super();
        this.state = {
          vacation: {
            vacation_nickname: '',
            start_date: '',
            end_date: '',
            _id: 'props.match.vacation_id',
           vacation_days: [],
           description: '' 
          }
        };
        this._isMounted = false;
        this.onChange = this.onChange.bind(this);
        this.changePark = this.changePark.bind(this);
    }

    onChange = (e) => {
        // const state = this.state.vacation
        // state[e.target.name] = e.target.value;
        // this.setState(state);
    }

    getVacationData() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/vacation/' + this.props.match.params.vacation_id)
            .then(res => {
                console.log('loaded vacation data');
                console.log(res.data);
                this.setState({ vacation: res.data });
            });
    }

    componentDidMount() {
        //get the database info for this vacation
        this._isMounted = true;
        this._isMounted && this.getVacationData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onChangeStartDate = date => this.setState({ vacation: { start_date: date }})

    onChangeEndDate = date => this.setState({ vacation: { end_date: date }});

    changePark = ( parkId, vacationDayId ) => {
        // this.setState({ vacation.vacation_days[vacationDayId] : {park_selected: parkId} });
        // var tempVacationDays = Object.assign({}, this.state.vacation.vacation_days);
        var tempVacationDays = [...this.state.vacation.vacation_days];
        console.log('called change park in vacaiton view');
        console.log(tempVacationDays);
        tempVacationDays[vacationDayId].park_selected = parkId;
        this.setState({ vacation: {vacation_days: tempVacationDays }});
        //console.log(this.state);
    }    

    render() {
        // const { vacation_nickname, start_date, end_date } = this.state.vacation;
        const vacation = this.state.vacation;
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Edit Vacation</h2>
                </div> 
                <div className="form-group">
                    <label htmlFor="vacationNickname">Enter a nickname for this vacation: </label>
                    <input type="text" className="form-control" placeholder="Enter a nickname" id="vacation_nickname" value={this.state.vacation.vacation_nickname} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="start_date">Enter a start date:</label>
                    <DatePicker id="start_date" selected={ new Date(this.state.vacation.start_date) } onChange={this.onChangeStartDate}></DatePicker>
                </div>
                <div className="form-group">
                    <label htmlFor="end_date">Enter an end date:</label>
                    <DatePicker id="end_date" selected={ new Date(this.state.vacation.end_date) } onChange={this.onChangeEndDate}></DatePicker>
                </div>
                { vacation.vacation_days.map((vacation_day, index) => (
                    <VacationDay
                        vacation_date = {vacation_day.vacation_date}
                        park_selected = { vacation_day.park_selected}
                        parentDisplay = { this }
                        onChangePark = { this.changePark }
                        key = { vacation_day._id }
                        park_index = { index }
                    />
                ))}
            </div>
        );
    }
}
export default VacationView;