import React, { Component } from 'react';
import MyMap from './MyMap';

import './App.scss';
import spoon from './assets/spoon.svg';
import fork from './assets/fork.svg';
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
                    <div id='App-animations'>
                        <img src={fork} alt='animated fork' />
                        <div id='App-summary'>
                            <h3>Truck tracker for the San Franciscan foodie.</h3>
                            <hr />
                            <h4>Simply drag or zoom the map to find your next, perfect meal.</h4>
                        </div>
                        <img src={spoon} alt='animated spoon' />
                    </div>
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