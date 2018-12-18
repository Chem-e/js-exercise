describe("sort", function() {

	it("with an empty array", function() {
		var result = sort([]);
		expect(result).toEqual([]);
	});

	it("with one word", function() {
		expect(sort(["apple"])).toEqual(["apple"]);
	});

	it("with multiple words", function() {
		expect(sort(["orange", "apple", "banaana", "grapes"])).toEqual(["apple", "banaana", "grapes", "orange"]);
	});

	it("with multiple already sorted words", function() {
		expect(sort(["apple", "banaana", "orange"])).toEqual(["apple", "banaana", "orange"]);
	});

	it("with multiple words and similar beginning letters", function() {
		expect(sort(["abdulqadir", "abdulghaffar", "abdulrafay"])).toEqual(["abdulghaffar", "abdulqadir", "abdulrafay"]);
	});

});
