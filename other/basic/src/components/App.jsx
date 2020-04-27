//

import React from 'react';

import axios from 'axios';

import Header from './header/Header';
import Banner from './header/Banner';
import User from './User';
import UserButtons from './UserButtons';
import Followers from './Followers';

const TOKEN = process.env.GITHUB_TOKEN;

class App extends React.Component {
	state = {
		user: null,
		error: null,
		isLoading: false
	};

	onSearchSubmit = async search => {
		// console.log('App::onSearchSubmit; search ', search);
		this.setState({ isLoading: true });
		try {
			const response = await axios.get(`https://api.github.com/users/${search}`, {
				headers: {
					Authorization: `token ${TOKEN}`
				}
			});
			const { data } = response;
			this.setState({
				user: data,
				error: null,
				isLoading: false
			});
		} catch (error) {
			this.setState({
				user: null,
				error,
				isLoading: false
			});
		}
	};

	onSearchSelected = () => {
		this.setState({
			user: null,
			error: null,
			isLoading: false
		});
	};

	render() {
		// console.log('App::render(); this.state ', this.state, ' this.props ', this.props);
		const { user, isLoading, error } = this.state;

		// console.log('App::render(); user ', user);
		const listUser = user !== null;
		if (isLoading) {
			return <p>Loading ...</p>;
		}
		return (
			<div>
				<Header search={listUser} onSearchSelected={this.onSearchSelected} />
				<main role="main">
					{!listUser && <Banner onSubmit={this.onSearchSubmit} />}
					{listUser && (
						<div>
							<User user={user} />
							<UserButtons user={user} />
							<Followers id={user.id} url={user.followers_url} count={user.followers} onSelect={this.onSearchSubmit} />
						</div>
					)}
					{error && <div className="error">Unable to find the user requested</div>}
				</main>
			</div>
		);
	}
}

export default App;

/*
error && <div className="error">Unable to get user; {error.message}</div>}
*/

/*
	async fetchData(search) {
		try {
			const response = await jsondata.get(`./users/${search}`);
			console.log('response ', response);
			console.log('Success!');
			console.log(response.status);
			console.log(response.data);
			const { data } = response;
			this.setState({ users: { id: data.id, user: data }, user: data.id, errorText: null });
		} catch (e) {
			console.error('Failure!');
			console.error(e.response.status);
			console.log('response ', e.response);
			this.setState({ user: null, followers: null, errorText: `User ${search}; ${e.response.data.message}` });
		}
	}
*/

/*
	async fetchData(search) {
		try {
			const response = await axios.get(`https://api.github.com/users/${search}`);
			console.log('response ', response);
			console.log('Success!');
			console.log(response.status);
			console.log(response.data);
			const { data } = response;
			this.setState({ users: { id: data.id, user: data }, user: data.id, errorText: null });
		} catch (e) {
			console.error('Failure!');
			console.error(e.response.status);
			console.log('response ', e.response);
			this.setState({ user: null, errorText: `User ${search}; ${e.response.data.message}` });
		}
	}
*/
