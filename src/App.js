import React, { Component } from 'react';
import CountrySelect from './components/CountrySelect';
import CountryInfo from './components/CountryInfo';
import {Container} from "react-bootstrap"
import './App.css';

class App extends Component {
    state = {
        selectedCountry: null
    }

    changeCountry = (e) => {
        this.setState(
            {selectedCountry: e.target.value}
        );
    }

    render() {
        return (
            <Container className="App">
                <h1 className = "spaced"> COVID-19 Data by Country</h1>
                <CountrySelect className = "spaced" changeCountry={this.changeCountry} />
                <CountryInfo 
                    className = "spaced" 
                    selectedCountry={this.state.selectedCountry} 
                />
            </Container>
        );
    }
}

export default App;