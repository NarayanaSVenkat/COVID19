import axios from 'axios';

const url = "https://api.rootnet.in/covid19-in/stats/";

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

// export const fetchDailyData = async () => {
//     try {
//         const { data } = await axios.get('${url}/history');
//         console.log(data);
//     }
//     catch (error) {

//     }
// }