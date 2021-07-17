import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JdoodleService } from '../service/jdoodle.service';
import { Request } from '../class/request';
import { Response } from '../class/response';
import defaultCodeJSON from './defaultCode.json'
declare var ace:any;
@Component({
  selector: 'source-section',
  templateUrl: './source-section.component.html',
  styleUrls: ['./source-section.component.css']
})
export class SourceSectionComponent implements OnInit {

  @Output() output : EventEmitter<Response> = new EventEmitter<Response>();

  editor : any;
  constructor(private jdoodleService:JdoodleService) { }

  ngOnInit(): void {
     this.editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/java");
    this.editor.setValue(defaultCodeJSON.java);
  }

  run(){
    let code = this.editor.getValue();
    let language = "java";
    this.jdoodleService.sendRequest(code,language).subscribe(
      data => { this.output.emit(data); }
    );
  }

  changeLanguage(event : Event){
    
    switch((<HTMLInputElement>event.target).value){
      case "java"  : this.editor.setValue(defaultCodeJSON.java); break;
      case "c"  :  this.editor.setValue(defaultCodeJSON.c); break;
      case "python3"  : this.editor.setValue(defaultCodeJSON.python); break;
      case "ruby"  : this.editor.setValue(defaultCodeJSON.ruby); break;
    }

  }




}
