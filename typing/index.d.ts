export declare module core
{

    /**
 * Haxe port of
 * 
 * -d Tree JavaScript - V 1.
 * 
 * ttps://github.com/ubilabs/kd-tree-javascrip
 * 
 * author Mircea Pricop <pricop@ubilabs.net>, 201
 * author Martin Kleppe <kleppe@ubilabs.net>, 201
 * author Ubilabs http://ubilabs.net, 201
 * license MIT License <http://www.opensource.org/licenses/mit-license.php
 */
    class KdTree<T> {

        constructor(points: any, distanceFunction: any);

        dim: any;

        diff: any;
        nearest(point: Data.Point, maxNodes: number, maxDistance: number): Array<Data.Pair<KdPoint<T>, number>>;

        bestNodes: any;

        nearestSearch(node: KdNode<T>): any;

        saveNode(node: KdNode<T>, distance: number): void;

    }


    //Binary heap implementation from:
    //http://eloquentjavascript.net/appendix2.html

    class BinaryHeap<T> {

        public content: Array<Data.Pair<T, number>>;
        constructor(scoreFunction);
        push(element: Data.Pair<T, number>): void;
        pop(): Data.Pair<T, number>;
        peek(): Data.Pair<T, number>;
        remove(node: Data.Pair<T, number>): void
    }

    // A point in a KdTree
    class KdPoint<T> {

        // The point
        public point: Data.Point;

        // An arbitrary object to attach
        public obj: T;
        constructor(point, obj);
    }

    // A node in a KdTree
    class KdNode<T> {

        // The point itself
        public kdPoint: KdPoint<T>;

        // The left child
        public left: KdNode<T>;

        // The right child
        public right: KdNode<T>;

        // The parent of the node
        public parent: KdNode<T>;

        // The dimensionality of the point

        public dimension: number;//Int

        constructor(kdPoint: KdPoint<T>, dimension: number, parent: KdNode<T>);
    }



    /**
 * `BoundingBox` is an n-dimensional bounding box implementation. It is used by many of verb's intersection algorithms
 * 
 * The first point added to the `BoundingBox` using `BoundingBox.add` will be used to define the dimensionality of th
 * bounding box
 */
    class BoundingBox
    {

        initialized: boolean;

        dim: number;

        /**
         * oundingBox Constructo
         * 
         * params*
         * 
         * Points to add, if desired.  Otherwise, will not be initialized until add is called
         */
        constructor(pts?: Array<Data.Point>);

        min: Data.Point;

        /**
         * The minimum point of the BoundingBox - the coordinates of this point are always <= max
         */
        max: Data.Point;

        /**
         * The maximum point of the BoundingBox. The coordinates of this point are always >= min
         * reate a bounding box initialized with a single elemen
         * 
         * params*
         * 
         * A array of number
         * 
         * returns*
         * 
         * This BoundingBox for chainin
         */
        fromPoint(pt: any): any;

        /**
         * dds a point to the bounding box, expanding the bounding box if the point is outside of it
         * f the bounding box is not initialized, this method has that side effect
         * 
         * params*
         * 
         * A length-n array of number
         * 
         * returns*
         * 
         * This BoundingBox for chainin
         */
        add(point: Data.Point): BoundingBox;

    }

    module Intersections
    {

        class CurveCurveIntersection
        {

            point0: Data.Point;

            /**
             * here the intersection took plac
             */
            point1: Data.Point;

            /**
             * here the intersection took place on the second curv
             */
            u0: number;

            /**
             * he parameter on the first curv
             */
            u1: number;

            /**
             * he parameter on the second curv
             */
            constructor(point0: any, point1: any, u0: any, u1: any);

        }

        class CurveSurfaceIntersection
        {

            u: number;

            // uv: UV;

            curvePoint: Data.Point;

            surfacePoint: Data.Point;

            constructor(u: any, uv: any, curvePoint: any, surfacePoint: any);

        }

        class MeshIntersectionPoint
        {

            uv0: Data.UV;

            uv1: Data.UV;

            point: Data.Point;

            faceIndex0: number;

            faceIndex1: number;

            opp: MeshIntersectionPoint;

            /**
             * ags to navigate a segment structur
             */
            adj: MeshIntersectionPoint;

            visited: boolean;

            constructor(uv0: any, uv1: any, point: any, faceIndex0: any, faceIndex1: any);

        }

        class PolylineMeshIntersection
        {

            point: Data.Point;

            u: number;

            uv: Data.UV;

            polylineIndex: number;

            faceIndex: number;

            constructor(point: any, u: any, uv: any, polylineIndex: any, faceIndex: any);

        }

        class SurfaceSurfaceIntersectionPoint
        {

            uv0: Data.UV;

            uv1: Data.UV;

            point: Data.Point;

            dist: number;

            constructor(uv0: any, uv1: any, point: any, dist: any);

        }

        class TriSegmentIntersection
        {

            point: Data.Point;

            /**
             * here the intersection took plac
             */
            s: number;

            /**
             * he u param where u is the axis from v0 to v
             */
            t: number;

            /**
             * he v param where v is the axis from v0 to v
             */
            p: number;

            /**
             * he parameter along the segmen
             */
            constructor(point: any, s: any, t: any, r: any);

        }

        class CurveTriPoint
        {

            u: number;

            uv: Data.UV;

            point: Data.Point;

            constructor(u: number, point: Data.Point, uv: Data.UV);

        }

        class SurfacePoint
        {

            uv: Data.UV;

            point: Data.Point;

            normal: Data.Point;

            id: number;

            degen: boolean;

            constructor(point: Data.Point, normal: Data.Point, uv: Data.UV, id?: number, degen?: boolean);

            static fromUv(u: any, v: any): any;

        }

        class CurvePoint
        {

            u: number;

            pt: Data.Point;

            constructor(u: any, pt: any);

        }

    }

    //src/verb/core/Serialization.hx
    module Serialization
    {
        /**
                 * An interface describing a type that can be serialized as
                 * string. Use verb.core.Deserializer to construct an instance of th
                 * the type from the resultant string. The string is the serialized representation of a hax
                 * object and is strongly typed. For details, se
                 * [http://haxe.org/manual/std-serialization.html](http://haxe.org/manual/std-serialization.html) for details
                 */
        interface ISerializable
        {
            serialize(): string;
        }

        /**
         * Forms a base class for serializable data type
         */
        class SerializableBase
        {
            serialize(): string;
            serializer: any;
        }

        /**
         * Deserializes strings for types implementing ISerializabl
         */
        class Deserializer
        {

            /**
             * onstruct an ISerializable from its string representation, given a parameter T. You ca
             * se this to deserialize almost any type in verb.geom or verb.core.*Data types
             * 
             * params*
             * 
             * A string representing something implementing ISerializabl
             * 
             * returns*
             * 
             * A new T from the strin
             */
            static deserialize<T>(s: string): T;

            unserializer: any;
        }

    }

    module Data
    {

        /**
         * A `Point` in verb is represented simply by an array of floating point numbers
         * 
         * So, in JavaScript, one would write simply `[0,0,0]` to create a Point at the origin
         */
        type Point = Array<number>;
        type Vector = Array<number>;
        type Matrix = Array<Array<number>>

        /**
         * Like a `Point`, a `Vector` is simply an array of floating point number
         * 
         * So, in JavaScript, one would write simply `[1,0,0]` to create the a unit vector in the x directio
         * `Matrix` is represented by a nested array of floating point number array
         * 
         * So, in JavaScript, one would write simply `[[1,0],[0,1]]` to create a 2x2 identity matri
         * A `KnotArray` is a non-decreasing sequence of floating point . Use the methods in `Check` to validate `KnotArray`'
         */
        interface KnotArray extends Array<number> { }

        /**
         * A `Plane` is simply an origin point and norma
         */

        class Plane extends Serialization.SerializableBase
        {

            normal: Vector;

            origin: Point;

            constructor(origin: any, normal: any);

        }

        /**
         * A `Ray` is simply an origin point and a directio
         */
        class Ray extends Serialization.SerializableBase
        {

            dir: Vector;

            origin: Point;

            constructor(origin: any, dir: any);

        }

        /**
         * A simple data structure representing a NURBS curve. `NurbsCurveData` does no checks for legality. You can us
         * `verb.eval.Check` for that
         */
        class NurbsCurveData extends Serialization.SerializableBase
        {

            constructor(degree: any, knots: any, controlPoints: any);

            degree: number;

            /**
             * nteger degree of curv
             */
            controlPoints: Array<Point>;

            /**
             * 2d array of control points, where each control point is an array of length (dim
             */
            knots: Array<number>;

        }

        /**
         * rray of nondecreasing knot value
         * A simple data structure representing a NURBS surface. `NurbsSurfaceData` does no checks for legality. You can us
         * `verb.eval.Check` for that
         */
        class NurbsSurfaceData extends Serialization.SerializableBase
        {

            constructor(degreeU: any, degreeV: any, knotsU: any, knotsV: any, controlPoints: any);

            degreeU: number;

            /**
             * nteger degree of surface in u directio
             */
            degreeV: number;

            /**
             * nteger degree of surface in v directio
             */
            knotsU: KnotArray;

            /**
             * rray of nondecreasing knot values in u directio
             */
            knotsV: KnotArray;

            /**
             * rray of nondecreasing knot values in v directio
             */
            controlPoints: Array<Array<Point>>;

        }

        /**
         * 2d array of control points, the vertical direction (u) increases from top to bottom, the v direction from left to right
         * nd where each control point is an array of length (dim
         * A triangular face of a mes
         */
        interface Tri extends Array<number> { }

        /**
         * A `UV` is simply an array of floating point numbers
         * 
         * So, in JavaScript, one would write simply `[1,0]` to create a U
         */
        interface UV extends Array<number> { }

        /**
         * A simple data structure representing a mesh. `MeshData` does not check for legality
         */
        class MeshData extends Serialization.SerializableBase
        {

            faces: Array<Tri>;

            points: Array<Point>;

            normals: Array<Point>;

            uvs: Array<UV>;

            constructor(faces: Array<Tri>, points: Array<Point>, normals: Array<Point>, uvs: Array<UV>);

            static empty(): MeshData;

        }

        /**
         * A simple data structure representing a polyline. `PolylineData` is useful, for example, as the result of a curve tessellation
         */
        class PolylineData extends Serialization.SerializableBase
        {

            points: Array<Point>;

            /**
             * The points in the polylin
             */
            params: Array<number>;

            /**
             * The parameters of the individual point
             */
            constructor(points: any, params: any);

        }

        /**
         * A simple data structure representing a NURBS volume. This data structure is largely experimental in intent. Like CurveDat
         * and SurfaceData, this data structure does no legality checks
         */
        class VolumeData extends Serialization.SerializableBase
        {

            constructor(degreeU: any, degreeV: any, degreeW: any, knotsU: any, knotsV: any, knotsW: any, controlPoints: any);

            degreeU: number;

            /**
             * nteger degree in u directio
             */
            degreeV: number;

            /**
             * nteger degree in v directio
             */
            degreeW: number;

            /**
             * nteger degree in w directio
             */
            knotsU: KnotArray;

            /**
             * rray of nondecreasing knot values in u directio
             */
            knotsV: KnotArray;

            /**
             * rray of nondecreasing knot values in v directio
             */
            knotsW: KnotArray;

            /**
             * rray of nondecreasing knot values in w directio
             */
            controlPoints: Array<Array<Array<Point>>>;

        }

        /**
         * 3d array of control points, where rows are the u dir, and columns run along the positive v direction
         * nd where each control point is an array of length (dim
         * A simple parametric data type representing a pair of two object
         */
        class Pair<T1, T2> {

            item0: T1;

            item1: T2;

            constructor(item1: T1, item2: T2);

        }

        /**
         * A simple parametric data type representing an "interval" between two numbers. This data structure does no legality checks
         */
        class Interval<T> {

            min: T;

            max: T;

            constructor(min: any, max: any);

        }

    }

    /**
     * `Constants` contains a collection of default constants used throughout the library. These can be set to adjust verb'
     * defaults
     */
    //src/verb/core/Constants.hx
    class Constants
    {

        /**
         * he default euclidean distance that identifies whether two points are coinciden
         */
        static TOLERANCE: number;

        /**
         * he minimum value to determine whether two floating point numbers are the sam
         */
        static EPSILON: number;

        /**
         * he current version of ver
         */
        static VERSION: string;

    }

    //src/verb/core/Intersections.hx
    class CurveCurveIntersection
    {

        //where the intersection took place
        point0: Data.Point;

        //where the intersection took place on the second curve
        point1: Data.Point;

        //the parameter on the first curve
        u0: number;

        //the parameter on the second curve
        u1: number;
        constructor(point0, point1, u0, u1);
    }
    /**
     * A simple data structure representing a polyline. `PolylineData` is useful, for example, as the result of a curve tessellation
     */
    //src/verb/core/Data.hx
    class PolylineData extends Serialization.SerializableBase
    {

        points: Array<Data.Point>;

        /**
         * The points in the polylin
         */
        params: Array<number>;

        /**
         * The parameters of the individual point
         */
        constructor(points: Array<Data.Point>, params: Array<number>);

    }
}

