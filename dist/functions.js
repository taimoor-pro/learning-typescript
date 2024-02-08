"use strict";
function calculateTax(num, taxYear = 2000) {
    if (taxYear < 50000) {
        return num * 1.2;
    }
    return num * 1.4;
}
calculateTax(20000);
//# sourceMappingURL=functions.js.map