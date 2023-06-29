import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './models/Feature';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://localhost:7121";

  constructor(private http: HttpClient) { }

  getFeatures() {
    return this.http.get<Feature[]>(`${this.baseUrl}/features`)
  }
}
