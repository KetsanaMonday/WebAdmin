 
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9000/api';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';




//const api = "https://web-shop-api.onrender.com/api";
export default axios;