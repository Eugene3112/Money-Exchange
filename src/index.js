// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency <= 0) return {};
    var h = Math.floor(currency / 50);
    var currency = currency % 50;
    var q = Math.floor(currency / 25);
    var currency = currency % 25;
    var d = Math.floor(currency / 10);
    var currency = currency % 10;
    var n = Math.floor(currency / 5);
    var currency =currency % 5;
    var p = currency;
    var result = {};
    if (h > 0) result["H"] = h;
    if (q > 0) result["Q"] = q;
    if (d > 0) result["D"] = d;
    if (n > 0) result["N"] = n;
    if (p > 0) result["P"] = p;
    return result;
    
}
