import { of, timer } from 'rxjs'; 
import { map } from 'rxjs/operators';


let timer0 = timer(1000);

timer0.subscribe(_ => console.log(_));

// source.subscribe(x => console.log(x));