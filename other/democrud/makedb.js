//

const fs = require('fs');
const faker = require('faker');

const widgets = [];

const MAX_WIDGETS = 30;

function doubleDigits(num) {
	const str = `${num}`;
	if (str.length < 2) {
		return `0${str}`;
	}
	return str;
}

function randomQuantity(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// function randomPrice(min, max) {
// 	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
// }

function randomPrice(min, max) {
	return (Math.random() * (max - min) + min).toFixed(2);
}

function randomDate(start, end) {
	const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	// prettier-ignore
	const str = `${date.getFullYear()}-${doubleDigits(date.getMonth() + 1)}-${doubleDigits(date.getDate())}`;
	// console.log('date ', date, ' str ', str);
	return str;
}

for (let i = 0; i < MAX_WIDGETS; i++) {
	const obj = {};
	obj.id = i + 1;
	obj.sku = `SKU000${i < 10 ? 0 : ''}${i}`;
	// obj.name = `Name-${i < 10 ? 0 : ''}${i}`;
	obj.name = faker.commerce.productName();

	// obj.description = `Description-${i < 10 ? 0 : ''}${i}`;
	obj.description = faker.lorem.sentences();

	obj.created = randomDate(new Date(2001, 0, 1), new Date());
	obj.price = randomPrice(1.0, 1000.0);
	obj.quantity = randomQuantity(1, 10);
	obj.userId = '0';
	widgets.push(obj);
}

// const a = randomDate(new Date(2001, 0, 1), new Date());
// console.log('a ', a);

// const a = randomPrice(1.0, 3.0);
// console.log(typeof a);
// const b = parseFloat(a);
// console.log(typeof b);
// console.log('b ', b);

fs.writeFileSync('db.json', JSON.stringify({ widgets }));

// const jv = faker.commerce.product();
// const jv1 = faker.commerce.productMaterial();
// const jv2 = faker.commerce.productName();

// console.log('jv ', jv);
// console.log('jv1 ', jv1);
// console.log('jv2 ', jv2);

// const a1 = faker.lorem.sentence();
// const a2 = faker.lorem.sentences();

// console.log('a1 ', a1);
// console.log('a2 ', a2);

// const b1 = faker.lorem.paragraph();
// const b2 = faker.lorem.paragraphs();

// console.log('b1 ', b1);
// console.log('b2 ', b2);
