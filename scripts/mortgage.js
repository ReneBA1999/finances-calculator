"use strict"

window.onload = init;
//function
function init() {

}

function calculateMortgage() {


 // Add event listener to the Calculate button
 // Get input values from the form
    let price = parseFloat(document.getElementById("priceField").value);
    let principal = parseFloat(document.getElementById("principal").value);
    let loanLengthYears = parseInt(document.getElementById("loanLengthYears").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);

    // Calculate monthly payment
    let monthlyPayment = calculateMortgage2(principal, annualRate, loanLengthYears);

    // Display the monthly payment in the input field
    document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2);

}
// Function to calculate mortgage payment
function calculateMortgage2(principal, annualRate, loanLengthYears) {
    let monthlyRate = annualRate / 12 / 100;
    let loanLengthMonths = loanLengthYears * 12;

    // Calculate monthly payment using the formula
    let monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanLengthMonths));

    return monthlyPayment;
}