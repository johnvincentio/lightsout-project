//

/* eslint-disable no-plusplus */

import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
		const { grid, moves } = this.init(props);
		this.state = {
			complete: false,
			grid,
			moves
		};
	}

	init = props => {
		let arr = new Array(props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			const columns = new Array(props.gridSize);
			for (let j = 0; j < columns.length; j++) {
				columns[j] = {id: i * arr.length + j, column: j, on: true };
			}
			arr[i] = { row: i, columns };
		}
		const moves = [];
		for (let i = 0; i < props.gridSize ** 2; i++) {
			const obj = {
				row: Math.floor(Math.random() * props.gridSize),
				column: Math.floor(Math.random() * props.gridSize)
			}
			arr = this.updateGrid(arr, obj.row, obj.column);
			moves.push(obj);
		}
		return { grid: arr, moves };
	}

	copyArray = array => {
		const arr = new Array(this.props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = { row: array[i].row, columns: [ ...array[i].columns]};
		}
		return arr;
	}

	handleOnNewgame = () => {
		const { grid, moves } = this.init(this.props);
		this.setState({ complete: false, grid, moves });
	}
	
	isInbounds = (row, column) => {
		if (row < 0 || row >= this.props.gridSize) return false;
		if (column < 0 || column >= this.props.gridSize) return false;
		return true;
	}

	updateGrid = (grid, row, column) => {
		const array = this.copyArray(grid);
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
		return array;
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
			const grid = this.updateGrid(prevState.grid, row, column);

			// const array = this.copyArray(prevState.grid);
			// array[row].columns[column].on = ! array[row].columns[column].on;		// toggle the square that was clicked

			// if (this.isInbounds(row - 1, column)) {
			// 	array[row - 1].columns[column].on = ! array[row - 1].columns[column].on;
			// }

			// if (this.isInbounds(row, column - 1)) {
			// 	array[row].columns[column - 1].on = ! array[row].columns[column - 1].on;
			// }

			// if (this.isInbounds(row, column + 1)) {
			// 	array[row].columns[column + 1].on = ! array[row].columns[column + 1].on;
			// }

			// if (this.isInbounds(row + 1, column)) {
			// 	array[row + 1].columns[column].on = ! array[row + 1].columns[column].on;
			// }

			return (
				{ complete: this.isComplete(grid) , grid }
			)
		});
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
