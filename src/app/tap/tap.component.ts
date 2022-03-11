
// https://blog.angulartraining.com/three-reasons-to-use-the-tap-operator-from-rxjs-6828fcf288ec
import { Component, OnInit } from '@angular/core';
import { filter, from, map, mergeMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  template: `
    <p>
      tap works!
    </p>
  `,
  styles: [
  ]
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


    data.pipe(
      // map(cars => cars.flatMap(car => car.brand)),
      mergeMap(car => car),
      map(car => car.model),
      // tap(console.log),
      // filter(brand => brand.startsWith("p")),
      tap(data => console.log(data))
    ).subscribe(data => console.log(data));
  }

}
