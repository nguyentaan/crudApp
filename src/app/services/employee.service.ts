import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:5269/api/Crud', data);
  }

  updateEmployee(id: number,data: any): Observable<any> {
    return this._http.put(`http://localhost:5269/api/Crud/${id}`, data);
  }

  getEmployeeList(data: any): Observable<any> {
    return this._http.get('http://localhost:5269/api/Crud');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:5269/api/Crud/${id}`);
  }
}
