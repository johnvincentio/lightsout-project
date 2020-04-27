//

function test(num, str, exp) {
	// console.log('str :', str, ':');
	const re = new RegExp(exp);
	// const jv = re.test(str);
	console.log('Test ', num, ' status ', re.test(str));
	// return re.test(str);
}

const exp1 = '^([A-Z]{3,}[0-9]{5})$';

let num = 1;
// test(num++, 'ABC12345', exp1);
// test(num++, 'ABc12345', exp1);
// test(num++, 'ABc12345', exp1);
// test(num++, 'Ac12345', exp1);
// test(num++, '', exp1);
// test(num++, '5', exp1);

num = 1;
// this works
// const exp2 = '^([a-zA-Z0-9])+$';
// const exp2 = '^([-_ a-zA-Z0-9])+$';
// const exp2 = '^([-_ !.;:a-zA-Z0-9])+$';
// const exp2 = '^([-_ !.;:\na-zA-Z0-9])+$';
const exp2 = '^([-_ /!.;:\na-zA-Z0-9])+$';

test(num++, 'A', exp2);
test(num++, 'c', exp2);
test(num++, 'Ac3', exp2);
test(num++, 'ac3', exp2);

test(num++, 'Ac3 ', exp2);
test(num++, 'Ac3-', exp2);
test(num++, 'Ac3_', exp2);
test(num++, 'Ac3 !', exp2);
test(num++, 'Ac3.', exp2);
test(num++, 'Ac3;', exp2);
test(num++, 'Ac3:', exp2);
test(num++, 'Ac3:\n!', exp2);
test(num++, 'Ac3/', exp2);

// "^[-_ \w]+"
// const exp1 = '^[-_w]+';
// const exp1 = '^[-_ a-zA-Z0-9]+$';

// test(1, 'abc', exp1);
// test(2, 'abcd', exp1);
// test(3, 'abcdefg', exp1);
// test(4, 'abc345', exp1);
// test(5, 'abc-45m_', exp1);
// test(6, 'abc -_34', exp1);

// test(2, 'sample1', '^([a-z0-9]{5,})$');

// console.log('1 ', test('test- _ 0Test', '/^[-_ a-zA-Z0-9]+$/'));

// console.log('1 ', test('test- _ 0Test', '^[-_ a-zA-Z0-9]+$'));

// test(0, 'test- _ 0Test', '^[-_ a-zA-Z0-9]+$');
