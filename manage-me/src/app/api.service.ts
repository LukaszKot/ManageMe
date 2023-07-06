import { Injectable } from '@angular/core';
import { Feature } from './models/Feature';
import { Task } from './models/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private features: Feature[] = [];
  private counter = 0;

  constructor() {
    let data = localStorage.getItem('features');
    this.features = data ? JSON.parse(data) : [];
  }

  getFeatures(): Observable<Feature[]> {
    return new Observable((observer) => {
      observer.next(this.features)
    });
  }

  addFeature(feature: Feature): Observable<Feature> {
    return new Observable((observer) => {
      feature.state = +feature.state;
      feature.priority = +feature.priority;
      this.features.push(feature)
      feature.id = ++this.counter;
      localStorage.setItem('features', JSON.stringify(this.features))
      observer.next(feature)
    });
  }

  getFeature(id: number): Observable<Feature> {
    return new Observable((observer) => {
      let feature = this.features.find(x => x.id == id);
      observer.next(feature)
    });
  }

  deleteFeature(id: number): Observable<any> {
    return new Observable((observer) => {
      this.features = this.features.filter(x => !(x.id == id));
      localStorage.setItem('features', JSON.stringify(this.features))
      observer.next()
    });
  }

  updateFeature(feature: Feature): Observable<any> {
    return new Observable((observer) => {
      feature.state = +feature.state;
      feature.priority = +feature.priority;
      this.features = this.features.filter(x => !(x.id == feature.id));
      this.features.push(feature);
      this.features = this.features.sort((a, b) => a.id! - b.id!)
      localStorage.setItem('features', JSON.stringify(this.features))
      observer.next()
    });
  }

  getTasks(): Observable<Task[]> {
    return new Observable((observer) => {
      observer.next(this.features.flatMap(x => x.tasks).sort((a, b) => a.id! - b.id!))
    });
  }

  addTask(task: Task): Observable<Task> {
    return new Observable((observer) => {
      let feature = this.features.find(x => x.id == +task.featureId)
      task.featureId = +task.featureId;
      task.state = +task.state;
      task.priority = +task.priority;
      feature?.tasks.push(task)
      task.id = ++this.counter;
      localStorage.setItem('features', JSON.stringify(this.features))
      observer.next(task)
    });
  }

  getTask(id: number): Observable<Task> {
    return new Observable((observer) => {
      observer.next(this.features.flatMap(x => x.tasks).find(x => x.id == id))
    });
  }

  deleteTask(id: number): Observable<any> {
    return new Observable((observer) => {
      let feature = this.features.find(x => x.tasks.findIndex(x => x.id == id));
      feature!.tasks = feature!.tasks.filter(x => !(x.id == id))
      localStorage.setItem('features', JSON.stringify(this.features))
      observer.next()
    });
  }

  updateTask(task: Task): Observable<any> {
    return new Observable((observer) => {
      task.featureId = +task.featureId;
      task.priority = +task.priority;
      task.state = +task.state;
      let feature = this.features.find(x => x.tasks.filter(x => x.id == task.id).length != 0);
      feature!.tasks = feature!.tasks.filter(x => !(x.id == task.id))
      let newFeature = this.features.find(x => x.id == +task.featureId)
      newFeature?.tasks.push(task)
      newFeature!.tasks = newFeature!.tasks.sort((a, b) => a.id! - b.id!)
      localStorage.setItem('features', JSON.stringify(this.features))
      observer.next()
    });
  }
}
