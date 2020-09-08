import React, { Component } from 'react';
import CountrySelect from './components/CountrySelect';
import CountryInfo from './components/CountryInfo';

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
            <div className="App">
                <h1>COVID-19 Data by Country</h1>
                <CountrySelect changeCountry={this.changeCountry} />
                <CountryInfo selectedCountry={this.state.selectedCountry} />
            </div>
        );
    }
}

export default App;