//

/* eslint-disable no-plusplus */

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

import { initialize, updateGrid, isComplete } from '../utils';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialize(props.gridSize);
	}

	handleOnNewgame = () => {
		this.setState(initialize(this.props.gridSize));
	}
	
	handleOnKeyPressed = (row, column) => {
		if (this.state.clicked.status) return;
		console.log('Board::handleOnKeyPressed; row ', row, ' column ', column);
		this.setState({ clicked: { status: true, row, column }});
		setTimeout(() => {
			this.executeMove(row,column);
		}, 1500);
	}

	executeMove = (row, column) => {
		console.log('Board::executeMove; row ', row, ' column ', column);
		
		this.setState(prevState => {
			const grid = updateGrid(prevState.grid, row, column);
			const moves = [ ...prevState.moves, { row, column }]
			return (
				{ complete: isComplete(grid) , grid, moves, clicked: { status: false } }
			)
		});
	}

	/*
TODO; must disable both buttons while this is in progress, also remove clicked.
*/
	handleOnShowme = () => {
		console.log('Board::handleOnShowme(); this.state ', this.state, ' this.props ', this.props);
		if (this.state.clicked.status) return;

		const reverse = [ ...this.state.moves].reverse();

		let ptr = 0;
		this.timer = setInterval(() => {
			// console.log('in timer; ptr ', ptr);
			if (ptr < reverse.length) {
				console.log('in reverse a move; ptr ', ptr, ' reverse[ptr] ',reverse[ptr]);
				this.handleOnKeyPressed(reverse[ptr].row, reverse[ptr].column);
				ptr++;
			}
			else {
				console.log('clearInterval');
				clearInterval(this.timer);
			}
		}, 2000);
	}

	render() {
		console.log('Board::render(); this.state ', this.state, ' this.props ', this.props);
		return (
			<div className="board">
				{/* <div className="board--header">Lights Out</div> */}
				<div className="board--container">
					{this.state.complete &&
						<div className="board--status">Congratulations on your Victory!!!</div>
					}
					<Grid
						grid={this.state.grid}
						onKeyPressed={this.handleOnKeyPressed}
						complete={this.state.complete}
						clicked={this.state.clicked}
					/>
					<div className="board--restart">
						<button type="button" className="board--restart-button" onClick={() => this.handleOnNewgame()}>
							Restart
						</button>
						<button type="button" className="board--showme-button" onClick={() => this.handleOnShowme()}>
							Show Me!
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	gridSize: PropTypes.number
}

Board.defaultProps = {
	gridSize: 5
}

export default Board;
