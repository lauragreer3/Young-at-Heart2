import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../../assets/css/carousel.css";
import Carousel from '../Carousel';

function HomePage(props) {
    return (
        <Carousel />
    );
}

export default HomePage;