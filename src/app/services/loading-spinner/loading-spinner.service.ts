import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingSpinner } from '../../models/loading-spinner.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private loaderSubject = new Subject<LoadingSpinner>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<LoadingSpinner>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<LoadingSpinner>{ show: false });
  }

}
