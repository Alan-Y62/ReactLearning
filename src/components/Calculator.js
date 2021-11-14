import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import logo from '../images/trash_tase_logo.png'
import './calc.css'
import Navbar from './Navbar'

class Calculator extends Component {

    filler = (even) => {
        switch(even.target.id) {
            case 'clear':
                document.getElementById('input').textContent = ""
                document.getElementById('output').textContent = "0"
                break;
            case '1':
                document.getElementById('input').textContent += "1"
                break;
            case '2':
                document.getElementById('input').textContent += "2"
                break;
            case '3':
                document.getElementById('input').textContent += "3"
                break;
            case '4':
                document.getElementById('input').textContent += "4"
                break;
            case '5':
                document.getElementById('input').textContent += "5"
                break;
            case '6':
                document.getElementById('input').textContent += "6"
                break;
            case '7':
                document.getElementById('input').textContent += "7"
                break;
            case '8':
                document.getElementById('input').textContent += "8"
                break;
            case '9':
                document.getElementById('input').textContent += "9"
                break;
            case 'zero':
                document.getElementById('input').textContent += "0"
                break;
            case 'decimal':
                document.getElementById('input').textContent += "."
                break;
            case '+':
                document.getElementById('input').textContent += "+"
                break;
            case '-':
                document.getElementById('input').textContent += "-"
                break;
            case '/':
                document.getElementById('input').textContent += "/"
                break;
            case 'x':
                document.getElementById('input').textContent += "*"
                break;
            default:
                document.getElementById('output').textContent = eval(document.getElementById('input').textContent)
                break;
        }
    }


  render() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="page">
                <div className="output-window">
                    <div id="input"></div>
                    <div id="output">0</div>
                </div>
                <div className="Buttons">
                    <div className="row">
                        <button onClick={this.filler} className="btn btn-outline-primary col" id="clear">AC</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="/">/</button>
                    </div>
                    <div className="row">
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="7">7</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="8">8</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="9">9</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="x">X</button>
                    </div>
                    <div className="row">
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="4">4</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="5">5</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="6">6</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="-">-</button>
                    </div>
                    <div className="row">
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="1">1</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="2">2</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="3">3</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="+">+</button>
                    </div>
                    <div className="row">
                        <button onClick={this.filler} className="btn btn-outline-dark col" id="zero">0</button>
                        <button onClick={this.filler} className="btn btn-outline-dark col-2" id="decimal">.</button>
                        <button onClick={this.filler} className="btn btn-outline-warning col-3" id="equal">=</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Calculator;