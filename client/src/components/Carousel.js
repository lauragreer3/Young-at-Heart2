import React from 'react';
import ResearchImage from '../assets/downloaded/research.gif';
import PlanImage from '../assets/downloaded/plan_hulk.jpg';
import AdaptImage from '../assets/downloaded/sloth.jpg';

class Carousel extends React.Component {
    constructor() {
      super();
      this.state = { someKey: 'someValue' };
}

render() {
    //return <p>{this.state.someKey}</p>
    return(
        <div>
        <div className="carousel slide" date-ride="carousel" id="carousel">
            <ol className="carousel-indicators">
                <li className="active" data-slide-to="0" data-target="#carousel"></li>
                <li data-slide-to="1" data-target="#carousel"></li>
                <li data-slide-to="2" data-target="#carousel"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <h1>Welcome to Young at Heart!</h1>
                            <p>Young at heart lets you craft the perfect theme park vacation in Orlando by letting you spend the least amount of time in lines during your getaway.</p>
                            <p><a href="#" className="btn btn-lg btn-primary">Sign Up Today</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#666"/></svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Do Universal and Disney the right way</h1>
                            <p>We offer live wait times and monitoring tools for all of the best rides at 6 parks across Orlando.</p>
                        </div>
                    </div>    
                </div>
                <div className="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#666"/></svg>
                    <div className="container">
                        <div className="carousel-caption text-right">
                            <h1>Accurate predictions. Lightning fast live data.</h1>
                            <p>Our data is pulled from multiple trusted sources and is assured to help you both plan ahead and react in realtime to changes to ride wait times across all of the parks you have access to.</p>
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                        </div>
                    </div>    
                </div>
            </div>
            <a href="#carousel" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a href="#carousel" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="container marketing">
            <div className="row">
                <div className="col-lg-4">
                    <img src={PlanImage} alt="Planning" className="img-fluid" />
                    <h2>Plan</h2>
                    <p>Create a live vacation planner for your theme-park vacation to Orlando! Our tools make it easy to know where to go for the shortest lines, best rides, schedules and more!</p>
                </div>
                <div className="col-lg-4">
                    <img src={ResearchImage} alt="Research" className="img-fluid" height="180" width="180"/>
                    <h2>Research</h2>
                    <p>Find out important schedules for attractions, dining, accomodations, and more!</p>
                </div>
                <div className="col-lg-4">
                    <img src={AdaptImage} alt="Adapt" className="img-fluid" />
                    <h2>Adapt</h2>
                    <p>Get live updates for your favorite rides and amusements at the best parks in Orlando so you can take advantage of shorter lines everywhere you go! Know exactly when to use that Hopper pass to jump from park to park when the time is just right.</p>
                </div>
            </div>
        </div>
    </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Carousel;
