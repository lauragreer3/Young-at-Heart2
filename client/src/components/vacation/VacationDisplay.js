import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../Login.css';

class VacationDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vacation_nickname: props.vacation_nickname,
      start_date: props.start_date,
      end_date: props.end_date,
      id: props.id
    };
  }

  render() {
      return (
          <div className="VacationDisplayContainer row mb-2">
            <div className="col-md-6">
                <div className="row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">Orlando, FL</strong>
                        <h3 className="mb-0">{ this.state.vacation_name } </h3>
                        <div className="mb-1 text-muted">{ this.state.start_date } - { this.state.end_date }</div>
                        <p className="card-text mb-auto">Vacation Description</p>
                        <Link to={`/view_vacation/${ this.state.id }`}>View vacation</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        Right side
                    </div>
                </div>
            </div>
        </div>
      )
    };
}

export default VacationDisplay;
