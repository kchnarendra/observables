import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscrioption: Subscription;
  customObsSubscrioption: Subscription;

  constructor() { }

  ngOnInit() {
    // const myNumbers = interval(1000)
    // .pipe(map(
    //   (data: number) => {
    //     return data * 2;
    //   }
    // ));

    // this.numbersObsSubscrioption = myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      // setTimeout(() => {
      //   observer.next('first package');
      // }, 2000);
      // setTimeout(() => {
      //   observer.next('second package');
      // }, 4000);  
      // setTimeout(() => {
      //   observer.complete();
      // }, 5000); 
      // // setTimeout(() => {
      // //   observer.next('third package');
      // // }, 6000);  
      // setTimeout(() => {
      //   observer.error('this does not work');
      // }, 5000); 


      // var counter = 0;
      // var i = setInterval(function(){
      //   // do your thing
      //   observer.next('Test');
      //   counter++;
      //   if(counter === 10) {
      //     observer.complete();
      //     observer.next('Test two');
      //     console.log("loggggg");
          
      //   }
      // }, 1000);
      

    });

    this.customObsSubscrioption = myObservable.subscribe(
     
      (data: string) => { console.log('DATA  ' + data); },
      (errorXX: string) => { console.log('ERROR  ' + errorXX); },
      () => { console.log('completed'); }
     
    );
  }

  ngOnDestroy(){
    this.numbersObsSubscrioption.unsubscribe();
    this.customObsSubscrioption.unsubscribe();
  }
}
