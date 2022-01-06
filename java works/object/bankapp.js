
class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }

        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },

    }
    session = {}
    //session={"user":1000}

    //validate account number
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false
    }

    //authenticate
    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pass = this.accounts[acno].password
            if (password == pass) {
                console.log("access granted");
                this.session["user"] = acno
            }
            else {
                console.log("access denied");
            }
        }
        else {
            console.log("invalid account number");
        }
    }
    //get balance
    getBalance(acno) {
        return this.accounts[acno].balance
    }
    //balance enquiry

    balanceEnquiry() {
        if ("user" in this.session) {
            let loggeduser = this.session["user"];
            console.log(this.getBalance(loggeduser));
        }
        else {
            console.log("invalid  sesion please log in");
        }
    }
    //login required
    loginRequired() {
        return "user" in this.session ? true : false
    }
    loggedUserDetails()
    {
        if(this.loginRequired())
        {
            return this.session["user"]
        }
    }

    //fund transfor
    fundTransfor(to_account, amount) {
        if (this.loginRequired()) {
            let lgr=this.session["user"]
            if (this.validateAccountNumber(to_account)) {
                let current_balance = this.getBalance(lgr)
                if (amount > current_balance) {
                    console.log("insufficiant balance");
                }
                else {
                       this.accounts[to_account].balance+=amount
                       let to_account_balance=this.getBalance(to_account)

                       this.accounts[lgr].balance-=amount
                       let logged_account_balance=this.getBalance(lgr)

                       let crTransHistory={from:lgr,amount:amount} // pushing transaction history
                       let debitTransHistory={to:to_account,amount:amount}

                       this.accounts[to_account].transactions.creditTransactions.push(crTransHistory)
                       this.accounts[lgr].transactions.debitTransactions.push(debitTransHistory)


                    //console.log("transaction compleeted");
                }
            }
            else {
                console.log("account not available");
            }

        }
        else {
            console.log("you must logged in");
        }

    }

    //get debit transaction
    getDebitTrasaction()
    {
        let user=this.loggedUserDetails()
        console.log( this.accounts[user].transactions.debitTransactions );

    }

    //get crtedit transaction
    getCreditTransaction()
    {
        let user=this.loggedUserDetails()
        console.log( this.accounts[user].transactions.creditTransactions);
    }

    // transaction history

    getTransactionHistory()
    {
        let user=this.loggedUserDetails
        console.log(this.accounts[user]);
    }



}
var bank = new Bank()
// console.log(bank.validateAccountNumber(1007));
bank.authenticate(1002, "userthree")
bank.balanceEnquiry()
bank.fundTransfor(1001,100)
// bank.getCreditTransaction()
bank.getTransactionHistory()

