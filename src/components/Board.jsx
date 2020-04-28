//

/* eslint-disable no-plusplus */

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			complete: false,
			grid: this.init(props)
		};
	}

	init = props => {
		const arr = new Array(props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			const columns = new Array(props.gridSize);
			for (let j = 0; j < columns.length; j++) {
				columns[j] = {id: i * arr.length + j, column: j, on: true };
			}
			arr[i] = { row: i, columns };
		}
		return arr;
	}

	copyArray = array => {
		const arr = new Array(this.props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = { row: array[i].row, columns: [ ...array[i].columns]};
		}
		return arr;
	}

	handleOnNewgame = () => {
		this.setState({ complete: false, grid: this.init(this.props) });
	}
	
	isInbounds = (row, column) => {
		if (row < 0 || row >= this.props.gridSize) return false;
		if (column < 0 || column >= this.props.gridSize) return false;
		return true;
	}

	isComplete = grid => {
		for (let i = 0; i < grid.length; i++) {
			const row = grid[i];
			for (let j = 0; j < row.columns.length; j++) {
				const column = row.columns[j];
				if (column.on) return false; ;
			}
		}
		return true;
	}

	handleOnKeyPressed = (id, row, column) => {
		console.log('Board::handleOnKeyPressed; id ', id, ' row ', row, ' column ', column);
		this.setState(prevState => {
			const array = this.copyArray(prevState.grid);
			array[row].columns[column].on = ! array[row].columns[column].on;		// toggle the square that was clicked

			if (this.isInbounds(row - 1, column)) {
				array[row - 1].columns[column].on = ! array[row - 1].columns[column].on;
			}

			if (this.isInbounds(row, column - 1)) {
				array[row].columns[column - 1].on = ! array[row].columns[column - 1].on;
			}

			if (this.isInbounds(row, column + 1)) {
				array[row].columns[column + 1].on = ! array[row].columns[column + 1].on;
			}

			if (this.isInbounds(row + 1, column)) {
				array[row + 1].columns[column].on = ! array[row + 1].columns[column].on;
			}

			return (
				{ complete: this.isComplete(array) , grid: array }
			)
		});
	}

	render() {
		console.log('Board::render(); this.state ', this.state, ' this.props ', this.props);
		return (
			<div className="board">
				<div className="board--header">Lights Out</div>
				<div className="board--container">
					{this.state.complete ? (
						<div>Game is complete</div>
					) : (
						<div>Game is not complete</div>
					)}
					<Grid
						grid={this.state.grid}
						onKeyPressed={this.handleOnKeyPressed}
						complete={this.state.complete}
					/>
					<div className="board--restart">
						<button type="button" className="board--restart-button" onClick={() => this.handleOnNewgame()}>
							Restart
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
