import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import logo from '../images/aspect_ratio_hack.png'
import Navbar from './Navbar'
import './home.css'

class Home extends Component {
  render() {
    return (
        <div>
          <Navbar></Navbar>
          <div className="body-part">
            <h1> My Page for Learning React</h1>
            <div className="img-con">
              <img src={logo} alt="Failed to Load"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;