declare module verb.eval {

    /**
     * `Make` provides algorithms for generating NURBS representations of various special surfaces and curves. One of the ver
     * desirable properties of NURBS is the ability to represent common curve types like conics in NURBS. As a result, ver
     * is able to represent many curve types with exceptional economy as many of the algorithms (for example, for intersection
     * can be reused
     * 
     * This class includes methods for building
     * 
     * conic
     * polyline
     * loft
     * swept surface
     * 
     * Many of these algorithms owe their implementation to Piegl & Tiller's "The NURBS Book
     */
    export class Make {

        /**
         * enerate a surface by translating a profile curve along a rail curv
         * 
         * params*
         * 
         * profile NurbsCurveDat
         * rail NurbsCurveDat
         * 
         * returns*
         * 
         * NurbsSurfaceData objec
         */
        static rationalTranslationalSurface(profile:NurbsCurveData, rail:NurbsCurveData): NurbsSurfaceData;

        pt0: any;

        crvs: any;

        pt: any;

        crv: any;

        /**
         * xtract the boundary curves from a surfac
         * 
         * returns*
         * 
         * an array containing 4 elements, first 2 curves in the V direction, then 2 curves in the U directio
         */
        static surfaceBoundaryCurves(surface:NurbsSurfaceData): Array<NurbsCurveData>;

        crvs: any;

        c0: any;

        c1: any;

        c2: any;

        c3: any;

        static surfaceIsocurve(surface:NurbsSurfaceData, u:number, useV?:boolean): NurbsCurveData;

        knots: any;

        degree: any;

        knotMults: any;

        reqKnotIndex: integer;

        /**
         * f the knot already exists in the array, don't make duplicate
         */
        newSrf: any;

        /**
         * nsert the knot
         */
        span: any;

    }

}

