function checkProfitOrLoss(costPrice, sellingPrice) {
    if (sellingPrice > costPrice) return `Profit = ${sellingPrice - costPrice}`;
    if (sellingPrice < costPrice) return `Cost = ${costPrice - sellingPrice}`;
    
     return "No profit and no loss";
}

console.log(checkProfitOrLoss(1200, 1045));
console.log(checkProfitOrLoss(450, 1050));
console.log(checkProfitOrLoss(120, 120));
