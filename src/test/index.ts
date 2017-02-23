import { Arguments, Argument } from '../lib/ArgumentManager';

Arguments.on(new Argument('hello', 'h', 'world'), (val) => {
    console.log('Hello' + val);
});

Arguments.on(new Argument('bye', 'b', 'worldss'), (val) => {
    console.log('Goodbye ' + val);
});

Arguments.on(new Argument('another one', 'b', 'yes'), (v) => {
    console.log(v);
});