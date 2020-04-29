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
			moves,
			clicked: { status: false}
		};
	}

	init = props => {
		let arr = new Array(props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			const columns = new Array(props.gridSize);
			for (let j = 0; j < columns.length; j++) {
				columns[j] = {id: i * arr.length + j, column: j, lightson: true };
			}
			arr[i] = { row: i, columns };
		}
		const moves = [];
		// const maxMoves = props.gridSize ** 2;
		const maxMoves = 2;
		for (let i = 0; i < maxMoves; i++) {
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
		this.setState({ complete: false, grid, moves, clicked: { status: false} });
	}
	
	isInbounds = (row, column) => {
		if (row < 0 || row >= this.props.gridSize) return false;
		if (column < 0 || column >= this.props.gridSize) return false;
		return true;
	}

	updateGrid = (grid, row, column) => {
		const array = this.copyArray(grid);
		array[row].columns[column].lightson = ! array[row].columns[column].lightson;		// toggle the square that was clicked

		if (this.isInbounds(row - 1, column)) {
			array[row - 1].columns[column].lightson = ! array[row - 1].columns[column].lightson;
		}

		if (this.isInbounds(row, column - 1)) {
			array[row].columns[column - 1].lightson = ! array[row].columns[column - 1].lightson;
		}

		if (this.isInbounds(row, column + 1)) {
			array[row].columns[column + 1].lightson = ! array[row].columns[column + 1].lightson;
		}

		if (this.isInbounds(row + 1, column)) {
			array[row + 1].columns[column].lightson = ! array[row + 1].columns[column].lightson;
		}
		return array;
	}

	isComplete = grid => {
		console.log('>>> isComplete; grid ', grid);
		for (let i = 0; i < grid.length; i++) {
			const row = grid[i];
			for (let j = 0; j < row.columns.length; j++) {
				const column = row.columns[j];
				if (column.lightson) {
					console.log('<<< isComplete; false');
					return false;
				}
			}
		}
		console.log('<<< isComplete; TRUE');
		return true;
	}

	handleOnKeyPressed = (id, row, column) => {
		console.log('Board::handleOnKeyPressed; id ', id, ' row ', row, ' column ', column);
		this.setState({ clicked: { status: true, row, column }});
		setTimeout(() => {
			this.executeMove(row,column);
		}, 1000);
	}

	executeMove = (row, column) => {
		console.log('Board::executeMove; row ', row, ' column ', column);
		
		this.setState(prevState => {
			const grid = this.updateGrid(prevState.grid, row, column);
			const moves = [ ...prevState.moves, { row, column }]
			return (
				{ complete: this.isComplete(grid) , grid, moves, clicked: { status: false } }
			)
		});
	}

	/*
TODO; must disable both buttons while this is in progress, also remove clicked.
*/
	handleOnShowme = () => {
		const reverse = [ ...this.state.moves].reverse();

		let ptr = 0;

		this.timer = setInterval(() => {
			console.log('in timer; ptr ', ptr);
			if (ptr < reverse.length) {
				console.log('in reverse a move');
				this.handleOnKeyPressed(0, reverse[ptr].row, reverse[ptr].column);
				ptr++;
			}
			else {
				console.log('clear interval');
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

/*

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
*/

