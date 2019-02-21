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
            console.log(json);
            this.setState({ data: json });
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
                    <MyMap />
                </section>
                <footer id='App-footer'>
                    footer
                </footer>
            </div>
        );
    }
}

export default App;