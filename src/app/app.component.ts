import { Component } from '@angular/core';
import { Response } from './class/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output : string = "";
  handleOutput(response : Response){
    console.log(response.output);
    this.output = response.output;
  }


}
