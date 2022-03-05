import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }
  public getData = (param: any) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }
}
