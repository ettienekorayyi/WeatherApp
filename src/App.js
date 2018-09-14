import React, { Component } from "react";
import { hot } from 'react-hot-loader'
import Weather from './components/weather';
import Content from './components/content';
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Content />
                <Weather />
            </div>
        </div>
    );
}

export default hot(module)(App);