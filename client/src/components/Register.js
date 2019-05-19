import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      phone_number: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      zip: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, phone_number, address_1, address_2, city, state, zip } = this.state;

    axios.post('/api/auth/register', { username, password, phone_number, address_1, address_2, city, state, zip })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { username, password, phone_number, address_1, address_2, city, state, zip } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <label for="inputPhoneNumber" class="sr-only">Phone Number</label>
          <input type="text" class="form-control" placeholder="Phone Number" name="phone_number" value={phone_number} onChange={this.onChange} required/>
          <label for="inputAddress1" class="sr-only">Address line 1</label>
          <input type="text" class="form-control" placeholder="Address line 1" name="address_1" value={address_1} onChange={this.onChange} required/>
          <label for="inputAddress2" class="sr-only">Address line 2</label>
          <input type="text" class="form-control" placeholder="Address line 2" name="address_2" value={address_2} onChange={this.onChange} required/>
          <label for="inputCity" class="sr-only">City</label>
          <input type="text" class="form-control" placeholder="City" name="city" value={city} onChange={this.onChange} required/>
          <label for="inputState" class="sr-only">State</label>
          <input type="text" class="form-control" placeholder="State" name="state" value={state} onChange={this.onChange} required/>
          <label for="inputZip" class="sr-only">Zip</label>
          <input type="text" class="form-control" placeholder="Zip" name="zip" value={zip} onChange={this.onChange} required/>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Create;