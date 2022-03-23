var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "g-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
  // total number accounts
//   console.log(accounts.length);
  //print savings account
//   accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))
// print balance of accountno 1000
// accounts.filter(data=>data.acno==1000).forEach(data=>console.log(data.balance))
// bal=accounts.find(data=>data.acno==1000).balance
// console.log(bal);
//print all g pay transaction
// accounts.map(data=>data.transactions).flat().filter(trans=>trans.method=="g-pay").forEach(t=>console.log(t))
//print credittransaction of 1002
// // print highest balance
highest_balance=accounts.sort((b1,b2)=>b2.balance-b1.balance)[0]
console.log(highest_balance);

//*************** 28 / 12/ 21


// credit and debit transaction of 1002

// var debitTransaction=accounts.find(data=>data.acno==1002).transactions
// console.log(debitTransaction);

// var creditTransation=accounts.map(data=>data.transactions).flat().filter(data=>data.to=="1002")
// console.log(creditTransation);

// var transactionHistory={"credittransation":creditTransation,"debittransaction":debitTransaction}
// console.log(transactionHistory);

















