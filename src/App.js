import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import VoiceRecorderApp from './components/VoiceRecorderApp';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <VoiceRecorderApp/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;
