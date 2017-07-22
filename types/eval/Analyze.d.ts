declare module verb.eval {

    /**
     * `Analyze` contains static immutable methods for analyzing NURBS geometry. This includes, but is not limited to
     * 
     * Determining the closest points on NURBS geometry to given point
     * Determining knot structur
     * Evaluating geometric properties (like arc length) of NURBS curve
     * Determining the parameter of at arc length of NURBS curve
     */
    export class Analyze {

        /**
         * etermine the multiplicities of the values in a knot vecto
         * 
         * params*
         * 
         * array of nondecreasing knot value
         * 
         * returns*
         * 
         * Array of KnotMultiplicity object
         */
        static knotMultiplicities(knots:KnotArray): Array<KnotMultiplicity>;

        mults: any;

        curr: KnotMultiplicity;

        /**
         * etermine whether a NURBS surface is "closed" in the given direction. Essentially, this determines if the end of th
         * urface in the given direction is continuous at its end. This is an experimental method and not hightly reliable
         * 
         * params*
         * 
         * The NURBS surfac
         * Whether to analyze the continuity in the U direction or the V directio
         * 
         * returns*
         * 
         * Whether the surface is continuous or not in the supplied direction
         */
        static isRationalSurfaceClosed(surface:NurbsSurfaceData, uDir?:boolean): boolean;

        cpts: any;

        test: any;

    }

}

