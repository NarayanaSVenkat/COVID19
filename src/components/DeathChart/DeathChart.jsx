import React, { useState, useEffect } from 'react';
import { fetchTimeData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './DeathChart.module.css';

const DeathChart = () => {

    const [timeData, setTimeData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setTimeData(await fetchTimeData());
        }
        fetchAPI();
    });
    function isObjectEmpty(obj) {
        return Object.getOwnPropertyNames(obj).length >= 150
    }


    const deathlineChart = (
        isObjectEmpty(timeData) ? (
            <Line
                data={{
                    labels: timeData['India'].map(a => a.date),
                    datasets: [
                        {
                            data: timeData['India'].map(a => a.deaths),
                            label: 'India',
                            borderColor: '#6768e1',
                            fill: false,
                        },
                        {
                            data: timeData['France'].map(a => a.deaths),
                            label: 'France',
                            borderColor: '#e065e1',
                            fill: false,
                        },
                        {
                            data: timeData['Italy'].map(a => a.deaths),
                            label: 'Italy',
                            borderColor: '#e3e26a',
                            fill: false,
                        },
                        {
                            data: timeData['China'].map(a => a.deaths),
                            label: 'China',
                            borderColor: '#65dd64',
                            fill: false,
                        },
                        {
                            data: timeData['Pakistan'].map(a => a.deaths),
                            label: 'Pakistan',
                            borderColor: '#f26379',
                            fill: false,
                        },
                        {
                            data: timeData['United Kingdom'].map(a => a.deaths),
                            label: 'UK',
                            borderColor: '#444c5c',
                            fill: false,
                        },
                        {
                            data: timeData['US'].map(a => a.deaths),
                            label: 'US',
                            borderColor: '#ce5a57',
                            fill: false,
                        },
                        {
                            data: timeData['Russia'].map(a => a.deaths),
                            label: 'Russia',
                            borderColor: '#78a5a3',
                            fill: false,
                        },
                        {
                            data: timeData['Spain'].map(a => a.deaths),
                            label: 'Spain',
                            borderColor: '#e1b16a',
                            fill: false,
                        },
                    ]
                }}
                options={{
                    title: {
                        display: true,
                        text: 'Country-wise Death rates',
                    }
                }}
            />) : null
    );

    return (
        <div className={styles.container}>
            {deathlineChart}
        </div>
    )
}

export default DeathChart;