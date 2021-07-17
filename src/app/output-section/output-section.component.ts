import { Component, Input, OnInit } from '@angular/core';
import {Response} from '../class/response'
@Component({
  selector: 'output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.css']
})
export class OutputSectionComponent implements OnInit {
  @Input() output!:Response;
  constructor() { }

  ngOnInit(): void {
  }

}
