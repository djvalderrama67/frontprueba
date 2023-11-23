import axios from 'axios';

const port = number(process.env["port"]) || 8000;

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
