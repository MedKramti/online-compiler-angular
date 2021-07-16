import { Component, OnInit } from '@angular/core';
import { JdoodleService } from '../service/jdoodle.service';
declare var ace:any;
@Component({
  selector: 'source-section',
  templateUrl: './source-section.component.html',
  styleUrls: ['./source-section.component.css']
})
export class SourceSectionComponent implements OnInit {
  sourceCode:string = "";
  editor : any;
  constructor(private jdoodleService:JdoodleService) { }

  ngOnInit(): void {
     this.editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/java");
  }

  run(){
    let code = this.editor.getValue();
    this.jdoodleService.sendRequest(code).subscribe(
      data => { console.log( data ); }
    );
  }



}
