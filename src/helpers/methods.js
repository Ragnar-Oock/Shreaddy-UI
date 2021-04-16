export function isColor(value) {
	const s = new Option().style;

	s.color = value;

	return s.color == value;
}