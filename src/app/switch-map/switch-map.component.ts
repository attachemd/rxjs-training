import { Component, OnInit } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { RxjsService } from 'src/shared/rxjs.service';

@Component({
  selector: 'app-switch-map',
  template: `
    <p>
      switch-map works!
    </p>
  `,
  styles: [
  ]
})
export class SwitchMapComponent implements OnInit {

  constructor(private _rxjs: RxjsService) { }

  ngOnInit(): void {
        // using switchMap
        console.log("******** switchMap *********");
        from([21,22,23,24]).pipe(
          switchMap(param => this._rxjs.getData(param))
        ).subscribe(val => console.log(val));
  }

}
