//

function cleanPrice(id, str) {
	const num = parseFloat(str);
	console.log('num ', num, ' typeof num ', typeof num);
	const b = num.toFixed(2);
	console.log('b ', b, ' typeof b ', typeof b);
}
const a = '682.7';

const num = 1;
cleanPrice(num, '-682');
cleanPrice(num, '682.756');
cleanPrice(num, '.7');
cleanPrice(num, '0.7');
cleanPrice(num, '-9.7');
