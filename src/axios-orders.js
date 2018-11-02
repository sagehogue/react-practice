import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-burger-buil-34571.firebaseio.com/',
});

export default instance;