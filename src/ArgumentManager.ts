
export const SINGLE_DASH = '-';
export const DOUBLE_DASH = '--';
export type Prefix = SINGLE_DASH | DOUBLE_DASH | '';

export class ArgumentManager {
    private args: string[];

    constructor() {
        this.args = process.argv.slice(2);
    }

    public on = (name: string | string[], prefix: Prefix = '--') => {
        
    };
}