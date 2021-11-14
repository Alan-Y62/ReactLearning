import React, {Component} from 'react';
import './Home.css'
import Navbar from './Navbar'

class Home extends Component {
  render() {

    function clicker() {
        let e = document.getElementById('title')
        e.textContent = 'Changed'
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="body-part">
                <table>
                <tr>
                    <th id='title'>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                </table>
                <button onClick={this.props.diffclick}>Click Me</button>
            </div>
        </div>
    );
  }
}

export default Home;