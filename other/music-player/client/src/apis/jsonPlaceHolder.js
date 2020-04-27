//

import axios from 'axios';

import { SERVER_API } from '../config';

export default axios.create({
	baseURL: SERVER_API
});
