import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Pokeapi from './components/Pokeapi';
import Todolist from './components/Todolist';

class App extends Component {

  constructor() {
    super();

    this.state = {
    }
  }

  diffclick() {
    let e = document.getElementById('title')
    let list = ['A','B','C','D','E']
    let r = Math.floor(Math.random() * list.length);
    e.textContent = list[r];
  }

  render() {
    const HomeComponent = () => (<Home diffclick={this.diffclick}/>);
    const CalcComponent = () => (<Calculator/>)
    const PokeComponent = () => (<Pokeapi/>)
    const TodolistComponent = () => (<Todolist/>)
    
    return (
      <Router>
        <Routes> {/*React Router V6 new implementation*/}
          <Route exact path="/" element={<HomeComponent/>}/> {/*Element is new as well now adding '< ... />' to it*/}
          <Route exact path='/calc' element={<CalcComponent/>}/>
          <Route exact path='/pokeapi' element={<PokeComponent/>}/>
          <Route exact path='/todolist' element={<TodolistComponent/>}/>
        </Routes>
      </Router>
    );
  }
}


export default App;