export declare module geom
{
    /**
    * n interface representing a Curv
    */

    export interface ICurve extends core.Serialization.ISerializable
    {

        /**
         * rovide the NURBS representation of the curv
         * 
         * returns*
         * 
         * A NurbsCurveData object representing the curv
         */

        asNurbs(): core.Data.NurbsCurveData;

        /**
         * btain the parametric domain of the curv
         * 
         * returns*
         * 
         * An Interval object containing the min and max of the domai
         */
        domain(): core.Data.Interval<number>;

        /**
         * valuate a point on the curv
         * 
         * params*
         * 
         * The parameter on the curv
         * 
         * returns*
         * 
         * The evaluated poin
         */
        point(u: number): core.Data.Point;

        /**
         * valuate the derivatives at a point on a curv
         * 
         * params*
         * 
         * The parameter on the curv
         * The number of derivatives to evaluate on the curv
         * 
         * returns*
         * 
         * An array of derivative vector
         */


        derivatives(u: number, numDerivs?: number): Array<core.Data.Vector>;

    }


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
    export class NurbsCurve extends core.Serialization.SerializableBase implements ICurve
    {

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

        constructor(data: core.Data.NurbsCurveData);

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
        static byKnotsControlPointsWeights(degree: number, knots: core.Data.KnotArray, controlPoints: Array<core.Data.Point>, weights?: Array<number>): NurbsCurve;

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
        static byPoints(points: Array<core.Data.Point>, degree?: number): NurbsCurve;

