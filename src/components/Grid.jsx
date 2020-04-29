//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types'

import classnames from 'classnames';

class Grid extends React.Component {

	onHandleClick = (id, row, col) => {
		// console.log('onHandleClick; id ', id, ' row ', row, ' col ', col);
		this.props.onKeyPressed(row, col);
	}

	render() {
		console.log('Grid::render(); now ', Date.now(), ' this.props ', this.props);
		const { grid, disableGrid, clicked } = this.props;
		return (
			<div className="grid">
				{grid.map((row) => {
					return (
						<div key={row.row} className="grid--row">
							{row.columns.map((column) => {
								const animation = !disableGrid
											&& clicked.status
											&& clicked.row === row.row 
											&& clicked.column === column.column;
								// console.log('animation ', animation);
								const clz = classnames(
									`grid--square`, 
									column.lightson ? `on` : `off`,
									animation ? `animate` : ``,
									disableGrid ? `disableButtons` : `enableButtons`);
								// console.log('clz ', clz);
								return (
									<button 
										type="button"
										key={column.id}
										className={clz}
										onClick={() => this.onHandleClick(column.id, row.row, column.column)}
										disabled={disableGrid}
									>
										{column.id}, {row.row}, {column.column}, {column.lightson ? "on" : "off"}
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
	disableGrid: PropTypes.bool.isRequired,
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

export default Grid;
