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
  selectedLanguage = "java";
  editor : any;
  wait = false;
  constructor(private jdoodleService:JdoodleService) { }

  ngOnInit(): void {
     this.editor = ace.edit("editor");
    //editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/java");
    this.editor.setValue(defaultCodeJSON.java);
  }

  run(){
    this.wait = true;
    let code = this.editor.getValue();
    this.jdoodleService.sendRequest(code,this.selectedLanguage).subscribe(
      data => { this.output.emit(data); this.wait=false}
    );
  }

  changeLanguage(event : Event){
    let language = (<HTMLInputElement>event.target).value;
    this.selectedLanguage = language;
    switch(language){
      case "java"  : this.editor.setValue(defaultCodeJSON.java); break;
      case "c"     : this.editor.setValue(defaultCodeJSON.c);
                     language="c_cpp"; break;
      case "python": this.editor.setValue(defaultCodeJSON.python); break;
      case "ruby"  : this.editor.setValue(defaultCodeJSON.ruby); break;
    }
    this.editor.session.setMode(`ace/mode/${language}`);
  }

}