        /**
         * nderlying serializable, data objec
         */
        degree(): number;

        /**
         * he degree of the curv
         */
        knots(): core.Data.KnotArray;

        /**
         * he knot arra
         */
        controlPoints(): Array<core.Data.Point>;

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
        asNurbs(): core.Data.NurbsCurveData;

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
        domain(): core.Data.Interval<number>;

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
        transform(mat: core.Data.Matrix): NurbsCurve;

        /**
         * he async version of `transform
         */
        transformAsync(mat: core.Data.Matrix): Promise<NurbsCurve>;

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
        point(u: number): core.Data.Point;

        /**
         * he async version of `point
         */
        pointAsync(u: number): Promise<core.Data.Point>;

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
        tangent(u: number): core.Data.Vector;

        /**
         * he async version of `tangent
         */
        tangentAsync(u: number): Promise<core.Data.Vector>;

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
        derivatives(u: number, numDerivs?: number): Array<core.Data.Vector>;

        /**
         * he async version of `derivatives
         */
        derivativesAsync(u: number, numDerivs?: number): Promise<Array<core.Data.Vector>>;

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
        closestPoint(pt: core.Data.Point): core.Data.Point;

        /**
         * he async version of `closestPoint
         */
        closestPointAsync(pt: core.Data.Point): Promise<core.Data.Point>;

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
        closestParam(pt: core.Data.Point): number;

