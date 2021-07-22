import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client.model';
import { Supporter } from '../models/supporter.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  public auth:any;
  public client:Client;
  public supporter:Supporter;
  token: string = '';

  private saveToken(idClient: string){
    this.token = idClient;
    localStorage.setItem('token', this.token);
 }

 private extractData(res: Response) {
  let body = res;
  return body || { };
}

constructor( private http:HttpClient ) { }
  

listSupporters(){
  const url = `${base_url}/Supporter/GetSupporters`;
  return this.http.get(url).pipe(
    map(this.extractData),
    catchError(this.handleError<any>('list supports'))
    );
}

getClientById(id:number){
  const url = `${base_url}/Supervisor/${id}`;
  return this.http.get(url).pipe(
    map(this.extractData),
    catchError(this.handleError<any>('get client'))
    );
}


 addSupport( supporter: Supporter ){
    const url = `${base_url}/Supporter/PostSupporter`;
    return this.http.post<any>(url, JSON.stringify(supporter), httpOptions)
    .pipe(
      map(this.extractData),      
      catchError(this.handleError<any>('addsupporter'))
    );
  }

  login( email:string,password:string ){
    const url = `${base_url}/Supervisor/GetLogin/${email}/${password}`;
    return this.http.get(url).pipe(
      catchError(this.handleError<any>('login')),
      map(resp =>{
        if(resp){
          this.saveToken(resp.id_supervisor);
          this.client = resp;
        }
          return resp;
      })
    );
  }
  loginSupport( email:string,password:string ){
    const url = `${base_url}/Supporter/GetLogin/${email}/${password}`;
    return this.http.get(url).pipe(
      catchError(this.handleError<any>('login')),
      map(resp =>{
        if(resp){
          this.saveToken(resp.id_supervisor);
          this.supporter = resp;
        }
          return resp;
      })
    );
  }
  isLogin(): boolean{
    return parseInt(this.token) > 0;
  }


  
logout(){
  localStorage.removeItem('token');
  this.client=null;
}

private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}