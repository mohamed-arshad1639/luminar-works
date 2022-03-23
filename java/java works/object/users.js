//****************  nested objects*******/ 


var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone" ,transactions:[{creditTransaction:[]},{debitTransaction:[]} ,
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:[{creditTransaction:[]},{debitTransaction:[]}] ,
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:[{creditTransaction:[]},{debitTransaction:[]}] },
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:[{creditTransaction:[]},{debitTransaction:[]}]},

}


//1003 name
// console.log(users[1003].personName);
//1005 exist or not
// console.log("1005" in users);

// password

function authenticate(ac_num,password)
{
   if(ac_num in users)
   {
     let pwd=users[ac_num].password
     if(pwd==password)
     {  
        // console.log("access granded"); 
        return 1
  
     }
     else{
        // console.log("access denied");
         return -1
     }
   }
   else
   { 
    //    console.log("invalid account number");
       return 0
   }
}

// console.log(authenticate(1000,"userone"));





// function for validate account number

function validateAccountNumber(acc_no)  
{
    return acc_no in users?true:false
}





// function for fund transfor

function fundTransfor(frm_acc,to_acc,amount)
{
     if(validateAccountNumber(frm_acc)&&validateAccountNumber(to_acc))
     {
         let bal=users[frm_acc].balance
         if(amount>bal)
         {
            console.log("insufficiant balance");  
         }
         else
         {
            users[frm_acc].balance-=amount //debit account
            let frm_acc_balance=balanceEnquiry(frm_acc)
            console.log(`your account had debited ${amount}. available balance ${frm_acc_balance}`);
            

            users[to_acc].balance+=amount // credit account
            let to_acc_balance=balanceEnquiry(to_acc)
            console.log(`your account had credited ${amount}. available balance ${to_acc_balance}`);


            let crTransHistory={from:frm_acc,amount:amount} // pushing transaction history
            let debitTransHistory={to:to_acc,amount:amount}
            users[frm_acc].Transactions[0].creditTransaction.push(crTransHistory);
            users[to_acc].Transactions[1].debitTransaction.push(debitTransHistory);
            
         }
     }
     else
     {
         console.log("oppss! something error..check your account details..");
     }

}


// function for balance enquiry


function balanceEnquiry(accno){
   if(validateAccountNumber(accno))
   {
       return users[accno].balance
   }
   else{
       console.log("invalid account number");
   }
}
// console.log(balanceEnquiry(1000));



fundTransfor(1000,1003,5000)