        /**
         * he async version of `length
         */
        closestParamAsync(pt: any): Promise<core.Data.Point>;

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
        lengthAsync(): Promise<number>;

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
        lengthAtParam(u: number): number;

        /**
         * he async version of `lengthAtParam
         */
        lengthAtParamAsync(): Promise<number>;

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
        paramAtLength(len: number, tolerance?: number): number;

        /**
         * he async version of `paramAtLength
         */
        paramAtLengthAsync(len: number, tolerance?: number): Promise<number>;

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
        divideByEqualArcLength(divisions: number): Array<eval.CurveLengthSample>;

        /**
         * he async version of `divideByEqualArcLength`
         */
        divideByEqualArcLengthAsync(divisions: number): Promise<Array<eval.CurveLengthSample>>;

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
        divideByArcLength(arcLength: number): Array<eval.CurveLengthSample>;

        /**
         * he async version of `divideByArcLength
         */
        divideByArcLengthAsync(divisions: number): Promise<Array<eval.CurveLengthSample>>;

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
        split(u: number): Array<NurbsCurve>;

        /**
         * The async version of `split
         */
        splitAsync(u: number): Promise<Array<NurbsCurve>>;

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
        reverseAsync(): Promise<NurbsCurve>;

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
        tessellate(tolerance?: number): Array<core.Data.Point>;

