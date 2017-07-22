declare module verb.eval {

    /**
     * `Eval` provides all of the core algorithms for evaluating points and derivatives on NURBS curves and surfaces. Most of th
     * time, it makes more sense to use the tools in verb.geom for this, but in some cases this will make more sense
     * 
     * Eval also provides experimental tools for evaluating points in NURBS volumes
     * 
     * Many of these algorithms owe their implementation to Piegl & Tiller's "The NURBS Book
     */
    export class Eval {

        /**
         * ompute the tangent at a point on a NURBS curv
         * 
         * params*
         * 
         * NurbsCurveData object representing the curv
         * u paramete
         * v paramete
         * 
         * returns*
         * 
         * a Vector represented by an array of length (dim
         */
        static rationalCurveTangent(curve:NurbsCurveData, u:number): Array<number>;

        derivs: any;

        /**
         * ompute the derivatives at a point on a NURBS surfac
         * 
         * params*
         * 
         * NurbsSurfaceData object representing the surfac
         * u paramete
         * v paramete
         * 
         * returns*
         * 
         * a Vector represented by an array of length (dim
         */
        static rationalSurfaceNormal(surface:NurbsSurfaceData, u:number, v:number): Array<number>;

        derivs: any;

        /**
         * ompute the derivatives at a point on a NURBS surfac
         * 
         * params*
         * 
         * NurbsSurfaceData object representing the surfac
         * number of derivatives to evaluat
         * u parameter at which to evaluate the derivative
         * v parameter at which to evaluate the derivative
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         */
        static rationalSurfaceDerivatives(surface:NurbsSurfaceData, u:number, v:number, numDerivs?:integer): Array<Array<Array<number>>>;

        ders: any;

        v: any;

        v2: any;

        /**
         * emogeniz
         * ompute a point on a NURBS surfac
         * 
         * params*
         * 
         * integer degree of surface in u directio
         * array of nondecreasing knot values in u directio
         * integer degree of surface in v directio
         * array of nondecreasing knot values in v directio
         * 3d array of control points (tensor), top to bottom is increasing u direction, left to right is increasing v direction
         * nd where each control point is an array of length (dim+1
         * u parameter at which to evaluate the surface poin
         * v parameter at which to evaluate the surface poin
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         */
        static rationalSurfacePoint(surface:NurbsSurfaceData, u:number, v:number): Point;

        /**
         * etermine the derivatives of a NURBS curve at a given paramete
         * 
         * params*
         * 
         * NurbsCurveData object representing the curve - the control points are in homogeneous coordinate
         * parameter on the curve at which the point is to be evaluate
         * number of derivatives to evaluat
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         */
        static rationalCurveDerivatives(curve:NurbsCurveData, u:number, numDerivs?:integer): Array<Point>;

        ders: any;

        v: any;

        /**
         * emogeniz
         * ompute a point on a NURBS curv
         * 
         * params*
         * 
         * integer degree of curv
         * array of nondecreasing knot value
         * 2d array of homogeneous control points, where each control point is an array of length (dim+1
         * nd form (wi*pi, wi
         * parameter on the curve at which the point is to be evaluate
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         */
        static rationalCurvePoint(curve:NurbsCurveData, u:number): Point;

        /**
         * ompute the derivatives on a non-uniform, non-rational B spline surfac
         * 
         * params*
         * 
         * NurbsSurfaceData object representing the surfac
         * number of derivatives to evaluat
         * u parameter at which to evaluate the derivative
         * v parameter at which to evaluate the derivative
         * 
         * returns*
         * 
         * a 2d jagged array representing the derivatives - u derivatives increase by row, v by colum
         */
        static surfaceDerivatives(surface:NurbsSurfaceData, u:number, v:number, numDerivs:integer): Array<Array<Point>>;

        n: any;

        /**
         * Compute the derivatives on a non-uniform, non-rational B spline surfac
         * (corresponds to algorithm 3.6 from The NURBS book, Piegl & Tiller 2nd edition
         * 
         * params*
         * 
         * integer number of basis functions in u dir - 1 = knotsU.length - degreeU -
         * integer number of basis functions in v dir - 1 = knotsU.length - degreeU -
         * NurbsSurfaceData object representing the surfac
         * u parameter at which to evaluate the derivative
         * v parameter at which to evaluate the derivative
         * 
         * returns*
         * 
         * a 2d jagged array representing the derivatives - u derivatives increase by row, v by colum
         */
        static surfaceDerivativesGivenNM(n:integer, m:integer, surface:NurbsSurfaceData, u:number, v:number, numDerivs:integer): Array<Array<Point>>;

        degreeU: any;

        dim: any;

    }

}

