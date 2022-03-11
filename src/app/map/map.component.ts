// https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff#:~:text=Use%20mergeMap%20if%20you%20simply,order%20is%20important%20to%20you.
import { Component, OnInit } from '@angular/core';
import { delay, filter, from, map, of } from 'rxjs';
import { RxjsService } from 'src/shared/rxjs.service';

@Component({
  selector: 'app-map',
  template: `
    <p>
      map works!
    </p>
  `,
  styles: [
  ]
})
export class MapComponent implements OnInit {

  constructor(private _rxjs: RxjsService) { }

  ngOnInit(): void {

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


    console.log("********* from *********");

    from([1, 2, 3, 4, null]).pipe(
      filter(param => !!param),
      map(param => this._rxjs.getData(param))
    ).subscribe(val => console.log(val));

    console.log("********* from *********");
    from([1, 2, 3, 4, null]).pipe(
      map(param => this._rxjs.getData(param))
    ).subscribe(val => val.subscribe(data => console.log(data)));

  }

}
