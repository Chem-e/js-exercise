var cid = [
    ['ONE RUPEE', 6],
    ['TWO RUPEES', 7],
    ['FIVE RUPEES', 5],
    ['TEN RUPEES', 1],
    ['TWENTY RUPEES', 2],
    ['ONE HUNDRED RUPEES', 2],
    ['ONE THOUSAND RUPEES', 1]
  ];

describe("drawer", function() {

  it("with price 17 and 20 cash", function() {
    expect(drawer(17, 20, cid)).toEqual([['TWO RUPEES', 1], ['ONE RUPEE', 1]]);
  });

  it("with change equal to the cash-in-drawer", function() {
    expect(drawer(1295, 2590, cid)).toEqual("Closed");
  });

  it("with change greater than the amount in the cash-in-drawer", function() {
    expect(drawer(2000, 5000, cid)).toEqual("Insufficient Funds");
  });

  it("with price 100 and cash 170", function() {
    expect(drawer(100, 170, cid)).toEqual([['TWENTY RUPEES', 2], ['TEN RUPEES', 1], ['FIVE RUPEES', 4]]);
  });

	it("with price 14 and cash 28", function() {
		expect(drawer(14, 28, [['ONE RUPEE', 10], ['TWO RUPEES', 3], ['FIVE RUPEES', 0], ['TEN RUPEES', 0], ['TWENTY RUPEES', 0], ['ONE HUNDRED RUPEES', 0], ['ONE THOUSAND RUPEES', 0]])).toEqual([['TWO RUPEES', 3], ['ONE RUPEE', 8]]);
	});

});
