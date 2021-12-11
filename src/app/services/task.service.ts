import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'https://siaseapi.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(this.URL + '/tasks');
  }

  getPrivateTasks() {
    return this.http.get<any>(this.URL + '/schedules/detail?claveUnidad=01&clavePlanEstudios=420&claveNivelAcademico=02&claveGradoAcademico=03&claveModalidad=1&claveDependencia=02308&claveCarrera=44&periodo=0x0000000000349101');
  }

}
