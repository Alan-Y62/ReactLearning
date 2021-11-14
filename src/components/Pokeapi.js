import { Component } from "react";
import axios from "axios";
import Navbar from './Navbar'
import './poke.css'
//Starter code
class Pokeapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: {
                id: -1,
                height: -1,
                weight: -1,
                abilities: [],
                name: ""
            },
            searchText: "",
            found: false
        }
    }

    handleInputChange = (event) => {
        this.setState({searchText: event.target.value});
        console.log(this.state.searchText)
    }

    handleSearchClick = async () => {
        let pokeName = this.state.searchText;
        let LinkAPI = 'https://pokeapi.co/api/v2/pokemon/'+pokeName;
        try {
            let response = await axios.get(LinkAPI);
            this.setState({apiData: response.data, found: true})
        }
        catch(error) {
            if(error.response)
            {
                console.log(error.response.data);
                console.log(error.response.status);
                this.setState({found: false});
            }
        }
        console.log(this.state.searchText) 
    }

    makeTable = () => {
        let info = this.state.apiData;
        let table = [];
        table.push(
            <tr key={info.id}>
                <td>Height: {info.height} </td>
                <td>Weight: {info.weight} </td>
            </tr>
        );
        return table;
    }

    makeList = () => {
        let abilities = this.state.apiData.abilities;
        let list = abilities.map( (item,index) => {
            return (
                <li key={index}>{item.ability.name}</li>
            )
        });
        return list;
    }

    //new functionality I added ------------------------------------------------------------------------------------------------
    makeMoves = () => {
        let moves = this.state.apiData.moves;
        let mList = moves.map( (item, index) => {
            return (
                <li key={index}>{item.move.name}</li>
            )
        });
        return mList;
    }


    grabImage = () => { 
        let id = this.state.apiData.id;
        if(id < 10) {
            id = "00" + id;
        }
        else if(id < 100) {
            id = "0" + id;
        }
        let srcimage = "https://serebii.net/swordshield/pokemon/"+id+".png"
        return srcimage;
    }
    //---------------------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="boody">
                    <div className="search">
                        <h3>Search Pokemon</h3>
                        <input type="text" value={this.state.searchText} onChange={this.handleInputChange}></input>
                        <button onClick={this.handleSearchClick}>Search</button>
                    </div>
                    {this.state.found
                    ?   <div>
                            <h1>{this.state.apiData.name}</h1>
                            <div className='row'>
                                <div className="col pokeImage">
                                    <img src={this.grabImage()} alt={this.state.searchText}/>
                                </div>
                                <div className="col">
                                    <table id="data">
                                        <tbody>
                                            {this.makeTable()}
                                        </tbody>
                                    </table>
                                    <p>Abilities</p>
                                    <ul>{this.makeList()}</ul>
                                    <p>MOVES</p>
                                    <ul>{this.makeMoves()}</ul>
                                </div>
                            </div>
                        </div>
                        :<h4>No results</h4>
                    }
                </div>
            </div>
        );
    }
}

export default Pokeapi;