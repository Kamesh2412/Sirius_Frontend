import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {
  public quoteForm: FormGroup|any;
  constructor() { }

  initForm() {
    this.quoteForm = new FormGroup({
      yourName: new FormControl({value:null}, Validators.required),
      contactNo: new FormControl({value:null}, Validators.required),
      email: new FormControl({value:null}, Validators.required)
    })
  }
  ngOnInit(): void {
    this.initForm()
  }

}
