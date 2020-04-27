import axios from 'axios';

const env = {
	API_BASE_URL: process.env.API_BASE_URL,
	ACCESS_KEY: process.env.ACCESS_KEY
}

export default axios.create({
	baseURL: env.API_BASE_URL,
	headers: {
		Authorization: `Client-ID ${env.ACCESS_KEY}`,
	}
});