        /**
         * The async version of `tessellate
         */
        tessellateAsync(tolerance?: number): Promise<Array<core.Data.Point>>;

    }

    /**
     * A curve representing a straight lin
     */
    class Line extends NurbsCurve
    {

        /**
         * reate a lin
         * 
         * params*
         * 
         * Length 3 array representing the start poin
         * Length 3 array representing the end poin
         */
        constructor(start: core.Data.Point, end: core.Data.Point);

        start(): any;

        /**
         * ength 3 array representing the start poin
         */
        end(): any;

    }
}

export declare module eval
{

    class IBoundingBoxTree<T>
    {
        constructor();
        boundingBox(): core.BoundingBox;
        split(): core.Data.Pair<IBoundingBoxTree<T>, IBoundingBoxTree<T>>;
        yield(): T;
        indivisible(tolerance: number): boolean;
        empty(): boolean;
    }
    /**
         * `Intersect` provides various tools for all kinds of intersection. This includes but not limited to
         * 
         * curve
         * surface
         * meshe
         * polyline
         * 
         * Under the hood, most of these algorithms call the recursive bounding box intersection algorith
         * (`Intersect.boundingBoxTrees<T1, T2>`) followed by some kind of minimization
         */
    class Intersect
    {
        //Intersect two NURBS surfaces, yielding a list of curves
        //
        //**params**
        //
        //* NurbsSurfaceData for the first surface
        //* NurbsSurfaceData for the second
        //
        //**returns**
        //
        //* array of NurbsCurveData objects

        static surfaces(surface0: core.Data.NurbsSurfaceData, surface1: core.Data.NurbsSurfaceData, tol: number): Array<core.Data.NurbsCurveData>;

        //Refine a pair of surface points to a point where the two surfaces intersect
        //
        //**params**
        //
        //* NurbsSurfaceData for the first surface
        //* NurbsSurfaceData for the second
        //* the UV for the point on the first surface
        //* the UV for the point on the second surface
        //* a tolerance value to terminate the refinement procedure
        //
        //**returns**
        //
        //* a SurfaceSurfaceIntersectionPoint object

