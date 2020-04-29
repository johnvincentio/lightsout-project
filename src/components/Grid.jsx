//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types'

class Grid extends React.Component {

	onHandleClick = (id, row, col) => {
		// console.log('onHandleClick; id ', id, ' row ', row, ' col ', col);
		this.props.onKeyPressed(id, row, col);
	}

	render() {
		console.log('Grid::render(); this.props ', this.props);
		const { grid, complete, clicked } = this.props;
		// console.log('clicked ', clicked);
		return (
			<div className="grid">
				{grid.map((row) => {
					return (
						<div key={row.row} className="grid--row">
							{row.columns.map((column) => {

								const abc = clicked.status && clicked.row === row.row && clicked.column === column.column;
								// console.log('abc ', abc);
								if (complete) return (
									<button 
										type="button"
										key={column.id}
										className={`grid--square ${column.on ? "on" : "off"}`}
										disabled
									>
										row={row.row}, column={column.column}, active={column.on}, id={column.id}
									</button>
								);
								return (
									<button 
										type="button"
										key={column.id}
										className={`grid--square ${column.on ? "on" : "off"} ${abc ? "animate" : ""} `}
										onClick={() => this.onHandleClick(column.id, row.row, column.column)}
									>
										row={row.row}, column={column.column}, active={column.on}, id={column.id}
									</button>
								)})}
						</div>
					)
				})}
			</div>
		);
	}
}

Grid.propTypes = {
	onKeyPressed: PropTypes.func.isRequired,
	complete: PropTypes.bool.isRequired,
	grid: PropTypes.arrayOf(
		PropTypes.shape({
			row: PropTypes.number.isRequired,
			columns: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number.isRequired,
					column: PropTypes.number.isRequired,
					on: PropTypes.bool.isRequired
				})
			)
		})
	).isRequired
}

export default Grid;
