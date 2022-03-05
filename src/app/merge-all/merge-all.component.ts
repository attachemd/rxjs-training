import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll } from 'rxjs';
import { RxjsService } from 'src/shared/rxjs.service';

@Component({
  selector: 'app-merge-all',
  template: `
    <p>
      merge-all works!
    </p>
  `,
  styles: [
  ]
})
export class MergeAllComponent implements OnInit {

  constructor(private _rxjs: RxjsService) { }

  ngOnInit(): void {
    console.log("******** mergeAll *********");
    from([1, 2, 3, 4]).pipe(
      map(param => this._rxjs.getData(param)),
      mergeAll()
    ).subscribe(val => console.log(val));
  }

}
