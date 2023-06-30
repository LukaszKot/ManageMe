import { Injectable, OnInit } from '@angular/core';
import { Feature } from './models/Feature';
import { Task } from './models/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private features: Feature[] = [];
  private counter = 0;

  constructor() { }

  getFeatures(): Observable<Feature[]> {
    return new Observable((observer) => {
      console.log(this.features)
      observer.next(this.features)
    });
  }

  addFeature(feature: Feature): Observable<Feature> {
    return new Observable((observer) => {
      this.features.push(feature)
      feature.id = ++this.counter;
      console.log(this.features)
      observer.next(feature)
    });
  }

  getFeature(id: number): Observable<Feature> {
    return new Observable((observer) => {
      let feature = this.features.find(x => x.id == id);
      console.log(this.features)
      observer.next(feature)
    });
  }

  deleteFeature(id: number): Observable<any> {
    return new Observable((observer) => {
      this.features = this.features.filter(x => !(x.id == id));
      console.log(this.features)
      observer.next()
    });
  }

  updateFeature(feature: Feature): Observable<any> {
    return new Observable((observer) => {
      this.features = this.features.filter(x => !(x.id == feature.id));
      this.features.push(feature);
      this.features = this.features.sort((a, b) => a.id! - b.id!)
      console.log(this.features)
      observer.next()
    });
  }

  getTasks(): Observable<Task[]> {
    return new Observable((observer) => {
      console.log(this.features)
      observer.next(this.features.flatMap(x => x.tasks).sort((a, b) => a.id! - b.id!))
    });
  }

  addTask(task: Task): Observable<Task> {
    return new Observable((observer) => {
      let feature = this.features.find(x => x.id == +task.featureId)
      task.featureId = +task.featureId;
      feature?.tasks.push(task)
      task.id = ++this.counter;
      console.log(this.features)
      observer.next(task)
    });
  }

  getTask(id: number): Observable<Task> {
    return new Observable((observer) => {
      console.log(this.features)
      observer.next(this.features.flatMap(x => x.tasks).find(x => x.id == id))
    });
  }

  deleteTask(id: number): Observable<any> {
    return new Observable((observer) => {
      let feature = this.features.find(x => x.tasks.findIndex(x => x.id == id));
      feature!.tasks = feature!.tasks.filter(x => !(x.id == id))
      console.log(this.features)
      observer.next()
    });
  }

  updateTask(task: Task): Observable<any> {
    return new Observable((observer) => {
      task.featureId = +task.featureId;
      let feature = this.features.find(x => x.tasks.findIndex(x => x.id == task.id) != -1);
      feature!.tasks = feature!.tasks.filter(x => !(x.id == task.id))
      let newFeature = this.features.find(x => x.id == +task.featureId)
      newFeature?.tasks.push(task)
      newFeature!.tasks = feature!.tasks.sort((a, b) => a.id! - b.id!)
      console.log(this.features)
      observer.next()
    });
  }
}
