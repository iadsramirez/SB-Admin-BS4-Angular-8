import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constants } from '../configuracion/Constants';

@Injectable({
  providedIn: 'root'
})
export class AccionPersonalService {

    baseUrlAccionPersonal:any=Constants.API_URL+'8451/infosweb/api/v1/rrhh/accion-personal/';

  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  obtenerAccionPersonalList(objeto:any):Observable<any>{
    return this.http.post(this.baseUrlAccionPersonal+'lista-accion-personal', objeto).pipe(catchError(this.handleError));
  }

  public obtenerTipoAccion(cia:number,rol:number):Observable<any>{
      return this.http.get(this.baseUrlAccionPersonal+'tipo-accion-afecta-planilla'+'/'+cia+'/'+rol);

  }



  public obtenerNoAfectaTipoAccion(cia:number,rol:string):Observable<any>{
    return this.http.get(this.baseUrlAccionPersonal+'tipo-accion-no-afecta-planilla'+'/'+cia+'/'+rol);

}



public motivos(cia:number):Observable<any>{
    return this.http.get(this.baseUrlAccionPersonal+'motivos'+'/'+cia);

}


public guardarAccionNoAfectaPlanilla(objeto:any):Observable<any>{
return this.http.post(this.baseUrlAccionPersonal+'guardar-accion',objeto);
}

}
