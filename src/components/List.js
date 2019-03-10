import React, { Component } from 'react';
import './App.css';

const codeList = ['Socer', 'Basketball', 'Volleyball', 'Climbing', 'Hiking', 'Skiing', 'Snowshoeing', 'Snowboarding', 'Camping', 'Cycling', 'Mountain Biking', 'Trail Running'];

export const codeList = () => (
    <ul>
        { items.map(item => (
            <li>{ item }</li>
        ))}
    </ul>
);