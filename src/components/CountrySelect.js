import React, {Component} from 'react';

class CountrySelect extends Component {
    state = {
        countries: []
    }

    async componentDidMount() {
        try {
            const url = "https://api.covid19api.com/countries";
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            this.setState({countries: data});
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <select onChange={this.props.changeCountry}>
                    <option>Select a country</option>
                    {this.state.countries.map((country) => {
                        return <option value={country.Slug} key={country.Slug}>{country.Country}</option>
                    })}
                </select>
            </div>
        );
    }
}

export default CountrySelect;