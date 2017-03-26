import { ArgumentManager, Argument } from '../lib/ArgumentManager';
var Arguments = new ArgumentManager();
Arguments.on(new Argument('hello', 'h', 'world'), (val) => {
    console.log('Hello' + val);
});

Arguments.on(new Argument('bye', 'b', 'worldss'), (val) => {
    console.log('Goodbye ' + val);
});

try {
    Arguments.on(new Argument('bye', 'z', 'worldss'), (val) => {
        console.log('Goodbye ' + val);
    });
} catch(e) {
    console.log(e);
}

try {
    Arguments.on(new Argument('bzz', 'b', 'worldss'), (val) => {
        console.log('Goodbye ' + val);
    });
} catch(e) {
    console.log(e);
}

Arguments.on(new Argument('another one', 'c', 'yes'), (v) => {
    console.log(v);
});

Arguments.onDefault((defaults) => {
    console.log(defaults);
});