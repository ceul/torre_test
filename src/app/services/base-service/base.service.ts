import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private headers: {} = {}

  constructor(private http: HttpClient) {
    this.headers['Accept'] = '*/*';
  }

  getUser(user: string) {
    return new Promise(async (resolve, reject) => {
      try {
        this.http.get(`${environment.getUser}${user}`).pipe(take(1))
          .subscribe((response: any) => {
            resolve(response);
          });
      } catch (err) {
        console.log('An error occurred getting the user: ', err);
      }
    })
  }

  getJob(job: string) {
    return new Promise(async (resolve, reject) => {
      try {
        this.http.get(`${environment.getJob}${job}`).pipe(take(1))
          .subscribe((response: any) => {
            resolve(response);
          });
      } catch (err) {
        console.log('An error occurred getting the job: ', err);
      }
    })
  }

  searchJobs() {
    return new Promise(async (resolve, reject) => {
      try {
        this.http.post(`${environment.searchJobs}offset=0&size=20&aggregate=true`, {}, { headers: this.headers }).pipe(take(1))
          .subscribe((response: any) => {
            resolve(response);
          });
      } catch (err) {
        console.log('An error occurred getting the jobs: ', err);
      }
    })
  }

  searchPeople() {
    return new Promise(async (resolve, reject) => {
      try {
        this.http.post(`${environment.searchPeople}offset=0&size=20&aggregate=true`, {}, { headers: this.headers }).pipe(take(1))
          .subscribe((response: any) => {
            resolve(response);
          });
      } catch (err) {
        console.log('An error occurred getting the jobs: ', err);
      }
    })
  }
}
