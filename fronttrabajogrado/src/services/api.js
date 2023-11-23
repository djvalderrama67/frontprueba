import axios from 'axios';

// Reemplaza 'tu-backend.herokuapp.com' con la URL de tu aplicación backend en Heroku
const API_URL = 'https://trasteat-bfdad022aa39.herokuapp.com';

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

