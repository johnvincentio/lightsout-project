// 

/* eslint-disable no-plusplus */

export function copyGrid(grid) {
	const arr = new Array(grid.length);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = { row: grid[i].row, columns: [ ...grid[i].columns]};
	}
	return arr;
}

export function	isComplete(grid) {
	// console.log('>>> isComplete; grid ', grid);
	for (let i = 0; i < grid.length; i++) {
		const row = grid[i];
		for (let j = 0; j < row.columns.length; j++) {
			const column = row.columns[j];
			if (column.lightson) {
				// console.log('<<< isComplete; false');
				return false;
			}
		}
	}
	// console.log('<<< isComplete; TRUE');
	return true;
}

function isInbounds(length, row, column) {
	if (row < 0 || row >= length) return false;
	if (column < 0 || column >= length) return false;
	return true;
}

export function updateGrid(grid, row, column) {
	const array = copyGrid(grid);
	array[row].columns[column].lightson = ! array[row].columns[column].lightson;		// toggle the square that was clicked

	if (isInbounds(grid.length, row - 1, column)) {
		array[row - 1].columns[column].lightson = ! array[row - 1].columns[column].lightson;
	}

	if (isInbounds(grid.length, row, column - 1)) {
		array[row].columns[column - 1].lightson = ! array[row].columns[column - 1].lightson;
	}

	if (isInbounds(grid.length, row, column + 1)) {
		array[row].columns[column + 1].lightson = ! array[row].columns[column + 1].lightson;
	}

	if (isInbounds(grid.length, row + 1, column)) {
		array[row + 1].columns[column].lightson = ! array[row + 1].columns[column].lightson;
	}
	return array;
}

export function initialize(gridSize) {
	let arr = new Array(gridSize);
	for (let i = 0; i < arr.length; i++) {
		const columns = new Array(gridSize);
		for (let j = 0; j < columns.length; j++) {
			columns[j] = { id: i * arr.length + j, column: j, lightson: false };
		}
		arr[i] = { row: i, columns };
	}

	const moves = [];
	// const maxMoves = props.gridSize ** 2;
	const maxMoves = 2;
	for (let i = 0; i < maxMoves; i++) {
		const obj = {
			row: Math.floor(Math.random() * gridSize),
			column: Math.floor(Math.random() * gridSize)
		}
		arr = updateGrid(arr, obj.row, obj.column);
		moves.push(obj);
	}
	return { grid: arr, moves, complete: false, clicked: { status: false } };
}
