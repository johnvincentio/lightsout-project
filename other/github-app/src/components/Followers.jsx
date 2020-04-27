//

import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const TOKEN = process.env.GITHUB_TOKEN;

class Followers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// id: props.id,
			count: props.count,
			url: props.url,
			followers: [],
			page: null,
			error: null,
			isLoading: false
		};
	}

	componentDidMount() {
		// console.log('>>> Followers; componentDidMount; props ', this.props);
		this.fetchFollowers();
		// console.log('<<< Followers; componentDidMount');
	}

	// TODO; may not need this...
	componentDidUpdate(prevProps) {
		// console.log('>>> Followers; componentDidUpdate; props ', this.props, ' prevProps ', prevProps);
		if (prevProps.id !== this.props.id) {
			// console.log('--- Followers; componentDidUpdate; get fetchFollowers');
			this.fetchFollowers();
		}
		// console.log('<<< Followers; componentDidUpdate');
	}

	fetchFollowers = (page = 1) => {
		if (page < 1 || page > this.pageCount()) {
			return;
		}
		this.setState({ isLoading: true });
		axios
			.get(this.state.url, {
				params: {
					page
				},
				headers: {
					Authorization: `token ${TOKEN}`
				}
			})
			.then(response => {
				const { data } = response;
				this.setState({
					followers: data,
					error: null,
					isLoading: false,
					page
				});
			})
			.catch(error => {
				this.setState({
					followers: null,
					error,
					isLoading: false,
					page: null
				});
			});
	};

	handlePrevious = () => {
		this.fetchFollowers(this.state.page - 1);
	};

	handleNext = () => {
		this.fetchFollowers(this.state.page + 1);
	};

	pageCount = () => {
		return Math.ceil(this.state.count / 30);
	};

	selectUser = login => {
		this.props.onSelect(login);
	};

	renderList() {
		// console.log('Followers::renderList(); props ', this.props, ' this.state ', this.state);
		const { followers } = this.state;
		return followers.map(item => (
			<figure key={item.id} className="followers--item">
				<button className="followers--item-button" type="button" onClick={() => this.selectUser(item.login)}>
					<img src={item.avatar_url} alt={item.login} />
				</button>
				<figcaption>
					<p>{item.login}</p>
				</figcaption>
			</figure>
		));
	}

	render() {
		// console.log('Followers::render(); props ', this.props, ' this.state ', this.state);
		const { page, isLoading, error } = this.state;
		if (isLoading) {
			return <p>Loading ...</p>;
		}
		if (error) {
			return <p className="error">Unable to get followers; {error.message}</p>;
		}
		if (!page) {
			return null;
		}

		const isMore = page < this.pageCount();
		const isPrevious = page > 1;
		// console.log('isMore ', isMore, ' isPrevious ', isPrevious);

		const previous = '<';
		const next = '>';

		return (
			<section className="followers">
				<h2 className="followers--header">Followers</h2>

				<div className="followers--list">{this.renderList()}</div>

				<div className="followers--buttons">
					<button type="button" className="followers--button" onClick={this.handlePrevious} disabled={!isPrevious}>
						{previous}
					</button>
					<div className="followers--text">
						Page {page} of {this.pageCount()}
					</div>
					<button type="button" className="followers--button" onClick={this.handleNext} disabled={!isMore}>
						{next}
					</button>
				</div>
			</section>
		);
	}
}

Followers.propTypes = {
	id: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default Followers;
