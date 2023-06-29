import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from './models/Feature';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://localhost:7121";
  private featureUrl: string = `${this.baseUrl}/features`;

  constructor(private http: HttpClient) { }

  getFeatures() {
    return this.http.get<Feature[]>(this.featureUrl)
  }

  addFeature(feature: Feature) {
    feature.priority = +feature.priority
    return this.http.post<Feature>(this.featureUrl, feature);
  }

  getFeature(id: number) {
    return this.http.get<Feature>(`${this.featureUrl}/${id}`)
  }

  deleteFeature(id: number) {
    return this.http.delete(`${this.featureUrl}/${id}`)
  }

  updateFeature(feature: Feature) {
    feature.priority = +feature.priority
    return this.http.put(this.featureUrl, feature);
  }
}
