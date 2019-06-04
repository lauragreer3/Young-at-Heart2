import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Login.css';
// import Select from 'react-select';
// import { ReactComponent as MagicKingdomLogo } from '../../assets/logos/MagicKingdom.svg';
import WDW_MK_LOGO from '../../assets/logos/MagicKingdom.svg';
import WDW_EPCOT_LOGO from '../../assets/logos/Epcot.svg';
import WDW_HS_LOGO from '../../assets/logos/DisneySorcerer.svg';
import WDW_AK_LOGO from '../../assets/logos/AnimalKingdom.svg';
import UIOA_LOGO from '../../assets/logos/UIOA.png';
import USTUDIOS_FL_LOGO from '../../assets/logos/UniversalStudiosFlorida.png';

const park_options = [
    { value: 'WDW_MK', label: 'Magic Kingdom' },
    { value: 'WDW_EPCOT', label: 'Epcot Center' },
    { value: 'WDW_HS', label: 'Hollywood Studios' },
    { value: 'WDW_AK', label: 'Animal Kingdom' },
    { value: 'USTUDIOS_FL', label: 'Universal Studios Orlando' },
    { value: 'USTUDIOS_IOA_FL', label: 'Islands Of Adventure' },
];

/*
    Small Functional Component for displaying the correct park logo depending on which park is selected
*/
function ParkLogo(props) {
    var park_image = USTUDIOS_FL_LOGO;
    console.log(props.park_selected);
    switch (props.park_selected) {
        case "WDW_MK":
            park_image = WDW_MK_LOGO;
            return ( <img src={park_image} alt="park_logo"></img> );
        case "WDW_EPCOT":
            park_image = WDW_EPCOT_LOGO;
            return ( <img src={park_image} alt="park_logo"></img> );
        case "WDW_HS":
            park_image = WDW_HS_LOGO;
            return ( <img src={park_image} alt="park_logo"></img> );
        case "WDW_AK":
            park_image = WDW_AK_LOGO;
            return ( <img src={park_image} alt="park_logo"></img> );
        case "USTUDIOS_FL":
            park_image = USTUDIOS_FL_LOGO;
            return ( <img src={park_image} alt="park_logo"></img>)
        case "USTUDIOS_IOA_FL":
            park_image = UIOA_LOGO;
            return ( <img src={park_image} alt="park_logo"></img> );
        default:
            park_image = USTUDIOS_FL_LOGO;
            return ( <img src={park_image} alt="park_logo"></img> );
    }

}
class VacationDay extends Component {

    constructor(props) {
        super();
        this.state = {
            current_park: 'WDW_MK',
            previous_park: 'WDW_MK',
            vacation_day: props.vacation_day,
            overall_wait_time: 0,
            rides: []
        };
        this._isLoaded = false;
        this.onChangePark = this.onChangePark.bind(this);
    }

//     handleParkChange = (current_park, { action}) => {
//         if(action === 'input-change') {
//             if(this.state.previous_park ! == current_park)
//             {
//                 this.setState({
//                     current_park: current_park,
//                     previous_park: this.state.current_park
//                 });
//             }
//             console.log('option selected: ');
//             console.log(this.state.current_park);
//     }
// }

onChangePark(e) {
    console.log('called vacationday conchangepark');
    console.log(e);
    // this.setState({current_park: e.target.value});
    // send the data up to the vacation view
    this.props.onChangePark(e.target.value, this.props.park_index);
    this._isLoaded = false;
}


    load_park_wait_times(date_to_load=this.props.vacation_date, park_id=this.props.park_selected) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/parks/' , {
            park_id: park_id,
            date_to_query: date_to_load
        })
        .then(res => {
            console.log('loaded park wait times');
            console.log(res.data);
            this._isLoaded = true;
            this.setState({ rides: res.data });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    componentDidMount() {
        this.load_park_wait_times(this.props.vacation_date, this.state.current_park);
    }

    componentDidUpdate() {
        console.log('component did update');
        if(!this._isLoaded) {
            this.load_park_wait_times();
        }
    }

    displayLogo() {

    }


    render() {
        const date_formatted = new Date(this.props.vacation_date).toLocaleDateString();
        const { rides } = this.state;
        return (
        <div className="row h-40">
            <div className="card col-md-10">
                <div className="card-header">
                    <div className="row">
                        <div className="col-3">{date_formatted}</div>
                        <div className="col-9">
                            <select id={this.props.park_index} value={this.props.park_selected} onChange={this.onChangePark}>
                                { park_options.map((park) => (
                                    <option key={park._id} value={park.value}>{park.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="row"><ParkLogo park_selected={this.props.park_selected} /></div>
                                <div className="row">Overall Wait Time</div>
                                <div className="row"><h3>5/10</h3></div>
                            </div>
                            <div className="col-8 overflow-auto .wait-table-container">
                                <table className="table table-striped table-bordered table-condensed table-sm waiting-table">
                                    <thead>
                                        <tr>
                                            <th className="ride-column">Ride</th>
                                            <th className="wait-column">Wait</th>
                                            <th className="open-column">Open?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="wait-time-table">    
                                        {
                                            rides.map(ride => (
                                                <tr key={ride.id}>
                                                    <td>{ride.name}</td>
                                                    <td>{ride.waitTime}</td>
                                                    <td>{ride.active ? "Yes" : "No"}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }

}

export default VacationDay;