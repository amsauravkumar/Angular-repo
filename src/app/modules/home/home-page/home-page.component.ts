import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('data', { static: false }) ggg : NgForm; 
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.ggg)
    this.ggg.reset();
  }

}
