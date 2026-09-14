function calculateFinalPrice (basePrice, isVIP) {
    if (isVIP){
        const finalPrice = basePrice * 0.9;
        return (finalPrice);
    } else {
        const finalPrice = basePrice * 1.21;
        return (finalPrice);
    }
}

let finalPrice = calculateFinalPrice (1100, true);
console.log (finalPrice);

finalPrice = calculateFinalPrice (1100, false);
console.log (finalPrice);

finalPrice = calculateFinalPrice (100, true);
console.log (finalPrice);


