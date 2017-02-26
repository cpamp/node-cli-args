import { ArgumentManager, Argument } from '../lib/ArgumentManager';
var Arguments = new ArgumentManager();
Arguments.on(new Argument('hello', 'h', 'world'), (val) => {
    console.log('Hello' + val);
});

Arguments.on(new Argument('bye', 'b', 'worldss'), (val) => {
    console.log('Goodbye ' + val);
});

Arguments.on(new Argument('another one', 'b', 'yes'), (v) => {
    console.log(v);
});

Arguments.onDefault((defaults) => {
    console.log(defaults);
});