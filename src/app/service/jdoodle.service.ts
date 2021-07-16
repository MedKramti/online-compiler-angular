import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JdoodleService {

  private requestURL = "https://api.jdoodle.com/v1/execute";
  constructor(private http: HttpClient) { }

  public sendRequest(code:string): Observable<Response>{
    let formData:FormData = new FormData();
    formData.append("lang","java");
    formData.append("code",code);
    formData.append("input","");
    formData.append("save","false");
    return this.http.post<Response>(this.requestURL,formData);
  }
}
