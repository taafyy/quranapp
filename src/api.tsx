import axios, { AxiosInstance } from "axios";

// create an axios instance
const api: AxiosInstance = axios.create({
    baseURL: 'https://api.quran.com/'
});

export async function get() {
    try {
        const response = await api.get('/api/v4/chapters');
        console.log('Response:', response.data);
    } 
    catch (error) {
        console.log('Error:', error);
    }
}


