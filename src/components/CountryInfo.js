import React, {Component} from 'react';
import {Table} from "react-bootstrap"
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
            <Table className = "spaced" striped bordered hover>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Country}</td>
                        <td>{Confirmed}</td>
                        <td>{Deaths}</td>
                        <td>{Recovered}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default CountryInfo;