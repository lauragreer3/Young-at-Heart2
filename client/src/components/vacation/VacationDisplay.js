import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import '../Login.css';

class VacationDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vacation_nickname: props.vacation_nickname,
      start_date: new Date(props.start_date),
      end_date: new Date(props.end_date),
      id: props.id
    };
    this.onParentDelete = props.onDelete;
    this.parentDisplay = props.parentDisplay;
  }

//   onDelete(vacation_id, e) {
//       //@todo: create a model dialog to ask if this user id is sure they want to delete this vacation
//       //make a call to the  
//       console.log('deleting id ' + vacation_id);
//       axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//       axios.post('/api/vacation/delete_vacation', { vacation_id: vacation_id })
//       .then(res => {
//         // window.location.hash = '#/my_vacations';
//         this.props.history.push('/my_vacations');
//       });
//   }

  render() {
      return (
          <div className="VacationDisplayContainer row mb-2">
            <div className="col-md-8 col-lg-8">
                <div className="row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">Orlando, FL</strong>
                        <h3 className="mb-0">{ this.state.vacation_nickname } </h3>
                        <div className="mb-1 text-muted">{ this.state.start_date.toLocaleDateString() + ' - ' + this.state.end_date.toLocaleDateString() }</div>
                        <p className="card-text mb-auto">This is a longer vacation description to test for width problem</p>
                        <Link to={`/view_vacation/${ this.state.id }`}>View vacation</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <a href="#" onClick={ (e) => this.onParentDelete(this.state.id, e, this.parentDisplay)}>Delete</a>
                    </div>
                </div>
            </div>
        </div>
      )
    };
}

export default withRouter(VacationDisplay);
