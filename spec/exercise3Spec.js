describe("reverse", function() {

  it("with an empty string", function() {
    var result = reverse('');
    expect(typeof result).toBe('string');
    expect(result).toBe('');
  });

  it("with a one letter word", function() {
    expect(reverse('a')).toBe('a');
  });

  it("with a four letter word", function() {
    expect(reverse('asdf')).toBe('fdsa');
  });

  it("with a sentence", function() {
    expect(reverse('The quick brown fox')).toBe('xof nworb kciuq ehT');
  });
});