        static surfacesAtPointWithEstimate(surface0: core.Data.NurbsSurfaceData,
            surface1: core.Data.NurbsSurfaceData,
            uv1: core.Data.UV,
            uv2: core.Data.UV,
            tol: number): core.Intersections.SurfaceSurfaceIntersectionPoint;


        //Intersect two meshes, yielding a list of polylines
        //
        //**params**
        //
        //* MeshData for the first mesh
        //* MeshData for the latter
        //* optional boundingbox tree for first mesh
        //* optional boundingbox tree for second mesh
        //
        //**returns**
        //
        //* array of array of MeshIntersectionPoints

        static meshes(mesh0: core.Data.MeshData,
            mesh1: core.Data.MeshData,
            bbtree0: eval.IBoundingBoxTree<number>/* = null*/,
            bbtree1: eval.IBoundingBoxTree<number>/* = null*/): Array<Array<core.Intersections.MeshIntersectionPoint>>;


        //Slice a mesh by repeated planar intersections yielding a sequence of polylines. Each plane
        //is along the z axis, so you'll need to transform your mesh if you wish to cut in any other direction.
        //
        //**params**
        //
        //* MeshData for the mesh to be sliced
        //* Minimum z value
        //* Maximum z value
        //* Step size
        //
        //**returns**
        //
        //* array of array of array of MeshIntersectionPoints - corresponding to the collection of polylines formed with
        // each slice


        static meshSlices(mesh: core.Data.MeshData, min: number, max: number, step: number): Array<Array<Array<core.Intersections.MeshIntersectionPoint>>>;


        //Given a list of unstructured mesh intersection segments, reconstruct into polylines
        //
        //**params**
        //
        //* unstructured collection of segments
        //
        //**returns**
        //
        //* array of array of MeshIntersectionPoint

        static makeMeshIntersectionPolylines(segments: Array<core.Data.Interval<core.Intersections.MeshIntersectionPoint>>): Array<Array<core.Intersections.MeshIntersectionPoint>>;


        //Given a segment end
        //
        //**params**
        //
        //* unstructured collection of segments
        //
        //**returns**
        //
        //* array of array of MeshIntersectionPoint

        static lookupAdjacentSegment(segEnd: core.Intersections.MeshIntersectionPoint, tree: core.KdTree<core.Intersections.MeshIntersectionPoint>, numResults: number);


        //Get the intersection of a NURBS curve and a NURBS surface without an estimate
        //
        //**params**
        //
        //* NurbsCurveData
        //* NurbsSurfaceData
        //* tolerance for the curve intersection
        //
        //**returns**
        //
        //* array of CurveSurfaceIntersection objects

        static curveAndSurface(curve: core.Data.NurbsCurveData,
            surface: core.Data.NurbsSurfaceData,
            tol: number/* = 1e-3*/,
            crvBbTree?: IBoundingBoxTree<core.Data.NurbsCurveData>/* = null*/,
            srfBbTree?: IBoundingBoxTree<core.Data.NurbsSurfaceData>/* = null */): Array<core.Intersections.CurveSurfaceIntersection>;



        //Refine an intersection pair for a surface and curve given an initial guess.  This is an unconstrained minimization,
        //so the caller is responsible for providing a very good initial guess.
        //
        //**params**
        //
        //* NurbsCurveData
        //* NurbsSurfaceData
        //* array of initial parameter values [ u_crv, u_srf, v_srf ]
        //
        //**returns**
        //
        //* a CurveSurfaceIntersection object

        static curveAndSurfaceWithEstimate(curve: core.Data.NurbsCurveData,
            surface: core.Data.NurbsSurfaceData,
            start_params: Array<number>,
            tol?/* number = 1e-3*/): core.Intersections.CurveSurfaceIntersection;



        //Approximate the intersection of a polyline and mesh while maintaining parameter information
        //
        //**params**
        //
        //* PolylineData
        //* MeshData
        //
        //**returns**
        //
        //* an array of PolylineMeshIntersection object

