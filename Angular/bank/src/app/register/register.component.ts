import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resourceLimits } from 'worker_threads';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerform = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]

  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }



  ngOnInit(): void {
  }
  register() {





    var uname = this.registerform.value.name
    var acno = this.registerform.value.accno
    var pswd = this.registerform.value.pswd

    // var result = this.ds.register(uname, acno, pswd)

    if (this.registerform.valid) {

      //asynchronous

      this.ds.register(acno, uname, pswd).subscribe((result: any) => {
        if (result) {
          alert(result.messege)
          this.router.navigateByUrl("")
        }
      },
        result => {
          alert(result.error.messege)
        }
      )
    }
      else {
        alert("Invalid Form")
      }
    
  }


}
