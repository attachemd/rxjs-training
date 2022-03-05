import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, from, map, mergeAll, mergeMap, Observable, of, switchAll, switchMap } from 'rxjs';

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

  }
//   redirectTo(uri:string){
//     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
//     this.router.navigate([uri]));
//  }
}