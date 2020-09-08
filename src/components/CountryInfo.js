import React, {Component} from 'react';

class CountryInfo extends Component {
    state = {
        countryData: null
    }

    componentDidMount() {
        this.fetchCountryData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCountry !== this.props.selectedCountry) {
            this.fetchCountryData();
        }
    }

    async fetchCountryData() {
        try {
            const url = `https://api.covid19api.com/total/country/${this.props.selectedCountry}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            this.setState({countryData: data[data.length - 1]});
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        if (this.state.countryData == null) {
            return null;
        }

        const { Country, Confirmed, Deaths, Recovered } = this.state.countryData;
        return (
            <div>
                <h3><i>{Country}</i></h3>
                <p>Confirmed cases: {Confirmed}</p>
                <p>Deaths: {Deaths}</p>
                <p>Recovered: {Recovered}</p>
            </div>
        );
    }
}

export default CountryInfo;