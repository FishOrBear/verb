declare module verb.core {

    /**
     * Tools for working with matrice
     */
    export class Vec {

        static angleBetween(a:Array<number>, b:Array<number>): number;

        static positiveAngleBetween(a:Array<number>, b:Array<number>, n:Array<number>): number;

        nab: any;

        al: any;

        bl: any;

        abl: any;

        adb: any;

        sina: any;

        cosa: any;

        w: any;

        s: any;

        static signedAngleBetween(a:Array<number>, b:Array<number>, n:Array<number>): number;

        nab: any;

        al: any;

        bl: any;

        abl: any;

        adb: any;

        sina: any;

        cosa: any;

        w: any;

        s: any;

        static angleBetweenNormalized2d(a:Array<number>, b:Array<number>): number;

        perpDot: any;

        static domain(a:Array<number>): number;

        static range(max:integer): Array<number>;

        l: any;

        f: any;

        static span(min:number, max:number, step:number): Array<number>;

    }

}

