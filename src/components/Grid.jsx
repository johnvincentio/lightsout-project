//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';

class Grid extends React.Component {

	onHandleClick = (row, col) => {
		console.log('onHandleClick; row ', row, ' col ', col);
	}

	render() {
		const arr = new Array(5);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(3);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = true;
			}
		}
		return (
			<div className="grid">
				{arr.map((row, id1) => {
					console.log('id1 ', id1);
					return (
						<div className="grid--row">
							{arr[0].map((item, id2) => {
								console.log('item ', item);
								return (
									<button 
										type="button"
										className={`grid--square ${item ? "on" : "off"}`}
										onClick={() => this.onHandleClick(id1, id2)}
									>
										row={id2}, column={id1}, active={item}
									</button>
								)})}
						</div>
					)
				})}
			</div>
		);
	}
}

export default Grid;
