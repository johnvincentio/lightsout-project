//

/* eslint-disable no-plusplus */

import React from 'react';
import PropTypes from 'prop-types';

import Sign from './Sign';
import Grid from './Grid';

import { initialize, updateGrid, isComplete } from '../utils';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialize(props.gridSize);
	}

	handleOnRestart = () => {
		this.setState(initialize(this.props.gridSize));
	}
	
	handleOnKeyPressed = (row, column) => {
		if (this.state.clicked.status) return;
		// console.log('Board::handleOnKeyPressed; now ', Date.now(), ' row ', row, ' column ', column);
		this.setState({ clicked: { status: true, row, column }});
		setTimeout(() => {
			// console.log('Board::handleOnKeyPressed::setTimeout; now ', Date.now(), 'row ', row, ' column ', column);
		
			this.setState(prevState => {
				const grid = updateGrid(prevState.grid, row, column);
				const moves = [ ...prevState.moves, { row, column }]
				return (
					{
						complete: isComplete(grid),
						grid,
						moves,
						clicked: { status: false }
					}
				)
			});
		}, 1000);
	}

	handleOnSolveIt = () => {
		// console.log('Board::handleOnSolveIt(); this.state ', this.state, ' this.props ', this.props);
		if (this.state.clicked.status) return;
		this.setState({ solveit: true });
		setTimeout(() => {
			// console.log('Board::handleOnSolveIt::setTimeout; now ', Date.now(), ' this.state.moves ', this.state.moves);
			let ptr = 0;
			const reverse = [ ...this.state.moves].reverse();
			this.timer = setInterval(() => {
				// console.log('in timer; ptr ', ptr);
				if (ptr < reverse.length) {
					// console.log('in reverse a move; now ', Date.now(), ' ptr ', ptr, ' reverse[ptr] ',reverse[ptr]);
					this.handleOnKeyPressed(reverse[ptr].row, reverse[ptr].column);
					ptr++;
				}
				else {
					// console.log('clearInterval');
					this.setState({ solveit: false });
					clearInterval(this.timer);
				}
			}, 2000);
		}, 500);	
	}

	render() {
		// console.log('Board::render(); now ', Date.now(), ' this.state ', this.state, ' this.props ', this.props);
		const { clicked, complete, solveit } = this.state;

		let disableRestartButton = false;
		if (clicked.status || solveit) disableRestartButton = true;

		let disableSolveitButton = false;
		if (clicked.status || solveit || complete) disableSolveitButton = true;

		let disableGrid = false;
		if (solveit || complete) disableGrid = true;

		return (
			<div className="board">
				<Sign complete={complete}/>
				{!complete && (
					<Grid
						grid={this.state.grid}
						onKeyPressed={this.handleOnKeyPressed}
						disableGrid={disableGrid}
						clicked={clicked}
						solveit={solveit}
					/>
				)}
				<div className="board--buttons">
					<button
						type="button"
						className={`board--buttons-restart ${disableRestartButton ? "disableButton" : "enabledButton"}`}
						onClick={() => this.handleOnRestart()}
						disabled={disableRestartButton}
					>
							Restart
					</button>
					<button
						type="button"
						className={`board--buttons-solveit ${disableSolveitButton ? "disableButton" : "enabledButton"}`}
						onClick={() => this.handleOnSolveIt()}
						disabled={disableSolveitButton}
					>
							Solve it!
					</button>
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

/*
	handleOnSolveIt = () => {
		console.log('Board::handleOnSolveIt(); this.state ', this.state, ' this.props ', this.props);
		if (this.state.clicked.status) return;

		const reverse = [ ...this.state.moves].reverse();

		let ptr = 0;
		this.timer = setInterval(() => {
			// console.log('in timer; ptr ', ptr);
			if (ptr < reverse.length) {
				console.log('in reverse a move; now ', Date.now(), ' ptr ', ptr, ' reverse[ptr] ',reverse[ptr]);
				this.handleOnKeyPressed(reverse[ptr].row, reverse[ptr].column);
				ptr++;
			}
			else {
				console.log('clearInterval');
				clearInterval(this.timer);
			}
		}, 2000);
	}
*/
