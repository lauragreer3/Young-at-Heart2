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

  componentDidMount() {
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
    //   fetch("/api/vacation/")
    //   .then(res => res.json())
    //   .then(
    //       (result) => {
    //           this.setState({
    //               isLoaded: true,
    //               vacations: result.vacations
    //         });
    //         },
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //       });
    //   }
    // );  
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
                        id={vacation._id}
                        key={vacation._id}
                        
                     />
                ))}
            </div>
            );
        }   
    }
}
export default Vacations;