import axios from 'axios';

const url = "https://api.rootnet.in/covid19-in/stats/";
const global_url = "https://covid19.mathdro.id/api";
const timeseries_url = "https://pomber.github.io/covid19/timeseries.json";


export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        const modifiedData = {
            confirmed: data.data.summary.total,
            deaths: data.data.summary.deaths,
            discharged: data.data.summary.discharged,
        }
        return modifiedData;
    }
    catch (error) {
    }
}



export const fetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${global_url}/daily/`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    }
    catch (error) {

    }
}

export const fetchTimeData = async () => {

    try {
        const { data } = await axios.get(`${timeseries_url}`);
        return data;
    }
    catch (error) {

    }
}