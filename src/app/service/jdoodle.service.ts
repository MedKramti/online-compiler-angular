import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../class/request';
import { Response } from '../class/response';
// edit clientId and secretId inside jdoodle-key-example.json
// rename the file to jdoodle-key.json
import key from './jdoodle-key.json';
@Injectable({
  providedIn: 'root'
})
export class JdoodleService {
  private clientId:string;
  private secretId:string;
  private requestURL = "https://proxy-forw.herokuapp.com/https://api.jdoodle.com/v1/execute";
  constructor(private http: HttpClient) { 
    this.clientId = "";
    this.secretId = "";
  }

  public sendRequest(code:string, language:string){
    let request:Request = new Request( this.clientId, this.secretId, code, language, "0");
    return this.http.post<Response>(this.requestURL,request);
  }
}
