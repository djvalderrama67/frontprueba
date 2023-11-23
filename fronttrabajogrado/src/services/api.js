import axios from 'axios';

// Reemplaza 'tu-backend.herokuapp.com' con la URL de tu aplicación backend en Heroku
const API_URL = 'http://localhost:8000';

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