        static polylineAndMesh(polyline: core.Data.PolylineData,
            mesh: core.Data.MeshData,
            tol: number): Array<core.Intersections.PolylineMeshIntersection>;

        //Approximate the intersection of two NURBS curves
        //
        //**params**
        //
        //* NurbsCurveData object representing the first NURBS curve
        //* NurbsCurveData object representing the second NURBS curve
        //* tolerance for the intersection
        //
        //**returns**
        //
        //* the intersections

        static curves(curve1: core.Data.NurbsCurveData, curve2: core.Data.NurbsCurveData, tolerance: number): Array<core.Intersections.CurveCurveIntersection>;


        //Refine an intersection pair for two curves given an initial guess.  This is an unconstrained minimization,
        //so the caller is responsible for providing a very good initial guess.
        //
        //**params**
        //
        //* NurbsCurveData object representing the first NURBS curve
        //* NurbsCurveData object representing the second NURBS curve
        //* guess for first parameter
        //* guess for second parameter
        //* tolerance for the intersection
        //
        //**returns**
        //
        //* array of CurveCurveIntersection objects

        private static curvesWithEstimate(curve0: core.Data.NurbsCurveData,
            curve1: core.Data.NurbsCurveData,
            u0: number,
            u1: number,
            tolerance: number): core.Intersections.CurveCurveIntersection;

        //Intersect two triangles
        //
        //**params**
        //
        //* array of length 3 arrays of numbers representing the points of mesh1
        //* array of length 3 arrays of number representing the triangles of mesh1
        //* array of length 3 arrays of numbers representing the points of mesh2
        //* array of length 3 arrays of number representing the triangles of mesh2
        //
        //**returns**
        //
        //* a point represented by an array of length (dim)

        static triangles(mesh0: core.Data.MeshData, faceIndex0: number, mesh1: core.Data.MeshData, faceIndex1: number): core.Data.Interval<core.Intersections.MeshIntersectionPoint>;

        static clipRayInCoplanarTriangle(ray: core.Data.Ray, mesh: core.Data.MeshData, faceIndex: number): core.Data.Interval<core.Intersections.CurveTriPoint>;

        static mergeTriangleClipIntervals(clip1: core.Data.Interval<core.Intersections.CurveTriPoint>, clip2: core.Data.Interval<core.Intersections.CurveTriPoint>,
            mesh1: core.Data.MeshData, faceIndex1: number, mesh2: core.Data.MeshData, faceIndex2: number): core.Data.Interval<core.Intersections.MeshIntersectionPoint>;


        //Intersect two planes, yielding a Ray
        //
        //**params**
        //
        //* point in plane 0
        //* normal to plane 0
        //* point in plane 1
        //* normal to plane 1
        //
        //**returns**
        //
        //* a point represented by an array of length (dim)

        static planes(origin0: core.Data.Point, normal0: core.Data.Vector, origin1: core.Data.Point, normal1: core.Data.Vector): core.Data.Ray;


        //Intersect three planes, expects the planes to form a single point of
        //intersection
        //
        //**params**
        //
        //* normal for plane 0
        //* d for plane 0 ( where the plane eq is normal * (x,y,z) = d )
        //* normal for plane 1
        //* d for plane 1 ( where the plane eq is normal * (x,y,z) = d )
        //* normal for plane 2
        //* d for plane 2 ( where the plane eq is normal * (x,y,z) = d )
        //
        //**returns**
        //
        //* the point representing the intersection

        static threePlanes(n0: core.Data.Point, d0: number, n1: core.Data.Point, d1: number, n2: core.Data.Point, d2: number): core.Data.Point;

        //Intersect two polyline curves, keeping track of parameterization on each
        //
        //**params**
        //
        //* PolylineData for first polyline
        //* PolylineData for second polyline
        //* tolerance for the intersection
        //
        //**returns**
        //
        //* array of parameter pairs representing the intersection of the two parameteric polylines

