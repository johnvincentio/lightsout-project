//

/*
 * Handle dates
 */

function doubleDigits(num) {
	const str = `${num}`;
	if (str.length < 2) {
		return `0${str}`;
	}
	return str;
}

export function defaultDate() {
	const date = new Date();
	// prettier-ignore
	const str = `${date.getFullYear()}-${doubleDigits(date.getMonth() + 1)}-${doubleDigits(date.getDate())}`;
	return str;
}

/*
 * Handle the Search
 */

export function searchString(find, target) {
	if (find == null || target == null) {
		return null;
	}
	return target.toLowerCase().indexOf(find) > -1;
}

export function search(query, data) {
	// console.log('SearchUtilities; query ', query, ' data ', data);
	const lowerQuery = query.toLowerCase();

	const results = data.filter(widget => {
		if (
			this.searchString(lowerQuery, widget.name) ||
			this.searchString(lowerQuery, widget.sku) ||
			this.searchString(lowerQuery, widget.price) ||
			this.searchString(lowerQuery, widget.created) ||
			this.searchString(lowerQuery, widget.description)
		) {
			return true;
		}
		return false;
	});
	return results;
}
