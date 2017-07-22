declare module verb.eval {

    /**
     * `Modify` contains many fundamental algorithms for working with NURBS. These include algorithms for
     * 
     * knot insertio
     * knot refinemen
     * decomposition into bezier'
     * degree elevatio
     * reparameterizatio
     * 
     * Many of these algorithsm owe their implementation to Piegl & Tiller's, "The NURBS Book
     * 
     */
    export class Modify {

        /**
         * everses the parameterization of a NURBS curve. The domain is unaffected
         * 
         * params*
         * 
         * A NURBS curve to be reverse
         * 
         * returns*
         * 
         * A new NURBS curve with a reversed parameterizatio
         */
        static curveReverse(curve:NurbsCurveData): NurbsCurveData;

        /**
         * everse the parameterization of a NURBS surface in the specified direction. The domain is unaffected
         * 
         * params*
         * 
         * A NURBS surface to be reverse
         * Whether to use the U direction or V directio
         * 
         * returns*
         * 
         * A new NURBS surface with a reversed parameterization in the given directio
         */
        static surfaceReverse(surface:NurbsSurfaceData, useV?:boolean): NurbsSurfaceData;

        /**
         * everse a knot vecto
         * 
         * params*
         * 
         * An array of knot
         * 
         * returns*
         * 
         * The reversed array of knot
         */
        static knotsReverse(knots:KnotArray): KnotArray;

        min: any;

        max: any;

        l: any;

        len: any;

        /**
         * nify the knot vectors of a collection of NURBS curves. This can be used, for example, is used for lofting between curves
         * 
         * params*
         * 
         * An array of NURBS curve
         * 
         * returns*
         * 
         * A collection of NURBS curves, all with the same knot vecto
         */
        static unifyCurveKnotVectors(curves:Array<NurbsCurveData>): Array<NurbsCurveData>;

        maxDegree: any;

    }

}

