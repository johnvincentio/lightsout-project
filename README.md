
	// init = (props) => {
	// return new Array(props.gridSize).fill(new Array(props.gridSize).fill(true));
	// }

	
	/*
		// const word = randomWord().toUpperCase();
		// this.setState({
		// 	currentWord: convertStringtoArrayObject(word),
		// 	keyboard: convertStringtoArrayObject(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`),
		// 	gameWon: false,
		// 	gameLost: false,
		// 	guessesRemaining: this.props.maxGuesses,
		// 	isReady: true
		// });

		// const arr = [];
		// for (let i = 0; i < props.gridSize ** 2; i++) {
		// 	const obj = {id: i, active: true, row: 0, col: 0};
		// 	arr.push(obj);
		// }


		// const arr = new Array(5);
		// for (let i = 0; i < arr.length; i++) {
		// 	arr[i] = new Array(3);
		// 	for (let j = 0; j < arr[i].length; j++) {
		// 		arr[i][j] = true;
		// 	}
		// }
		// return arr;

	init = props => {
		const arr = new Array(props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(props.gridSize);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = {id: i * arr[i].length + j, on: true };
			}
		}
		return arr;
	}
		copyArray = array => {
		const arr = new Array(this.props.gridSize);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(this.props.gridSize);
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j] = array[i][j];
			}
		}
		return arr;
	}

*/

