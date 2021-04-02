import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public title: string = "Data Binding";

  public name: string = '';

  public age: number = 0;

  public gender: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
