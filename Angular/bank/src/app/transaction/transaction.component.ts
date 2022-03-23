import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:any
  acno:any

  constructor(private ds:DataService) {
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
    this.transaction=this.ds.getTransaction(this.acno)
    console.log(this.transaction)
   }

  ngOnInit(): void {
  }

}
