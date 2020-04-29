//

/* eslint-disable no-plusplus */

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

import { initialize, updateGrid, isComplete } from '../utils';

/*
TODO;
// const maxMoves = props.gridSize ** 2;
uncomment this.

TODO;
While SolveIt is active,
1. must disable both buttons while this is in progress
2. also remove clicked on square.
3. do not show Victory.
When SolveIt is over, enable the buttons, respecting this.state.complete.

On Click Square:
De-activate all squares and buttons until the square has been updated.
*/

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
		console.log('Board::handleOnKeyPressed; now ', Date.now(), ' row ', row, ' column ', column);
		this.setState({ clicked: { status: true, row, column }});
		setTimeout(() => {
			console.log('Board::executeMove; now ', Date.now(), 'row ', row, ' column ', column);
		
			this.setState(prevState => {
				const grid = updateGrid(prevState.grid, row, column);
				const moves = [ ...prevState.moves, { row, column }]
				return (
					{ complete: isComplete(grid) , grid, moves, clicked: { status: false } }
				)
			});
		}, 500);
	}

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

	render() {
		console.log('Board::render(); now ', Date.now(), ' this.state ', this.state, ' this.props ', this.props);
		let disableButtons = false;
		let disableGrid = false;
		if (this.state.complete) disableButtons = true;
		if (this.state.complete) disableGrid = true;

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
						disableGrid={disableGrid}
						clicked={this.state.clicked}
					/>
					<div className="board--buttons">
						<button
							type="button"
							className={`board--restart-button ${disableButtons ? "disableButtons" : "enabledButtons"}`}
							onClick={() => this.handleOnNewgame()}
							disabled={disableButtons}
						>
							Restart
						</button>
						<button
							type="button"
							className={`board--solveit-button ${disableButtons ? "disableButtons" : "enabledButtons"}`}
							onClick={() => this.handleOnSolveIt()}
							disabled={disableButtons}
						>
							Solve it!
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
