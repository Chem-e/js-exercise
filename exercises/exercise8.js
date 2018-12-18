/*
 *  Design a cash register drawer function that accepts purchase price as the first argument, payment as
 *  the second argument, and cash-in-drawer (cid) as the third argument.
 *
 *  cid is a 2d array listing available currency.
 *
 *  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the
 *  string "Closed" if cash-in-drawer is equal to the change due.
 *
 *  Otherwise, return change in coin and bills, sorted in highest to lowest order.
 *  In case of multiple solutions, return the one containing the highest value of coin/bill
 */
 function drawer(price, cash, cid) {
	var result = {};
    var change = cash - price;

    var enums = {
        "ONE RUPEES": 1,
        "TWO RUPEES": 2,
        "FIVE RUPEES": 5,
        "TEN RUPEES": 10,
        "TWENTY RUPEES": 20,
        "ONE HUNDRED RUPEES": 100,
        "ONE THOUSAND RUPEES": 1000,
    }

    for (var i = cid.length - 1; i >= 0; i--) {
        var numberValue = enums[cid[i][0]];
        console.log(`numberValue: ${numberValue}`)
        console.log(`change: ${change}`)
        if (numberValue <= change) {
            do {
                console.log(result)
                --cid[i][1];
                change = change - numberValue;
                console.log(cid[i][0])
                console.log(result[cid[i][0]])
                result[cid[i][0]] = (result[cid[i][0]])? ++result[cid[i][0]]: 1;
            }
            while(cid[i][1] >= 0 && change >= numberValue);
        }
    }
    return Object.keys(result).map(function(el){
        [el, result[el]]
    })



}

