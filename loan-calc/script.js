function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  interestRate = document.getElementById("interest-rate").value;
  monthsPay = document.getElementById("months-to-pay").value;
  interest = (loanAmountValue * (interestRate * 0.01)) / monthsPay;
  //convert to percentage thats why multiple by 0.01
  monthlyPayment = (loanAmountValue / monthsPay + interest).toFixed(2);
  document.querySelector(
    ".payment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
