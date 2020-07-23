//login btn event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//deposit btn event handler
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("deposit-amount");

    updateSpanTxt("currentDeposit", depositNumber);
    updateSpanTxt("currentBalance", depositNumber);
    document.getElementById("deposit-amount").value = "";
})

//withdraw btn even handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdraw-amount");

    updateSpanTxt("currentWithdraw", withdrawNumber);
    updateSpanTxt("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdraw-amount").value = "";
})
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpanTxt(id ,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}