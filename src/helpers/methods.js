export function isColor(value) {
	const s = new Option().style;

	s.color = value;

	return s.color == value;
}

// see : https://gist.github.com/jed/982883
export function getUuid() {
	return function b(a) {
		return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
	}();
}

export function calculateTextWidth(text, font = '16px times', unit = 'px') {
	// if given, use cached canvas for better performance
	// else, create new canvas
	var canvas = calculateTextWidth.canvas || (calculateTextWidth.canvas = document.createElement('canvas'));
	var context = canvas.getContext('2d');

	context.font = font;
	var metrics = context.measureText(text);

	return `${ Math.ceil(metrics.width) }${ unit }`;
}