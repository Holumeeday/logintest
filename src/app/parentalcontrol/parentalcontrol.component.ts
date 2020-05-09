import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentalcontrol',
  templateUrl: './parentalcontrol.component.html',
  styleUrls: ['./parentalcontrol.component.css']
})
export class ParentalcontrolComponent implements OnInit {
  myDate = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
