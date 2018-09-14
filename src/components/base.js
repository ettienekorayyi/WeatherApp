import React, { Component } from 'react';
const getNameOfDays = (props) => {
    /*if(!props) {
        return <h2>Loading...</h2>;
    }*/
    const nameOfdays = [
        'Sunday',
        'Monday',
        'Tueday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    return <span>{nameOfdays[props]}</span>;
};

export default getNameOfDays;

