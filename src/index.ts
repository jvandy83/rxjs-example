import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next("Alex");
  subscriber.next("Ally");
});

const observer = (value: any) => console.log("Subscription 1: ", value);

observable$.subscribe(observer);
