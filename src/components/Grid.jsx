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

								const animation = clicked.status && clicked.row === row.row && clicked.column === column.column;
								// console.log('animation ', animation);
								if (complete) return (
									<button 
										type="button"
										key={column.id}
										className={`grid--square ${column.lightson ? "on" : "off"}`}
										disabled
									>
										row={row.row}, column={column.column}, active={column.lightson}, id={column.id}
									</button>
								);
								return (
									<button 
										type="button"
										key={column.id}
										className={`grid--square ${column.lightson ? "on" : "off"} ${animation ? "animate" : ""} `}
										onClick={() => this.onHandleClick(column.id, row.row, column.column)}
									>
										row={row.row}, column={column.column}, active={column.lightson}, id={column.id}
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
					lightson: PropTypes.bool.isRequired
				})
			)
		})
	).isRequired,
	clicked: PropTypes.shape({
		status: PropTypes.bool.isRequired,
		row: PropTypes.number,
		column: PropTypes.number
	}).isRequired
}

Grid.defaultProps = {

}

export default Grid;
