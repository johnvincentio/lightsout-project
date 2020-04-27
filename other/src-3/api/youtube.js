import axios from 'axios';

const env = {
	YOUTUBE_APIS_URL: process.env.YOUTUBE_APIS_URL,
	YOUTUBE_PLAY_VIDEO_URL: process.env.YOUTUBE_PLAY_VIDEO_URL,
	YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY
}

export default axios.create({
	baseURL: env.YOUTUBE_APIS_URL,
	params: {
		part: 'snippet',
		maxResults: 5,
		key: env.YOUTUBE_API_KEY
	}
});
