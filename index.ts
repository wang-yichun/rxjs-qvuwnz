import { of, timer, concat, merge, combineLatest, Observable } from "rxjs";
import { map, mapTo } from "rxjs/operators";

console.log("test>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", new Date());

let timer0 = timer(1000).pipe(mapTo("zero"));
let timer1 = timer(2000).pipe(mapTo("one"));
// let empty = new Observable(o => o.complete());
let one = of(null);
// timer0.pipe(mapTo('zero')).subscribe(_ => console.log(_));
// timer1.pipe(mapTo('one')).subscribe(_ => console.log(_));

// merge(timer0, timer1).subscribe(_ => console.log(_))
combineLatest([timer0, timer1, one]).subscribe(
  ([v0, v1, v2]) => {
    console.log(`t0 - ${v0}  t1 - ${v1} t2 - ${v2}`);
  },
  null,
  () => {
    console.log("complete");
  }
);

// source.subscribe(x => console.log(x));
              