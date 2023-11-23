import axios from 'axios';

const url = `${process.env.API_URL}/${props.match.params.id}`;

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
