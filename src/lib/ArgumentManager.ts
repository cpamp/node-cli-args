import { IArgumentCallback } from './IArgumentCallback';
import { Argument } from './Argument';
import { IDefaultCallback } from './IDefaultCallback';

const SINGLE_DASH = '-';
const DOUBLE_DASH = '--';
const EQUAL = '=';

export class ArgumentManager {
    private shorts: string[] = [];
    private longs: string[] = [];
    private defaults: string[] = [];

    private registeredShorts: string[] = [];
    private registeredLongs: string[] = [];

    constructor() {
        var args = process.argv.slice(2);
        args.forEach((arg, i) => {
            if (arg.length > 2 && arg.indexOf(DOUBLE_DASH) === 0) {
                this.longs.push(arg.slice(2));
            } else if (arg.length > 1 && arg.indexOf(SINGLE_DASH) === 0) {
                var shorts = arg.split('');
                shorts.forEach((short) => {
                    this.shorts.push(short);
                });
            } else {
                this.defaults.push(arg);
            }
        });
    }

    private getValue (arg: string, value: string): string {
        var indexEqual: number = arg.indexOf(EQUAL);
        if (indexEqual !== -1) {
            return arg.substr(indexEqual + 1);
        } else { 
            return value;
        }
    }

    private indexOf (arr: string[], arg: string): number {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(arg) === 0) return i;
        }
        return -1;
    }

    private callArg (lngShrt: string[], arg: string, defaultValue: any, callback: IArgumentCallback): boolean {
        var index = this.indexOf(lngShrt, arg);
        if (index !== -1) {
            var value = this.getValue(lngShrt[index], defaultValue);
            callback(value, defaultValue);
            return true;
        }
        return false;
    }

    private remove (arg: Argument) {
        var longIndex = this.longs.indexOf(arg.getLong());
        var shortIndex = this.shorts.indexOf(arg.getShort());
        if (longIndex !== -1) this.longs[longIndex] = '';
        if (shortIndex !== -1) this.shorts[shortIndex] = '';
    }

    public onDefault(callback: IDefaultCallback) {
        callback(this.defaults);
    }

    public on(arg: Argument, callback: IArgumentCallback) {
        this.register(arg);
        var defaultValue = arg.getDefaultValue();
        var called: boolean =
            this.callArg(this.longs, arg.getLong(), defaultValue, callback) ||
            this.callArg(this.shorts, arg.getShort(), defaultValue, callback);

        if (called) {
            this.remove(arg);
        }
    }

    private register(arg: Argument) {
        this.checkRegistered(arg);
        this.registeredLongs.push(arg.getLong());
        this.registeredShorts.push(arg.getShort());
    }

    private checkRegistered(arg: Argument) {
        if (this.indexOf(this.registeredLongs, arg.getLong()) !== -1) {
            throw 'The long argument ' + arg.getLong() + ' has already been registered';
        }
        if (this.indexOf(this.registeredShorts, arg.getShort()) !== -1) {
            throw 'The short argument ' + arg.getShort() + ' has already been registered';
        }
    }
}

export { Argument } from './Argument';