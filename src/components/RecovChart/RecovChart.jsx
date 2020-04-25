import React, { useState, useEffect } from 'react';
import { fetchTimeData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './RecovChart.module.css';

const RecovChart = () => {

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


    const recovlineChart = (
        isObjectEmpty(timeData) ? (
            <Line
                data={{
                    labels: timeData['India'].map(a => a.date),
                    datasets: [
                        {
                            data: timeData['India'].map(a => a.recovered),
                            label: 'India',
                            borderColor: '#6768e1',
                            fill: false,
                        },
                        {
                            data: timeData['France'].map(a => a.recovered),
                            label: 'France',
                            borderColor: '#e065e1',
                            fill: false,
                        },
                        {
                            data: timeData['Italy'].map(a => a.recovered),
                            label: 'Italy',
                            borderColor: '#e3e26a',
                            fill: false,
                        },
                        {
                            data: timeData['China'].map(a => a.recovered),
                            label: 'China',
                            borderColor: '#65dd64',
                            fill: false,
                        },
                        {
                            data: timeData['Pakistan'].map(a => a.recovered),
                            label: 'Pakistan',
                            borderColor: '#f26379',
                            fill: false,
                        },
                        {
                            data: timeData['United Kingdom'].map(a => a.recovered),
                            label: 'UK',
                            borderColor: '#444c5c',
                            fill: false,
                        },
                        {
                            data: timeData['US'].map(a => a.recovered),
                            label: 'US',
                            borderColor: '#ce5a57',
                            fill: false,
                        },
                        {
                            data: timeData['Russia'].map(a => a.recovered),
                            label: 'Russia',
                            borderColor: '#78a5a3',
                            fill: false,
                        },
                        {
                            data: timeData['Spain'].map(a => a.recovered),
                            label: 'Spain',
                            borderColor: '#e1b16a',
                            fill: false,
                        },
                    ]
                }}
                options={{
                    title: {
                        display: true,
                        text: 'Country-wise Recovery rates',
                    }
                }}
            />) : null
    );

    return (
        <div className={styles.container}>
            {recovlineChart}
        </div>
    )
}

export default RecovChart;