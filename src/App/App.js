import React, { Component } from 'react';
import MyMap from '../Map/MyMap';

import './App.scss';
import spoon from '../assets/spoon.svg';
import fork from '../assets/fork.svg';
import { FaGithubSquare, FaLinkedinIn, FaTwitter, FaReact } from 'react-icons/fa';

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
                coords: [field.location_2.coordinates[1], field.location_2.coordinates[0]],
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
                    {data !== null && <MyMap data={data}/>}
                </section>
                <footer id='App-footer'>
                    <div id='App-credits'>
                        <p>Photo by <a href='https://unsplash.com/search/photos/tobias-zils'>Tobias Zils</a> on <a href='https://unsplash.com/'>Unsplash</a></p>
                        <p>Candy coded with <FaReact /> and a few other things.</p>
                    </div>
                    <div id='App-links'>
                        <a href='https://github.com/Tashazun'>
                            <FaGithubSquare />
                        </a>
                        <a href='https://www.linkedin.com/in/tashazuniga/'>
                            <FaLinkedinIn />
                        </a>
                        <a href='https://twitter.com/artofobscura'>
                            <FaTwitter />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;