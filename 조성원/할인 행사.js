function solution(want, number, discount) {
	let answer = 0;
	const shoppingCart = want
		.reduce(
			(acc, item, index) => [...acc, ...new Array(number[index]).fill(item)],
			[],
		)
		.sort();

	for (let i = 0; i < discount.length; i++) {
		const membership = discount.slice(i, i + 10).sort();

		if (JSON.stringify(shoppingCart) === JSON.stringify(membership)) answer++;
	}

	return answer;
}
