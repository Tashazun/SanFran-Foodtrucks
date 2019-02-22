import React, { Component } from 'react';
import MyMap from './MyMap';

import './App.scss';
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
        const { data } = this.state;

        return (
            <div id='App-container'>
                <header id='App-header'>
                    <div id='App-hero'>
                        <h2>Mobile Eats</h2>
                    </div>
                    <h4>Truck tracker for the San Franciscan foodie.</h4>
                </header>
                <section id='App-map-frame'>
                    <MyMap data={data}/>
                </section>
                <footer id='App-footer'>
                    Photo by Tobias Zils on Unsplash
                </footer>
            </div>
        );
    }
}

export default App;