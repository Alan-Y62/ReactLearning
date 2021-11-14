import React, {Component} from 'react';
import Navbar from './Navbar'

class Todolist extends Component {
    constructor() {
        super();
        
        this.state = {
            List: [],
            addText: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({addText: event.target.value});
    }

    async componentDidMount() {
        this.setState({
            List: [
                {'name': 'Filler #1', 'completed': false},
                {'name': 'Filler #2', 'completed': true},
                {'name': 'Filler #3', 'completed': false},
            ]
        })
    }

    makeList() {
        let List = this.state.List;
        let mList = List.map( (item, index) => {
            return (
                <div key={index} className="form-check">
                    <input className="form-check-input" type="checkbox" id={index}/>
                    <label className="form-check-label" htmlFor={index}> {item.name} </label>
                </div>
            )
        });
        return mList;
    }

    addtoList = () => {
        let itemName = this.state.addText;
        this.setState({
            List: [...this.state.List,{name: itemName,completed: false}]
        })
        console.log(this.state.List)
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container">
                    {this.makeList()}
                </div>
                <div className="search">
                    <input type="text" value={this.state.addText} onChange={this.handleInputChange}></input>
                    <button className="btn" onClick={this.addtoList}>Add</button>
                </div>
            </div>
        )
    }
}

export default Todolist;