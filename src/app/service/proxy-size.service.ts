import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProxySizeService {

  constructor(private cliente:HttpClient) { }

  apiURL:string="http://localhost:8080/"

  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'aplication/json'
      })
  }

  handleError(error: any) {
      let errorMessage = '';

      if(error.error instanceof ErrorEvent){
          //Get client-side error
          errorMessage = error.error.message;
      }else{
          //Get server-side error
          errorMessage = `Error code: ${error.status}\n Message: ${error.message}`
      }

      window.alert(errorMessage);
      return throwError(errorMessage);
  }

  getArray():Observable<number[]>{
    return this.cliente.get<number[]>(this.apiURL+"proxySize", this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
