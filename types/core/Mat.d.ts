declare module verb.core {

    /**
     * Tools for working with matrice
     */
    export class Mat {

        /**
         * Multiply a `Matrix` by a constan
         */
        static mul(a:number, b:Matrix): Matrix;

        /**
         * Multiply two matrices assuming they are of compatible dimensions
         * 
         * Based on the numeric.js routine - `numeric.dotMMsmall
         */
        static mult(x:Matrix, y:Matrix): Matrix;

        i: any;

        j: any;

        k: any;

        /**
         * Add two matrice
         */
        static add(a:Matrix, b:Matrix): Matrix;

        /**
         * Divide each of entry of a Matrix by a constan
         */
        static div(a:Matrix, b:number): Matrix;

        /**
         * Subtract two matrice
         */
        static sub(a:Matrix, b:Matrix): Matrix;

        /**
         * Multiply a `Matrix` by a `Vector
         */
        static dot(a:Matrix, b:Vector): Vector;

        /**
         * Build an identity matrix of a given siz
         */
        static identity(n:integer): Matrix;

        zeros: any;

        /**
         * Transpose a matri
         */
        static transpose<T>(a:Array<Array<T>>): Array<Array<T>>;

        /**
         * Solve a system of equation
         */
        static solve(a:Matrix, b:Vector): Vector;

        LU: any;

        n: any;

        x: any;

        P: any;

    }

}

