const solution = (progresses, speeds) => {
	const answer = [];

	while (progresses.length > 0) {
		const days = Math.ceil((100 - progresses[0]) / speeds[0]);
		for (let i = 0; i < progresses.length; i++) {
			progresses[i] += speeds[i] * days;
		}

		let count = 0;
		while (progresses[0] >= 100) {
			progresses.shift();
			speeds.shift();
			count++;
		}
		answer.push(count);
	}

	return answer;
};
