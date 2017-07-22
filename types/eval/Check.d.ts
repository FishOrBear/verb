declare module verb.eval {

    /**
     * `Check` includes various tools for checking the validity of various NURBS data structures. This is important because it i
     * very easy to construct such data structures with incorrect structure. This class contains static, immutable functions fo
     * doing those checks
     * 
     * Note that the classes in verb.eval are very tolerant of incorrect NURBS data structures for performance reasons.** You shoul
     * perform these checks before using these classes
     */
    export class Check {

        /**
         * heck whether a given array is a valid NURBS knot vector. This also checks the validity of the end points
         * ore specifically, this method checks if the knot vector is of the following structure
         * 
         * The knot vector must be non-decreasing and of length (degree + 1) * 2 or greate
         * 
         * [ (degree + 1 copies of the first knot), internal non-decreasing knots, (degree + 1 copies of the last knot)
         * 
         * params*
         * 
         * The knot vector to tes
         * The degre
         * 
         * returns*
         * 
         * Whether the array is a valid knot vector or kno
         */
        static isValidKnotVector(vec:Array<number>, degree:integer): boolean;

        /**
         * heck if an array of floating point numbers is non-decreasing, although there may be repeats. This is an importan
         * alidation step for NURBS knot vectors
         * 
         * params*
         * 
         * The data objec
         * 
         * returns*
         * 
         * Whether the array is non-decreasin
         */
        static isNonDecreasing(vec:Array<number>): any;

        rep: any;

    }

}

