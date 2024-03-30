function convertCurrency() {
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var fromAmount = parseFloat(document.getElementById('fromAmount').value);

    // Exchange rates (for demonstration)
    var usdToCadRate = 1.31;
    var cadToUsdRate = 1 / usdToCadRate;

    var convertedAmount;
    if (fromCurrency === 'USD' && toCurrency === 'CAD') {
        convertedAmount = fromAmount * usdToCadRate;
    } else if (fromCurrency === 'CAD' && toCurrency === 'USD') {
        convertedAmount = fromAmount * cadToUsdRate;
    } else {
        // If the same currency is selected in both dropdowns
        convertedAmount = fromAmount;
    }

    if (fromAmount < 0) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('toAmount').value = '';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('toAmount').value = convertedAmount.toFixed(2);
    }
}
