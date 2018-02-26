
// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var result = {};

    if (currency <= 0) {
        return {};
    }

    if (currency >= 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }

    var notExhanged = 0;
    
    if (currency >= 50) {
        result.H = (currency / 50) ^ 0;
        notExhanged = currency % 50;


        if (notExhanged == 0) {
            return result;
        }

        currency = notExhanged;
    }

    if (currency >= 25 && currency < 50) {
        result.Q = currency / 25 ^ 0;
        notExhanged = currency % 25;
        
        if (notExhanged == 0) {
            return result;
        }

        currency = notExhanged;
    }

    if (currency >= 10 && currency < 25) {
        result.D = currency / 10 ^ 0;
        notExhanged = currency % 10;
        
        if (notExhanged == 0) {
            return result;
        }

        currency = notExhanged;
    }
    if (currency >= 5 && currency < 10) {
        result.N = currency / 5 ^ 0;
        notExhanged = currency % 5;
        
        if (notExhanged == 0) {
            return result;
        }

        currency = notExhanged;
    }

    if (currency >= 1 && currency < 5) {
        
        result.P = currency;
        
    }

    return result;
}
