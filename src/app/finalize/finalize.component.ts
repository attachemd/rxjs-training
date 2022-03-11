// https://juristr.com/blog/2019/04/rxjs-finalize-operator/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalize',
  template: `
    <p>
      finalize works!
    </p>
  `,
  styles: [
  ]
})
export class FinalizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
