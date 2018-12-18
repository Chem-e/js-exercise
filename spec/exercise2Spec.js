describe("filterLongWords", function() {

  it("with an empty array", function() {
    var result = filterLongWords([], 1);
    expect(typeof result).toBe('object');
    expect(result).toEqual([]);
  });

  it("with the 2 words bigger than 2", function() {
    expect(filterLongWords(['a', 'as', 'fds', 'asas', 'a', 'as'], 2)).toEqual(['fds','asas']);
  });

  it("with no large words", function() {
    expect(filterLongWords(['as', 'asas', 'dswd', 'as', 'a'], 5)).toEqual([]);
  });

});
