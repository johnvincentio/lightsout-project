//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types'

class Grid extends React.Component {

	onHandleClick = (row, col) => {
		console.log('onHandleClick; row ', row, ' col ', col);
		this.props.onKeyPressed(row, col);
	}

	render() {
		console.log('Grid::render(); this.props ', this.props);
		const { grid } = this.props;
		return (
			<div className="grid">
				<div className="grid--row">
					{grid.map((row) => {
						return (
							<div key={row.row} className="grid--column">
								{row.columns.map((column) => {
									return (
										<button 
											type="button"
											key={column.id}
											className={`grid--square ${column.on ? "on" : "off"}`}
											onClick={() => this.onHandleClick(row.row, column.column)}
										>
										row={row.row}, column={column.column}, active={column.on}, id={column.id}
										</button>
									)})}
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

Grid.propTypes = {
	onKeyPressed: PropTypes.func.isRequired
}

export default Grid;
