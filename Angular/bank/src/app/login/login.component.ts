import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "STATE BANK OF INDIA"
  accno = "Enter Account number please..."



  LoginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // get_accno(event:any)
  // {
  //   console.log(event.target.value);
  //   this.acno=event.target.value

  // }



  // get_pswd(event:any)
  // {
  //   console.log(event.target.value);
  //   this.pswd=event.target.value
  // }
  login() {
    var acno = this.LoginForm.value.acno
    var pswd = this.LoginForm.value.pswd

    if (this.LoginForm.valid) {

      this.ds.login(acno, pswd).subscribe((result: any) => {
        if (result) {
          localStorage.setItem("currentUname", JSON.stringify(result.currentUname))
          localStorage.setItem("currentUname", JSON.stringify(result.currentAcno))
          localStorage.setItem("currentUname", JSON.stringify(result.token))
          alert(result.messege)
          this.router.navigateByUrl("dashboard")

        }
      },
        (result) => {
          alert(result.error.messege)
        })

    }

    else {
      alert('Invalid Form')
    }
  }

  //     })
  //     if (result) {
  //       alert("LogInSuccessfull")
  //       this.router.navigateByUrl("dashboard")
  //     }
  //   }
  //   else{
  //     alert('Invalid Form')
  //   }

  // }



  // }
  // login(a:any,p:any)
  // {
  //   var acno=a.value
  //   var pswd=p.value

  //   var db=this.database

  //   if(acno in db)
  //   {
  //     if(pswd == db[acno]["password"])
  //     {
  //       alert("login Successfull")
  //     }
  //     else{
  //       alert("Invalid Password")
  //     }
  //   }
  //   else{
  //     alert("invalid Account Number")
  //   }
  // }

}
