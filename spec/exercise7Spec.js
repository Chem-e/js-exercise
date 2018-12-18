describe("upperCase", function() {
	
	it("with an empty string", function() {
		expect(upperCase("")).toBe("");
	});

	it("with single word", function() {
		expect(upperCase("work")).toBe("Work");
	});

	it("with multiple words", function() {
		expect(upperCase("this is one sentence")).toBe("This Is One Sentence");
	});

	it("with words already capitalized", function() {
		expect(upperCase("This Is One Sentence")).toBe("This Is One Sentence");
	});

	it("with string having trailing spaces", function() {
		expect(upperCase("   this is one sentence")).toBe("   This Is One Sentence");
	});

	it("with string having leading spaces", function() {
		expect(upperCase("this is one sentence    ")).toBe("This Is One Sentence    ");
	});

	it("with string having 2 spaces between each word", function() {
		expect(upperCase("this  is  one  sentence")).toBe("This  Is  One  Sentence");
	});

});