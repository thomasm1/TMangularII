
suite('first Suite', function() {
	
	test('this is my first test', function() {
		console.log('first');
		expect(1).to.equal(1);
	});

	suite('second suite', function() {

		test('this is my second test', function() {
			console.log('second');
			expect(1).to.equal(1);
		});
	
	});
			
});