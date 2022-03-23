import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {




  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  withdrawlForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })





  user: any
  acno: any
  ltime: any
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.user =JSON.parse( localStorage.getItem("currentUname")||'')
    this.ltime = new Date()
  }

  ngOnInit(): void {

    if (!localStorage.getItem("currentAcno")) {
      alert("please login!!!")
      this.router.navigateByUrl("")
    }
  }
  deposit() {


    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.password
    var amount = this.depositForm.value.amount


    if (this.depositForm.valid) {
      this.ds.deposit(acno, pswd, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.messege)
          }
        },
          (result) => {
            alert(result.error.messege)
          }
        )
    }
    else {
      alert('invalid form')
    }
  }


 

  withdrawl() {



    var acno = this.withdrawlForm.value.acno1
    var password = this.withdrawlForm.value.pswd1
    var amount = this.withdrawlForm.value.amount1
    if (this.withdrawlForm.valid) {

      //asynchronous

      var result = this.ds.withdrawl(acno, password, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.messege)
          }
        },
          (result) => {
            alert(result.error.messege)
          }
        )


    }
    else {
      alert('invalid form')
    }
  }

  logout() {
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
  deleteAcc() {
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || '')
  }
  cancelFromParent() {
    this.acno = ""


  }
}

