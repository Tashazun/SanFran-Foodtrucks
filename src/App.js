import React, { Component } from 'react';
import MyMap from './MyMap';

import './App.css';
class App extends Component {
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