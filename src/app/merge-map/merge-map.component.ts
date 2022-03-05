import { Component, OnInit } from '@angular/core';
import { delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  template: `
    <p>
      merge-map works!
    </p>
  `,
  styles: [
  ]
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const getData = (param: any) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      )
    }


    console.log("******** mergeMap *********");
    from([1, 2, 3, 4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log(val));
  }

}
