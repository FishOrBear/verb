declare module verb.geom {

    /**
     * A NURBS curve - this class represents the base class of many of verb.geom's curve types and provides many tools for analysis and evaluation
     * This object is deliberately constrained to be immutable. The methods to inspect the properties of this class deliberately return copies. `asNurbs` ca
     * be used to obtain a simplified NurbsCurveData object that can be used with `verb.core` or for serialization purposes
     * 
     * Under the hood, this type takes advantage of verb's asynchronous runtime using the _Async methods. Calling one of thes
     * methods returns a `Promise` instead of the value. This allows you to run the computation in a background thread and obtain the value asynchronously
     * 
     * You can find further documentation for using `Promise`'s at [https://github.com/jdonaldson/promhx](https://github.com/jdonaldson/promhx)
     */
    export class NurbsCurve extends SerializableBase implements ICurve {

        /**
         * onstruct a NurbsCurve by a NurbsCurveData objec
         * 
         * params*
         * 
         * The data objec
         * 
         * returns*
         * 
         * A new NurbsCurv
         */
        constructor(data:NurbsCurveData);

        /**
         * onstruct a NurbsCurve by degree, knots, control points, weight
         * 
         * params*
         * 
         * The degre
         * The knot arra
         * Array of control point
         * Array of weight value
         * 
         * returns*
         * 
         * A new NurbsCurv
         */
        static byKnotsControlPointsWeights(degree:integer, knots:KnotArray, controlPoints:Array<Point>, weights?:Array<number>): NurbsCurve;

        /**
         * onstruct a NurbsCurve by interpolating a collection of points.  The resultant curv
         * ill pass through all of the points
         * 
         * params*
         * 
         * An array of point
         * Optional : The degree of resultant curv
         * 
         * returns*
         * 
         * A new NurbsCurv
         */
        static byPoints(points:Array<Point>, degree?:integer): NurbsCurve;

        /**
         * nderlying serializable, data objec
         */
        degree(): integer;

        /**
         * he degree of the curv
         */
        knots(): KnotArray;

        /**
         * he knot arra
         */
        controlPoints(): Array<Point>;

        /**
         * rray of control point
         */
        weights(): Array<number>;

        /**
         * rray of weight value
         * btain a copy of the underlying data structure for the Curve. Used with verb.core
         * 
         * returns*
         * 
         * A new NurbsCurveData objec
         */
        asNurbs(): NurbsCurveData;

        /**
         * btain a copy of the curv
         * 
         * returns*
         * 
         * The copied curv
         */
        clone(): any;

        /**
         * etermine the valid domain of the curv
         * 
         * returns*
         * 
         * An array representing the high and end point of the domain of the curv
         */
        domain(): Interval<number>;

        /**
         * ransform a curve with the given matrix
         * 
         * params*
         * 
         * 4d array representing the transfor
         * 
         * returns*
         * 
         * A point represented as an arra
         */
        transform(mat:Matrix): NurbsCurve;

        /**
         * he async version of `transform
         */
        transformAsync(mat:Matrix): promhx.Promise<NurbsCurve>;

        /**
         * ample a point at the given paramete
         * 
         * params*
         * 
         * The parameter to sample the curv
         * 
         * returns*
         * 
         * A point represented as an arra
         */
        point(u:number): Point;

        /**
         * he async version of `point
         */
        pointAsync(u:number): promhx.Promise<Point>;

        /**
         * btain the curve tangent at the given parameter.  This is the first derivative and i
         * ot normalize
         * 
         * params*
         * 
         * The parameter to sample the curv
         * 
         * returns*
         * 
         * A point represented as an arra
         */
        tangent(u:number): Vector;

        /**
         * he async version of `tangent
         */
        tangentAsync(u:number): promhx.Promise<Vector>;

        /**
         * et derivatives at a given paramete
         * 
         * params*
         * 
         * The parameter to sample the curv
         * The number of derivatives to obtai
         * 
         * returns*
         * 
         * A point represented as an arra
         */
        derivatives(u:number, numDerivs?:integer): Array<Vector>;

        /**
         * he async version of `derivatives
         */
        derivativesAsync(u:number, numDerivs?:integer): promhx.Promise<Array<Vector>>;

        /**
         * etermine the closest point on the curve to the given poin
         * 
         * params*
         * 
         * A length 3 array representing the poin
         * 
         * returns*
         * 
         * The closest poin
         */
        closestPoint(pt:Point): Point;

        /**
         * he async version of `closestPoint
         */
        closestPointAsync(pt:Point): promhx.Promise<Point>;

        /**
         * etermine the closest parameter on the curve to the given poin
         * 
         * params*
         * 
         * A length 3 array representing the poin
         * 
         * returns*
         * 
         * The closest paramete
         */
        closestParam(pt:Point): number;

        /**
         * he async version of `length
         */
        closestParamAsync(pt:any): promhx.Promise<Point>;

        /**
         * etermine the arc length of the curv
         * 
         * returns*
         * 
         * The length of the curv
         */
        length(): number;

        /**
         * he async version of `length
         */
        lengthAsync(): promhx.Promise<number>;

        /**
         * etermine the arc length of the curve at the given paramete
         * 
         * params*
         * 
         * The parameter at which to evaluat
         * 
         * returns*
         * 
         * The length of the curve at the given paramete
         */
        lengthAtParam(u:number): number;

        /**
         * he async version of `lengthAtParam
         */
        lengthAtParamAsync(): promhx.Promise<number>;

        /**
         * etermine the parameter of the curve at the given arc lengt
         * 
         * params*
         * 
         * The arc length at which to determine the paramete
         * 
         * returns*
         * 
         * The length of the curve at the given paramete
         */
        paramAtLength(len:number, tolerance?:number): number;

        /**
         * he async version of `paramAtLength
         */
        paramAtLengthAsync(len:number, tolerance?:number): promhx.Promise<number>;

        /**
         * etermine the parameters necessary to divide the curve into equal arc length segment
         * 
         * params*
         * 
         * Number of divisions of the curv
         * 
         * returns*
         * 
         * A collection of parameter
         */
        divideByEqualArcLength(divisions:integer): Array<CurveLengthSample>;

        /**
         * he async version of `divideByEqualArcLength`
         */
        divideByEqualArcLengthAsync(divisions:integer): promhx.Promise<Array<CurveLengthSample>>;

        /**
         * iven the distance to divide the curve, determine the parameters necessary to divide the curve into equal arc length segment
         * 
         * params*
         * 
         * Arc length of each segmen
         * 
         * returns*
         * 
         * A collection of parameter
         */
        divideByArcLength(arcLength:number): Array<CurveLengthSample>;

        /**
         * he async version of `divideByArcLength
         */
        divideByArcLengthAsync(divisions:integer): promhx.Promise<Array<CurveLengthSample>>;

        /**
         * plit the curve at the given paramete
         * 
         * params*
         * 
         * The parameter at which to split the curv
         * 
         * returns*
         * 
         * Two curves - one at the lower end of the parameter range and one at the higher end
         */
        split(u:number): Array<NurbsCurve>;

        /**
         * The async version of `split
         */
        splitAsync(u:number): promhx.Promise<Array<NurbsCurve>>;

        /**
         * everse the parameterization of the curv
         * 
         * returns*
         * 
         * A reversed curv
         */
        reverse(): NurbsCurve;

        /**
         * The async version of `reverse
         */
        reverseAsync(): promhx.Promise<NurbsCurve>;

        /**
         * essellate a curve at a given toleranc
         * 
         * params*
         * 
         * The tolerance at which to sample the curv
         * 
         * returns*
         * 
         * A point represented as an arra
         */
        tessellate(tolerance?:number): Array<Point>;

        /**
         * The async version of `tessellate
         */
        tessellateAsync(tolerance?:number): promhx.Promise<Array<Point>>;

    }

}

