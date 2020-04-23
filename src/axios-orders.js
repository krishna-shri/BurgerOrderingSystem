import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-app-6261b.firebaseio.com/'
});

export default instance;