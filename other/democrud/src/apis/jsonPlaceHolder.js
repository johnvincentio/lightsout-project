import axios from 'axios';

/*
Visit https://my-json-server.typicode.com/<your-username>/<your-repo> 

baseURL: 'https://jsonplaceholder.typicode.com/johnvincentio/democrud'

baseURL: 'https://my-json-server.typicode.com/johnvincentio/democrud'
*/

export default axios.create({
	baseURL: 'https://my-json-server.typicode.com/johnvincentio/democrud'
});
