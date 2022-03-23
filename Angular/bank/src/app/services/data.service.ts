import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const options = {
  headers: new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})




export class DataService {
  currentUname: any
  currentAcno: any

  database: any = {

    1000: { acno: 1000, usrname: "arshad", password: "1000", balance: 0, transaction: [] },

  }



  constructor(private http: HttpClient) {
    
  }



  saveDetails() {
    if (this.database) {

      localStorage.setItem("database", JSON.stringify(this.database))
    }
    if (this.currentUname) {
      localStorage.setItem("currentUname", JSON.stringify(this.currentUname))
    }
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
  }
  getDetails(): void {
    if (localStorage.getItem("database")) {
      this.database = JSON.parse(localStorage.getItem("database") || "")
    }
    if (localStorage.getItem("currentUname")) {
      this.currentUname = JSON.parse(localStorage.getItem("currentUname") || "")
    }

  }
  // get transaction array

  getTransaction(acno: any) {
    return this.database[acno].transaction

  }


  // register
  register(usrname: any, acno: any, password: any) {

    const data = {
      usrname,
      acno,
      password
    }

    //Register api call

    return this.http.post("http://localhost:3000/register", data)

  }




  // login

  login(acno: any, pswd: any) {

    const data = {
      acno,
      pswd
    }
    //login api

    return this.http.post("http://localhost:3000/login", data)

  }







  // deposit

  deposit(acno: any, password: any, amount: any) {

    const data = {
      acno,
      password,
      amount
    }
    //deposit api

    return this.http.post("http://localhost:3000/deposit", data, this.getOptions())

  }

   


  //to add token inside the http header
  getOptions() {
    const token = JSON.parse(localStorage.getItem("token") || '')
    let headers = new HttpHeaders()

    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers
    }
    return options
  }









  //withdrawl API

  withdrawl(acno: any, password: any, amount: any) {

    const data = {
      acno,
      password,
      amount
    }
    //deposit api

    return this.http.post("http://localhost:3000/withdraw", data, this.getOptions())

  }
}
  

    




