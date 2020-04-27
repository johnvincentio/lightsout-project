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
			<div >
				{arr.map((row, id1) => {
					console.log('id1 ', id1);
					return (
						<div className="row">row number {id1}
							{arr[0].map((item, id2) => {
								console.log('item ', item);
								return (
									<div className={`square ${item ? "on" : "off"}`}>row=0, column={id2}, active={item}</div>
								)})}
						</div>
					)
				})}
			</div>
		);
	}
}

export default Grid;

/*
return (
			<div>

				<div className="row">
					{arr.map((row, id1) => {
						console.log('id1 ', id1);
						return (
							<div>row number {id1}</div>
						)
					})}
					{arr[0].map((item, id2) => {
						console.log('item ', item);
						return (
							<div className={`square ${item ? "on" : "off"}`}>row=0, column={id2}, active={item}</div>
						)})}
				</div>
			</div>
		);
	}
}
*/
