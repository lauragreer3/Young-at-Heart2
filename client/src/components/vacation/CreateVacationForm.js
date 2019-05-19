import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';

class CreateVacationForm extends Component {

  constructor() {
    super();
    this.state = {
      vacation_nickname: '',
      start_date: '',
      end_date: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { vacation_nickname, start_date, end_date } = this.state;

    axios.post('/api/vacation/create', { vacation_nickname, start_date, end_date })
      .then((result) => {
        this.props.history.push("/view_vacation" + result.id)
      });
  }

  render() {
    const { vacation_nickname, start_date, end_date } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Create Vacation</h2>
          <label for="inputVacationNickname" class="sr-only">Vacation Nickname</label>
          <input type="text" class="form-control" placeholder="vacation_nickname" name="vacation_nickname" value={vacation_nickname} onChange={this.onChange} required/>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default CreateVacationForm;