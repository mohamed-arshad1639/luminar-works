const jwt = require('jsonwebtoken')
database = {

  1000: { acno: 1000, usrname: "arshad", password: "1000", balance: 0, transaction: [] }

}

// import db.js

const db = require('./db')

// register


const register = (usrname, acno, password) => {

  return db.User.findOne({ acno })
    .then(user => {
      console.log(user);
      if (user) {

        return {
          statusCode: 422,
          status: false,
          messege: "User Alredy Exist....Please LogIn..!!!"
        }

      }
      else {
        const newUser = new db.User({

          acno,
          usrname,
          password,
          balance: 0,
          transaction: []
        })
        newUser.save()
        return {
          statusCode: 200,
          status: true,
          messege: "Successfully Registerd!!!!!!!"
        }
      }

    })
}



// login

const logIn = (acno,password) => {

  return db.User.findOne({
    acno,
    password
  })
    .then(user => {
      if (user) {
        currentUname = user.usrname
        currentAcno = acno
        // token generating
        token = jwt.sign({
          currentAcno: acno
        }, 'supersecretkey123456')

        return {
          statusCode: 200,
          status: true,
          messege: "Successfully LoggedIn!!!!!!!",
          token,
          currentAcno,
          currentUname
        }
      }
      else {
        return {
          statusCode: 422,
          status: false,
          messege: "invalid credential"
        }
      }
    })

  // if (acno in db) {
  //   if (pswd == db[acno]["password"]) {
  //     currentUname = db[acno]['usrname']
  //     currentAcno = acno
  //     // token generating
  //     token = jwt.sign({
  //       currentAcno: acno
  //     }, 'supersecretkey123456')

  //     return {
  //       statusCode: 200,
  //       status: true,
  //       messege: "Successfully LoggedIn!!!!!!!",
  //       token,
  //       currentAcno,
  //       currentUname
  //     }


}
//   else {

//     return {
//       statusCode: 422,
//       status: false,
//       messege: "Invalid Password"
//     }

//   }
// }
//   else {

//     return {
//       statusCode: 422,
//       status: false,
//       messege: "Invalid Accountnumber"
//     }

//   }
// }


// deposit


const deposit = (acno, password, amount) => {

  var amount = parseInt(amount)
  return db.User.findOne({acno, password})
    .then(user => {
      if (user) {
        user.balance += amount
        user.transaction.push({
          amount: amount,
          type: "CREDIT"
        })
        user.save()
        return {

          statusCode: 200,
          status: true,
          messege: amount + "deposit SuccessFully....new Balance is " + user.balance
        }
      }
      else {
        return {
          statusCode: 422,
          status: false,
          messege: "Invalid Credenssialss!!!!"
        }
      }

    })
}


//   var amountdeposit = parseInt(amount)
//   var db = database



//   if (acno in db) {
//     if (password == db[acno]["password"]) {
//       db[acno]["balance"] += amountdeposit;
//       db[acno].transaction.push({
//         amount: amountdeposit,
//         type: "CREDIT"
//       })


//       return {

//         statusCode: 200,
//         status: true,
//         messege: amountdeposit + "deposit SuccessFully....new Balance is " + db[acno]["balance"]
//       }
//     }

//     else {

//       return {
//         statusCode: 422,
//         status: false,
//         messege: "Invalid Paasword"
//       }
//     }

//   }
//   else {
//     return {
//       statusCode: 422,
//       status: false,
//       messege: "Invalid AccountNumber"
//     }

//   }


// }

//withdraw

const withdrawl = (req, acno, password, amount) => {
  var amount = parseInt(amount)
  currentAcc = req.currentAcno

  return db.User.findOne({

    acno, password
  }).then(user => {


    if (user) {
      if (currentAcc != acno) {
        return {
          statusCode: 422,
          status: false,
          messege: "operation denied"

        }
      }



      if (user.balance > amount) {
        user.balance -= amount
        user.transaction.push({
          amount: amount,
          type: "DEBIT"
        })
        user.save()
        return {
          statusCode: 200,
          status: true,
          messege: amount + "debitted successfullu...current balance is|" + user.balance

        }
      }
      else {
        return {
          statusCode: 422,
          status: false,
          messege: "Insufficiant Balance"
        }

      }
    }

    else {
      return {
        statusCode: 422,
        status: false,
        messege: "Invalid Account number"
      }

    }

  })
}








// if (acno in db) {

//   if (password == db[acno]["password"]) {

//     if (currentAcc != acno) {
//       return {
//         statusCode: 422,
//         status: false,
//         messege: "operation denied"

//       }
//     }

//     if (db[acno]["balance"] > withdrawlamount) {
//       db[acno]["balance"] -= withdrawlamount
//       db[acno].transaction.push({
//         amount: withdrawlamount,
//         type: "DEBIT"
//       })

//       return {
//         statusCode: 200,
//         status: true,
//         messege: withdrawlamount + "debitted successfullu...current balance is|" + db[acno]["balance"]
//       }

//     }
//     else {
//       return {
//         statusCode: 422,
//         status: false,
//         messege: "Insufficiant Balance"
//       }
//     }

//   }
//   else {
//     return {
//       statusCode: 422,
//       status: false,
//       messege: "Invalid Password"
//     }
//   }
// }
// else {
//   return {
//     statusCode: 422,
//     status: false,
//     messege: "Invalid Account number"
//   }
// }
//   }











//transaction history

const getTransaction = (acno) => {

  return db.User.findOne({
    acno

  }).then(user => {
    if (user) {
      return {
        statusCode: 200,
        status: true,
        transaction: user.transaction
      }


    }
    else {
      return {
        statusCode: 422,
        status: false,
        messege: "Invalid Account Number!!!!!"
      }

    }
  })
}
//     return {
//       statusCode: 200,
//       status: true,
//       transaction: database[acno].transaction
//     }

//   }
//   else {
//   return {
//     statusCode: 422,
//     status: false,
//     messege: "Invalid Account Number!!!!!"
//   }
// }


// }








module.exports = {
  register, logIn, deposit, withdrawl, getTransaction
}
