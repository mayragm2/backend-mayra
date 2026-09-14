function calculateprice (basePrice, isVIP) {
    if (isVIP){
        const finalPrice = basePrice * 0.9;
        return {basePrice, finalPrice};
    } else {
        const finalPrice = basePrice * 1.21;
        return {basePrice, finalPrice};
    }
}

let price = calculateprice (1100, true);
console.log (price);

price = calculateprice (1100, false);
console.log (price);

price = calculateprice (100, true);
console.log (price);