

export class Argument {

    constructor(private long: string, private short?: string, private defaultValue?: string) { }

    public getLong = (): string => {
        return this.long;
    };

    public getShort = (): string => {
        return this.short;
    };

    public getDefaultValue = (): string => {
        return this.defaultValue;
    };

    public equals = (arg: Argument): boolean => {
        return arg.getLong() === this.long;
    };

    public static equals = (arg: Argument, arg2: Argument) => {
        return arg.equals(arg2);
    };
}