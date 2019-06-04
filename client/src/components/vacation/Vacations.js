import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import VacationDisplay from './VacationDisplay';

class Vacations extends Component {

  constructor() {
    super();
    this.state = {
      user_id: 0,  
      vacations: [],
      error: null,
      isLoaded: false
    };
  }

  onDelete(vacation_id, e, parentDisplay) {
    //@todo: create a model dialog to ask if this user id is sure they want to delete this vacation
    //make a call to the  
    console.log('deleting id ' + vacation_id);
    console.log(this);
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.post('/api/vacation/delete_vacation', { vacation_id: vacation_id })
    .then(res => {
      console.log('inside this:');
      console.log(this);
      parentDisplay.setState({ isLoaded: false });   
    //   this.loadAllVacations();
      this.props.history.push('/my_vacations');
    });
}

  loadAllVacations() {
      if(!this.state.isLoaded) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios.get('/api/vacation')
        .then(res => {
            console.log('got data in component');
            console.log(res.data);                
            this.setState({
                vacations: res.data, 
                isLoaded: true,
            });
            console.log('vacation component loaded');
            console.log('state');
            console.log(this.state);
        })
        .catch((error) => {
            // if(error.response.status === 401) {
            //     this.props.history.push('/login');
            // }
            console.log(error);
        }); 
    }
  }  
  componentDidMount() {
      this.loadAllVacations();
  }

  componentDidUpdate() {
      this.loadAllVacations();
  }


    render() {
        const { error, isLoaded, vacations } = this.state;
        if (error) {
            return <div>Error: {error.message} </div>;
        } else if(!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <div className="VacationDisplayContainer row mb-2">
                {vacations.map(vacation => (
                    <VacationDisplay 
                        vacation_nickname={vacation.vacation_nickname}
                        start_date={vacation.start_date}
                        end_date={vacation.end_date}
                        description={vacation.description}
                        id={vacation._id}
                        key={vacation._id}
                        onDelete={this.onDelete}
                        parentDisplay={this}
                     />
                ))}
            </div>
            );
        }   
    }
}
export default Vacations;