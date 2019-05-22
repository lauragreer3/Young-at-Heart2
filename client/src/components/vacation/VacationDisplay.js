import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';

class VacationDisplay extends Component {

  constructor() {
    super();
    this.state = {
      vacations: [],
    };
  }

  render(props) {
      return (
          <div className="VacationDisplayContainer row mb-2">
            <div className="col-md-6">
                <div className="row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-colum position-static">
                        <strong className="d-inline-block mb-2 text-primary">Orlando, FL</strong>
                        <h3 className="mb-0">{ props.vacation_name } </h3>
                        <div className="mb-1 text-muted">{props.start_date } - { props.end_date }</div>
                        <p className="card-text mb-auto">Vacation Description</p>
                        <a href="{ '/edit_vacation/' + props._id }" className="stretched-link">Edit Vacation</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style=""></rect> </svg>
                    </div>
                </div>
            </div>
        </div>
      )
    };
}

export default VacationDisplay;
