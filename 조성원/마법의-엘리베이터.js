/**
 * 5보다 큰 수가 나오면 10에서 빼서 계산한다.
 * 5보다 작은 수가 나오면 그대로 계산한다.
 * 5일 때, 다음 자리수가 5보다 크거나 같으면 10에서 빼서 계산한다.
 * 5일 때, 다음 자리수가 5보다 작으면 그대로 계산한다.
 */

const solution = (storey) => {
	const digits = [...storey.toString()]
		.map((digit) => Number.parseInt(digit))
		.reverse();

	return digits.reduce((acc, digit, index) => {
		if (index === digits.length - 1) {
			if (digit > 5) return acc + 10 - digit + 1;
			return acc + digit;
		}

		if (digit > 5) {
			digits[index + 1]++;
			return acc + 10 - digit;
		}
		if (digit === 5) {
			if (digits[index + 1] >= 5) digits[index + 1]++;
			return acc + 5;
		}
		return acc + digit;
	}, 0);
};
