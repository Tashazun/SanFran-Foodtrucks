import React, { Component } from 'react';
import MyMap from './MyMap';

import './App.css';
class App extends Component {

    state = {
        data: null,
    };

    async componentDidMount() {
        try {
            const response = await fetch('https://data.sfgov.org/resource/bbb8-hzi6.json');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const newData = await json.map(field => ({
                applicant: field.applicant,
                coords: field.location_2.coordinates,
                endtime: field.endtime,
                location: field.location,
                optionaltext: field.optionaltext,
                starttime: field.starttime,
            }));
            this.setState({ data: newData });
        } catch (err) {
            console.log(err);
        }
    };

    render() {


        return (
            <div id='App-container'>
                <header id='App-header'>
                    <h2>Mobile Eats</h2>
                    <h4>Truck tracker for the San Franciscan foodie.</h4>
                </header>
                <section id='App-map-frame'>
                    <MyMap data={this.state.data}/>
                </section>
                <footer id='App-footer'>
                    footer
                </footer>
            </div>
        );
    }
}

export default App;