import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.css']
})
export class OutputSectionComponent implements OnInit {
  @Input() output:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
