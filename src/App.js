import React from "react";
import SearchBox from "./SearchBox";
import './App.css';
import Btn from "./Btn"
import Info from "./Info"
import "tachyons";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      searchField: "",
      data: "",
      didSearched: false
    };
  }
  
  onSearchChange = (event) =>{
    this.setState({searchField: event.target.value});
  };
  
  onButtonClick = (event) =>{
    let search = "https://swapi.py4e.com/api/" + this.state.searchField;
    this.setState({didSearched: true});

    fetch(search)
    .then(async (resp) => {
      if (resp.ok) {
          resp = await resp.json();
          this.setState({data: resp});
      }
      else{
        this.setState({data: {}});
      }
  }).catch(e => console.log('Connection error', e))
    
  }
  
  render(){
    return(
    <div className="app">
      <h1 className="shadow-3">Star Wars api</h1>
      <SearchBox searchChange = {this.onSearchChange} onPress = {this.onButtonClick}/>
      <Info data = {this.state.data} firstSearch = {this.state.didSearched}/>
    </div>
    );
  }
}

export default App;
