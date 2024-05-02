//CDScript
"use strict"


// Add an event listener to the "Calculate" button
document.getElementById("calculateBtn").addEventListener("click", function() {
    
    let initialDeposit = parseFloat(document.getElementById("initialDeposit").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    let investmentDuration = parseInt(document.getElementById("investmentDuration").value);

    // Calculate the future value of the CD investment
    let futureValue = calculateFutureValue(initialDeposit, interestRate, investmentDuration);

    // Display the future value in the result area
    document.getElementById("result").value = futureValue.toFixed(2);
});

// Function to calculate the future value of the CD investment
function calculateFutureValue(initialDeposit, interestRate, investmentDuration) {
   
    var futureValue = initialDeposit * Math.pow(1 + interestRate, investmentDuration);
    return futureValue;
}