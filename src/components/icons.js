import React, { Component } from 'react';

var skycons = new Skycons({ "color": "orange" });

class RenderIcons extends Component {
    constructor(props) {
        super(props);
        this.iconRefs = React.createRef();
        this.icon = props.icon
        console.log(this.icon);
    }
    

    componentDidMount() {
        
        if(this.icon === 'wind') {
            skycons.set(this.iconRefs.current, Skycons.WIND);
        } else if(this.icon === 'partly-cloudy-night') {
            skycons.set(this.iconRefs.current, Skycons.PARTLY_CLOUDY_NIGHT);
        } else if(this.icon === 'partly-cloudy-day') {
            skycons.set(this.iconRefs.current, Skycons.PARTLY_CLOUDY_DAY);
        } else {
            skycons.set(this.iconRefs.current, Skycons.CLEAR_DAY);
        }

        skycons.play();
    }

    render() {
        return (<canvas id={`${this.icon}`} ref={this.iconRefs} width="64" height="64"></canvas>);
    }
};

export default RenderIcons;