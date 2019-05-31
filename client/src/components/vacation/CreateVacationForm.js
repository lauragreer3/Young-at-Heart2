import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import DatePicker from 'react-date-picker';

class CreateVacationForm extends Component {

  constructor() {
    super();
    this.state = {
      vacation_nickname: '',
      start_date: new Date(),
      end_date: new Date()
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onChangeStartDate = date => this.setState({start_date: date })

  onChangeEndDate = date => this.setState({end_date: date })

  onSubmit = (e) => {
    e.preventDefault();

    const { vacation_nickname, start_date, end_date } = this.state;

    axios.post('/api/vacation/create_vacation', { vacation_nickname, start_date, end_date })
      .then((result) => {
        // this.props.history.push("/view_vacation/" + result.id)
        this.props.history.push("/my_vacations");
      });
  }

  render() {
    const { vacation_nickname, start_date, end_date } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Create Vacation</h2>
          <label htmlFor="inputVacationNickname" className="sr-only">Vacation Nickname</label>
          <input type="text" className="form-control" placeholder="vacation_nickname" name="vacation_nickname" value={vacation_nickname} onChange={this.onChange} required/>

          <label htmlFor="inputVacationStartDate" className="sr-only">Start Date</label>  
          <DatePicker name="start_date" onChange={this.onChangeStartDate} value={this.state.start_date}/>
          <DatePicker name="end_date" onChange={this.onChangeEndDate} value={this.state.end_date}/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Save New Vacation</button>
        </form>
      </div>
    );
  }
}

export default CreateVacationForm;