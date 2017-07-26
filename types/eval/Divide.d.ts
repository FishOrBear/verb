declare module verb.eval
{

    /**
     * Divide provides various tools for dividing and splitting NURBS geometry
     */
    export class Divide
    {

        /**
         * plit a NURBS surface in two at a given paramete
         * 
         * params*
         * 
         * The surface to spli
         * The parameter at which to split the surfac
         * Whether to split in the U direction or V direction of the surfac
         * 
         * returns*
         * 
         * A length two array of new surface
         */
        static surfaceSplit(surface: NurbsSurfaceData, u: number, useV?: boolean): Array<NurbsSurfaceData>;

        knots_to_insert: any;

        newpts0: any;

        s: any;

        res: NurbsCurveData;

        knots0: any;

        knots1: any;

        /**
         * di
         * plit a NURBS curve into two parts at a given paramete
         * 
         * params*
         * 
         * NurbsCurveData object representing the curv
         * location to split the curv
         * 
         * returns*
         * 
         * Array* two new curves, defined by degree, knots, and control point
         */
        static curveSplit(curve: NurbsCurveData, u: number): Array<NurbsCurveData>;

        degree: any;

        cpts0: any;

        cpts1: any;

        /**
         * ivide a NURBS curve given a given number of times, including the end points. The result is not split curve
         * ut a collection of `CurveLengthSample` objects that can be used for splitting. As with all arc length methods
         * he result is an approximation
         * 
         * params*
         * 
         * NurbsCurveData object representing the curv
         * The number of parts to split the curve int
         * 
         * returns*
         * 
         * An array of `CurveLengthSample` object
         */
        static rationalCurveByEqualArcLength(curve: NurbsCurveData, num: number): Array<CurveLengthSample>;

        tlen: any;

        inc: any;

        /**
         * ivide a NURBS curve given a given number of times, including the end points
         * 
         * params*
         * 
         * NurbsCurveData object representing the curv
         * The arc length separating the resultant sample
         * 
         * returns*
         * 
         * A sequence of `CurveLengthSample` object
         */
        static rationalCurveByArcLength(curve: NurbsCurveData, l: number): Array<CurveLengthSample>;

        crvs: any;

    }

}

