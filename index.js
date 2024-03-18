export const pyramid = (maxNum) => {
	let result = ''
	for (let row = 0; row < maxNum; row++) {
		let digit = 1
		let output = ''
		let midReached = false
		for (let col = 1; col <= maxNum + row; col++) {
			if (maxNum - row <= col) {
				output = output + digit
				if (digit == row + 1) midReached = true
				if (midReached) digit = digit - 1
				else digit = digit + 1
			} else output = output + ' '
		}
		digit = 1
		midReached = false
		result += output + '\n'
	}
	return result
}

const keyCounter = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]

function convertToNumbers(obj) {
	const numArr = []
	for (key in obj) {
		const indexVal = keyCounter.indexOf(key, 0) + 1
		const convertedVal = indexVal * obj[key]
		numArr.push(convertedVal)
	}
	return numArr.reduce((sum = 0, i) => (sum += i))
}

export function countAlpha(str) {
	const strArr = str.split('')
	const strObj = {}
	strArr.map((i) => {
		const key = i
		if (strObj[i]) {
			strObj[i] = strObj[i] + 1
		} else {
			strObj[i] = 1
		}
	})
	return convertToNumbers(strObj)
}