        static polylines(polyline0: core.Data.PolylineData, polyline1: core.Data.PolylineData, tol: number)
            : Array<core.Intersections.CurveCurveIntersection>


        //Find the closest parameter on two rays, see http://geomalgorithms.com/a07-_distance.html
        //
        //**params**
        //
        //* first end of the first segment
        //* second end of the first segment
        //* first end of the second segment
        //* second end of the second segment
        //* tolerance for the intersection
        //
        //**returns**
        //
        //* a CurveCurveIntersection object

        static segments(a0: core.Data.Point, a1: core.Data.Point, b0: core.Data.Point, b1: core.Data.Point, tol: number): core.Intersections.CurveCurveIntersection

        //Find the closest parameter on two rays, see http://geomalgorithms.com/a07-_distance.html
        //
        //**params**
        //
        //* origin for ray 1
        //* direction of ray 1, assumed normalized
        //* origin for ray 1
        //* direction of ray 1, assumed normalized
        //
        //**returns**
        //
        //* a CurveCurveIntersection object

        static rays(a0: core.Data.Point, a: core.Data.Point, b0: core.Data.Point, b: core.Data.Point): core.Intersections.CurveCurveIntersection

        //  Intersect segment with triangle (from http://geomalgorithms.com/a06-_intersect-2.html)
        //
        //**params**
        //
        //* array of length 3 representing first point of the segment
        //* array of length 3 representing second point of the segment
        //* array of length 3 arrays representing the points of the triangle
        //* array of length 3 containing int indices in the array of points, this allows passing a full mesh
        //
        //**returns**
        //
        //* a TriangleSegmentIntersection or null if failed

        static segmentWithTriangle(p0: core.Data.Point, p1: core.Data.Point, points: Array<core.Data.Point>, tri: core.Data.Tri): core.Intersections.TriSegmentIntersection

        //  Intersect ray/segment with plane (from http://geomalgorithms.com/a06-_intersect-2.html)
        //
        //  If intersecting a ray, the param needs to be between 0 and 1 and the caller is responsible
        //  for making that check
        //
        //**params**
        //
        //* array of length 3 representing first point of the segment
        //* array of length 3 representing second point of the segment
        //* array of length 3 representing an origin point on the plane
        //* array of length 3 representing the normal of the plane
        //
        //**returns**
        //null or an object with a p property representing the param on the segment

        static segmentAndPlane(p0: core.Data.Point, p1: core.Data.Point, v0: core.Data.Point, n: core.Data.Point)

        /**
         * ntersect two NURBS surfaces, yielding a list of curve
         * 
         * params*
         * 
         * NurbsSurfaceData for the first surfac
         * NurbsSurfaceData for the secon
         * 
         * returns*
         * 
         * array of NurbsCurveData object
         */
        // static surfaces(surface0: NurbsSurfaceData, surface1: NurbsSurfaceData, tol: number): Array<NurbsCurveData>;
        static polylines(polyline0: core.PolylineData, polyline1: core.PolylineData, tol: number): Array<core.CurveCurveIntersection>;

    }

    /**
    * Divide provides various tools for dividing and splitting NURBS geometry
    */
    class Divide
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
        static surfaceSplit(surface: core.Data.NurbsSurfaceData, u: number, useV?: boolean): Array<core.Data.NurbsSurfaceData>;

        knots_to_insert: any;

        newpts0: any;

        s: any;

        res: core.Data.NurbsCurveData;

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
         * Array* two new curves, defined by degree, knots, and control pointpoint
         */
        static curveSplit(curve: core.Data.NurbsCurveData, u: number): Array<core.Data.NurbsCurveData>;

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
        static rationalCurveByEqualArcLength(curve: core.Data.NurbsCurveData, num: number): Array<CurveLengthSample>;

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
        static rationalCurveByArcLength(curve: core.Data.NurbsCurveData, l: number): Array<CurveLengthSample>;

        crvs: any;

    }

    class CurveLengthSample
    {
        u: number;//float
        len: number;//float

        constructor(u: number, len: number);
    }
}