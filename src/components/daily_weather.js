import React, { Component } from 'react';
import RenderIcons from './icons';
import getNameOfDays from './base';
import axios from 'axios';


export default class DailyWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timezone: '',
            dailyWeather: {}
        };
        
    }

    componentDidMount() { // lat = 14.5995 long = 120.9842 
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d63fb2636b6ed1060be85b7f068f493/-33.865143,151.209900`)
            .then((result) => {
                this.setState({ timezone: result.data.timezone });
                this.setState({ dailyWeather: result.data.daily });
            });
    }

    render() {
        const { dailyWeather } = this.state;
        
        if (!dailyWeather.data) {
            return <h2>Loading...</h2>
        }

        const data = dailyWeather.data.map((data, key) => {
            return (
               
                <div className="panel" key={`arr${key}`}>
                    <div className="data-block" >
                        <div className="weather-icon" >
                            <RenderIcons ref={this.iconRefs} icon={data.icon}/>
                        </div >
                        <div className="current-temperature">
                            <h1>{Math.round((data.temperatureMax - 32) * (5 / 9)).toString()}&deg;</h1>
                        </div>
                        <div className="current-day">
                            <div>{getNameOfDays(new Date(data.time * 1000).getDay())}</div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="panel-block">
                {data}
            </div>
        );
    }
}; 