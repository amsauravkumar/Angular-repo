import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
valid = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.valid=form.valid;
  }

}
