import React from 'react';

import { Cards, Chart, StatePicker, TimeChart, DeathChart, RecovChart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import image from './images/title2.png'
//import flag from './images/india.svg'

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    render() {

        const { data } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                {/* <p className={styles.title}> COVID-19 cases in <img className={styles.flag} src={flag}></img></p> */}
                <Cards data={data} />
                <Chart data={data} />
                <TimeChart data={data} />
                <RecovChart data={data} />
                <DeathChart data={data} />
                <p className={styles.title}>This website is possible because of data provided by <a href={"https://github.com/pomber/covid19"}>Rodrigo Pombo.</a></p>
            </div>
        )
    }
}

export default App;