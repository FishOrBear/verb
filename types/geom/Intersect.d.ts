declare module verb.geom {

    /**
     * A class providing simplified access to verb's intersection tools. Intersect contains only static methods
     * 
     * Similar to `NurbsCurve` and `NurbsSurface`, `Intersect` provides asynchronous versions of all of its methods
     */
    export class Intersect {

        /**
         * etermine the intersection of two curve
         * 
         * params*
         * 
         * ICurve objec
         * ICurve objec
         * tolerance for the intersectio
         * 
         * returns*
         * 
         * a possibly empty array of CurveCurveIntersection object
         */
        static curves(first:ICurve, second:ICurve, tol?:number): Array<CurveCurveIntersection>;

        /**
         * The async version of `curves
         */
        static curvesAsync(first:ICurve, second:ICurve, tol?:number): promhx.Promise<Array<CurveCurveIntersection>>;

        /**
         * etermine the intersection of a curve and a surfac
         * 
         * params*
         * 
         * ICurv
         * ISurfac
         * tolerance for the curve intersectio
         * 
         * returns*
         * 
         * array of CurveSurfaceIntersection object
         */
        static curveAndSurface(curve:ICurve, surface:ISurface, tol?:number): Array<CurveSurfaceIntersection>;

        /**
         * The async version of `curveAndSurface
         */
        static curveAndSurfaceAsync(curve:ICurve, surface:ISurface, tol?:number): promhx.Promise<Array<CurveSurfaceIntersection>>;

        /**
         * etermine the intersection of two surface
         * 
         * params*
         * 
         * ISurfac
         * ISurfac
         * 
         * returns*
         * 
         * array of NurbsCurveData object
         */
        static surfaces(first:ISurface, second:ISurface, tol?:number): Array<NurbsCurve>;

        /**
         * The async version of `surfaces
         */
        static surfacesAsync(first:ISurface, second:ISurface, tol?:number): promhx.Promise<Array<NurbsCurve>>;

    }

}

