
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userRole$ = new ReplaySubject<string>(1);
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

    this._startObservable().subscribe((toTest) => {
      console.log(toTest);
    });
    // this._startObservable()
    // this._startNewObservable().subscribe((toTest) => {
    //   console.log(toTest);
    // });
    this.userRole$.next("userRole$");
  }

  private _startObservable() {
    return new Observable<string>((observer) => {
      this.userRole$.subscribe((toTest) => {
        console.log(toTest);
        console.log("strange!");
        observer.next("_startObservable");
        observer.complete();
      });
    });
  }

  private _startNewObservable() {
    return new Observable<string>((observer) => {
        observer.next("_startNewObservable");
        observer.complete();
    });
  }
  //   redirectTo(uri:string){
  //     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //     this.router.navigate([uri]));
  //  }
}