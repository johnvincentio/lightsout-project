//

function test(num, str, exp) {
	// console.log('str :', str, ':');
	const re = new RegExp(exp);
	// const jv = re.test(str);
	console.log('Test ', num, ' status ', re.test(str));
	// return re.test(str);
}

const exp1 = 'd+(.d{2})?';

let num = 1;
test(num++, '12.56', exp1);
