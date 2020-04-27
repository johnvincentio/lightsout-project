//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';

class Grid extends React.Component {

	render() {
		const arr = new Array(5);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(3);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = true;
			}
		}
		console.log('arr ', arr);

		return (
			<div>

				<div className="row">
					{arr[0].map((item, id) => {
						console.log('item ', item);
						return (
							<div className={`square ${item ? "on" : "off"}`}>row=0, column={id}, active={item}</div>
						)})}
				</div>
			</div>
		);
	}
}

export default Grid;
