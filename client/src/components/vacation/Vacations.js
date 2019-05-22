import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
import { VacationDisplay } from './VacationDisplay';

class VacationDisplay extends Component {

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
      fetch("/api/vacation/")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  isLoaded: true,
                  vacations: result.vacations
            });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
          });
      }
    );  
  }  


    render(props) {
        const { error, isLoaded, vacations } = this.state;
        if (error) {
            return <div>Error: {error.message} </div>;
        } else if(!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <div className="VacationDisplayContainer row mb-2">
                {vacations.map(vacation => (
                    <VacationDisplay vacation={vacation} />
            ))}
            </div>
        );
        }   
    }
}