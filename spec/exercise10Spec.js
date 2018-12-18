describe("largestSubstring", function() {

	it("with empty strings", function() {
		expect(largestSubstring("", "")).toBe("")
	});

	it("with one empty string", function() {
		expect(largestSubstring("", "hello")).toBe("")
	});

	it("with strings having no common substrings", function() {
		expect(largestSubstring("abcd", "efgh")).toBe("")
	});

	it("with similar strings", function() {
		expect(largestSubstring("abcdefg", "abcdefg")).toBe("abcdefg");
	});

	it("with strings having largest substring appearing at the end", function() {
		expect(largestSubstring("spring", "string")).toBe("ring");
	});

	it("with strings having largest substring appearing at the start", function() {
		expect(largestSubstring("sparkle", "sparrow")).toBe("spar");
	});

	it("with strings having largest substring appearing at different positions", function() {
		expect(largestSubstring("abelloha", "elaaaellobbbllo")).toBe("ello");
	});

	it("with strings having 2 substrings of equal length", function() {
		expect(largestSubstring("gissiring", "stringissharp")).toBe("giss");
	});

});