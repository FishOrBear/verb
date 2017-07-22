declare module verb.geom {

    /**
     * A NURBS surface - this class represents the base class of many of verb's surface types and provides many tools for analysis and evaluation
     * This object is deliberately constrained to be immutable. The methods to inspect the properties of this class deliberately return copies. `asNurbs` ca
     * be used to obtain a simplified NurbsCurveData object that can be used with `verb.core` or for serialization purposes
     * 
     * Under the hood, this type takes advantage of verb's asynchronous runtime using the _Async methods. Calling one of thes
     * methods returns a `Promise` that respect the  You can find further documentation for this type a
     * [https://github.com/jdonaldson/promhx](https://github.com/jdonaldson/promhx)
     */
    export class NurbsSurface extends SerializableBase implements ISurface {

        /**
         * onstruct a NurbsSurface by a NurbsSurfaceData objec
         * 
         * params*
         * 
         * The data objec
         * 
         * returns*
         * 
         * A new NurbsSurfac
         */
        constructor(data:NurbsSurfaceData);

        /**
         * onstruct a NurbsSurface by degree, knots, control points, weight
         * 
         * params*
         * 
         * The degree in the U directio
         * The degree in the V directio
         * The knot array in the U directio
         * The knot array in the V directio
         * Two dimensional array of point
         * Two dimensional array of weight value
         * 
         * returns*
         * 
         * A new NurbsSurfac
         */
        static byKnotsControlPointsWeights(degreeU:integer, degreeV:integer, knotsU:KnotArray, knotsV:KnotArray, controlPoints:Array<Array<Point>>, weights?:Array<Array<number>>): NurbsSurface;

        /**
         * onstruct a NurbsSurface from four perimeter points in counter-clockwise orde
         * 
         * params*
         * 
         * The first poin
         * The second poin
         * The third poin
         * The fourth poin
         * 
         * returns*
         * 
         * A new NurbsSurfac
         */
        static byCorners(point0:Point, point1:Point, point2:Point, point3:Point): NurbsSurface;

        /**
         * onstruct a NurbsSurface by lofting between a collection of curve
         * 
         * params*
         * 
         * A collection of curve
         * 
         * returns*
         * 
         * A new NurbsSurfac
         */
        static byLoftingCurves(curves:Array<ICurve>, degreeV?:integer): NurbsSurface;

        /**
         * he degree in the U directio
         */
        degreeU(): integer;

        /**
         * he degree in the V directio
         */
        degreeV(): integer;

        /**
         * he knot array in the U directio
         */
        knotsU(): Array<number>;

        /**
         * he knot array in the V directio
         */
        knotsV(): Array<number>;

        /**
         * wo dimensional array of point
         */
        controlPoints(): Array<Array<Point>>;

        /**
         * wo dimensional array of weight value
         */
        weights(): Array<Point>;

        /**
         * btain a copy of the underlying data structure for the Surface. Used with verb.core
         * 
         * returns*
         * 
         * A new NurbsSurfaceData objec
         */
        asNurbs(): NurbsSurfaceData;

        /**
         * btain a copy of the Surfac
         * 
         * returns*
         * 
         * A new NurbsSurfac
         */
        clone(): NurbsSurface;

        /**
         * he parametric domain in the U directio
         * 
         * returns*
         * 
         * An Interval object with min and max propert
         */
        domainU(): Interval<number>;

        /**
         * he parametric domain in the V directio
         * 
         * returns*
         * 
         * An Interval object with min and max propert
         */
        domainV(): Interval<number>;

        /**
         * btain a point on the surface at the given paramete
         * 
         * params*
         * 
         * The u paramete
         * The v paramete
         * 
         * returns*
         * 
         * A point on the surfac
         */
        point(u:number, v:number): Point;

        /**
         * he async version of `point
         */
        pointAsync(u:number, v:number): promhx.Promise<Point>;

        /**
         * btain the normal to the surface at the given paramete
         * 
         * params*
         * 
         * The u paramete
         * The v paramete
         * 
         * returns*
         * 
         * A normalized vector normal to the surfac
         */
        normal(u:number, v:number): Point;

        /**
         * he async version of `normal
         */
        normalAsync(u:number, v:number): promhx.Promise<Array<Array<Vector>>>;

        /**
         * btain the derivatives of the NurbsSurface.  Returns a two dimensional arra
         * ontaining the derivative vectors.  Increasing U partial derivatives are increasin
         * ow-wise.  Increasing V partial derivatives are increasing column-wise.  Therefore
         * he [0][0] position is a point on the surface, [n][0] is the nth V partial derivative
         * he [1][1] position is twist vector or mixed partial derivative Puv
         * 
         * params*
         * 
         * The u paramete
         * The v paramete
         * Number of derivatives to evaluat
         * 
         * returns*
         * 
         * A two dimensional array of vector
         */
        derivatives(u:number, v:number, numDerivs?:integer): Array<Array<Vector>>;

        /**
         * he async version of `derivatives
         */
        derivativesAsync(u:number, v:number, numDerivs?:integer): promhx.Promise<Array<Array<Vector>>>;

        /**
         * et the closest parameter on the surface to a poin
         * 
         * params*
         * 
         * The poin
         * 
         * returns*
         * 
         * The closest poin
         */
        closestParam(pt:Point): UV;

        /**
         * he async version of `closestParam
         */
        closestParamAsync(pt:Point): promhx.Promise<UV>;

        /**
         * et the closest point on the surface to a poin
         * 
         * params*
         * 
         * The poin
         * 
         * returns*
         * 
         * The closest poin
         */
        closestPoint(pt:Point): Point;

        /**
         * he async version of `closestParam
         */
        closestPointAsync(pt:Point): promhx.Promise<Point>;

        /**
         * plit a surfac
         * 
         * params*
         * 
         * The parameter to do the spli
         * Whether to divide in V or
         * 
         * returns*
         * 
         * A length 2 array with two new NurbsSurface object
         */
        split(u:number, useV?:boolean): Array<NurbsSurface>;

        /**
         * he async version of `split
         */
        splitAsync(u:number, useV?:boolean): promhx.Promise<Array<NurbsSurface>>;

        /**
         * everse the parameterization of the curv
         * 
         * params*
         * 
         * False to reverse u, true to reverse
         * 
         * returns*
         * 
         * The reversed surfac
         */
        reverse(useV?:boolean): NurbsSurface;

        /**
         * he async version of `reverse
         */
        reverseAsync(useV?:boolean): promhx.Promise<NurbsSurface>;

        /**
         * xtract an isocurve from a surfac
         * 
         * params*
         * 
         * The parameter at which to obtain the isocurv
         * False for a u-iso, true for a v-is
         * 
         * returns*
         * 
         * A NurbsCurve in the provided directio
         */
        isocurve(u:number, useV?:boolean): NurbsCurve;

        /**
         * he async version of `isocurve
         */
        isocurveAsync(u:number, useV?:boolean): promhx.Promise<NurbsCurve>;

        /**
         * xtract the boundary curves from a surfac
         * 
         * returns*
         * 
         * an array containing 4 elements, first 2 curves in the V direction, then 2 curves in the U directio
         */
        boundaries(options?:AdaptiveRefinementOptions): Array<NurbsCurve>;

        /**
         * he async version of `boundaries
         */
        boundariesAsync(options?:AdaptiveRefinementOptions): promhx.Promise<Array<NurbsCurve>>;

        /**
         * essellate the surfac
         * 
         * params*
         * 
         * an AdaptiveRefinementOptions objec
         * 
         * returns*
         * 
         * A MeshData objec
         */
        tessellate(options?:AdaptiveRefinementOptions): MeshData;

        /**
         * he async version of `boundaries
         */
        tessellateAsync(options?:AdaptiveRefinementOptions): promhx.Promise<MeshData>;

        /**
         * ransform a Surface with the given matrix
         * 
         * params*
         * 
         * 4x4 array representing the transfor
         * 
         * returns*
         * 
         * A new Surfac
         */
        transform(mat:Matrix): NurbsSurface;

        /**
         * he async version of `transform
         */
        transformAsync(mat:Matrix): promhx.Promise<NurbsSurface>;

    }

}

