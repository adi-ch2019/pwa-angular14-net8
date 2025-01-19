import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = "http://localhost:5185/api/Values"

  constructor(private http:HttpClient) { }

// GET all values
getValues(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

// POST a new value
addValue(value: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, value, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

// GET a value by ID
getValueById(id: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}

// PUT (update) a value by ID
updateValue(id: number, value: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${id}`, value, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

// DELETE a value by ID
deleteValue(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}
  
}
