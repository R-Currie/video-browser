import axios from 'axios';

const KEY = "AIzaSyDDX4lmXZoD2DaQlfWId0_2vNy3thYcU8E";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});