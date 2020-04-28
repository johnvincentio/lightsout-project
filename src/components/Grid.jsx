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
		const { grid } = this.props;
		return (
			<div className="grid">
				{grid.map((row, id1) => {
					console.log('id1 ', id1);
					return (
						<div key={id1} className="grid--row">
							{row.map((item, id2) => {
								console.log('item ', item);
								return (
									<button 
										type="button"
										key={item.id}
										className={`grid--square ${item.on ? "on" : "off"}`}
										onClick={() => this.onHandleClick(id2, id1)}
									>
										row={id2}, column={id1}, active={item.on}
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
	onKeyPressed: PropTypes.func.isRequired
}

export default Grid;
