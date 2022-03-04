import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-training';
  ngOnInit(): void {
    var observable = Observable.create((observer: any) => {
      observer.next('Hello World!');
      observer.next('Hello Again!');
      observer.complete();
      observer.next('Bye');
    })
    observable.subscribe(
      (x: any) => logItem(x),
      (error: any) => logItem('Error: ' + error),
      () => logItem('Completed')
    );
    function logItem(val: any) {
      var node = document.createElement("li");
      var textnode = document.createTextNode(val);
      node.appendChild(textnode);
      window.document.getElementById("list")?.appendChild(node);
    }

    // lets create our data first
    const data = of([
      {
        brand: 'porsche',
        model: '911'
      },
      {
        brand: 'porsche',
        model: 'macan'
      },
      {
        brand: 'ferarri',
        model: '458'
      },
      {
        brand: 'lamborghini',
        model: 'urus'
      }
    ]);

    // get data as brand+model string. Result: 
    // ["porsche 911", "porsche macan", "ferarri 458", "lamborghini urus"]
    data
      .pipe(
        map(cars => cars.map(car => `${car.brand} ${car.model}`))
      ).subscribe(cars => console.log(cars))

    // filter data so that we only have porsches. Result:
    // [
    //   {
    //     brand: 'porsche',
    //     model: '911'
    //   },
    //   {
    //     brand: 'porsche',
    //     model: 'macan'
    //   }
    // ]
    data
      .pipe(
        map(cars => cars.filter(car => car.brand === 'porsche'))
      ).subscribe(cars => console.log(cars))
  }
}

const getData = (param: any) => {
  return of(`retrieved new data with param ${param}`).pipe(
    delay(1000)
  )
}
console.log("******** from *********");

from([1, 2, 3, 4]).pipe(
  map(param => getData(param))
).subscribe(val => console.log(val));

console.log("******** from *********");
from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data)));

console.log("******** mergeAll *********");
from([1,2,3,4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val));

console.log("******** mergeAll *********");
from([1,2,3,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val));