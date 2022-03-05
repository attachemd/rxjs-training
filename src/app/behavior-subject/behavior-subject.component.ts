import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { RxjsService } from 'src/shared/rxjs.service';

@Component({
  selector: 'app-behavior-subject',
  template: `
    <p>
      behavior-subject works!
    </p>
  `,
  styles: [
  ]
})
export class BehaviorSubjectComponent implements OnInit {

  constructor(private _rxjs: RxjsService) { }

  ngOnInit(): void {
    console.log("******** BehaviorSubject *********");
    const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red']
    const activeFilters = new BehaviorSubject('attache');

    const applyFilters = () => {
      filters.forEach((filter, index) => {

        let newFilters = activeFilters.value;
        if (index === 0) {
          newFilters = `?${filter}`
        } else {
          newFilters = `${newFilters}&${filter}`
        }
        // console.log(newFilters);
        
        activeFilters.next(newFilters)
      })
    }
    console.log("******** switchMap *********");
    // using switchMap
    activeFilters.pipe(
      switchMap(param => this._rxjs.getData(param))
    ).subscribe(val => console.log(val));

    console.log("******** applyFilters *********");
    applyFilters()
  }

}
