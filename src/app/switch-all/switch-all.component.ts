import { Component, OnInit } from '@angular/core';
import { from, map, switchAll } from 'rxjs';
import { RxjsService } from 'src/shared/rxjs.service';

@Component({
  selector: 'app-switch-all',
  template: `
    <p>
      switch-all works!
    </p>
  `,
  styles: [
  ]
})
export class SwitchAllComponent implements OnInit {

  constructor(private _rxjs: RxjsService) { }

  ngOnInit(): void {
        // using map and switchAll
        console.log("******** switchAll *********");
        from([11,12,13,14]).pipe(
          map(param => this._rxjs.getData(param)),
          switchAll()
        ).subscribe(val => console.log(val));
  }

}
