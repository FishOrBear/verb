type Point = Array<number>;
declare module verb.core
{

    export class ArrayExtensions
    {

        /**
         * ill an array with n copies of null by mutatio
         * 
         * params*
         * 
         * the array to fil
         * the number of null's to add to the arra
         * 
         * returns*
         * 
         * nothing, just mutates the given arra
         */
        static alloc<T>(a: Array<T>, n: number): any;
    }
}


declare module verb.core
{

    export class Binomial
    {

        static get(n: number, k: number): number;
        r: number;
        static get_no_memo(n: number, k: number): number;
    }

}


declare module verb.core
{

    /**
     * `BoundingBox` is an n-dimensional bounding box implementation. It is used by many of verb's intersection algorithms
     * 
     * The first point added to the `BoundingBox` using `BoundingBox.add` will be used to define the dimensionality of th
     * bounding box
     */
    export class BoundingBox
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
        constructor(pts?: Array<Point>);

        min: Point;

        /**
         * The minimum point of the BoundingBox - the coordinates of this point are always <= max
         */
        max: Point;

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
        add(point: Point): BoundingBox;

    }

}


declare module verb.core
{

    /**
     * `Constants` contains a collection of default constants used throughout the library. These can be set to adjust verb'
     * defaults
     */
    export class Constants
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

}


declare module verb.core
{

    module Data
    {

        /**
         * A `Point` in verb is represented simply by an array of floating point numbers
         * 
         * So, in JavaScript, one would write simply `[0,0,0]` to create a Point at the origin
         */
        export interface Point extends Array<number> { }

        /**
         * Like a `Point`, a `Vector` is simply an array of floating point number
         * 
         * So, in JavaScript, one would write simply `[1,0,0]` to create the a unit vector in the x directio
         * `Matrix` is represented by a nested array of floating point number array
         * 
         * So, in JavaScript, one would write simply `[[1,0],[0,1]]` to create a 2x2 identity matri
         * A `KnotArray` is a non-decreasing sequence of floating point . Use the methods in `Check` to validate `KnotArray`'
         */
        export interface KnotArray extends Array<number> { }

        /**
         * A `Plane` is simply an origin point and norma
         */
        export class Plane extends SerializableBase
        {

            normal: Vector;

            origin: Point;

            constructor(origin: any, normal: any);

        }

        /**
         * A `Ray` is simply an origin point and a directio
         */
        export class Ray extends SerializableBase
        {

            dir: Vector;

            origin: Point;

            constructor(origin: any, dir: any);

        }

        /**
         * A simple data structure representing a NURBS curve. `NurbsCurveData` does no checks for legality. You can us
         * `verb.eval.Check` for that
         */
        export class NurbsCurveData extends SerializableBase
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
        export class NurbsSurfaceData extends SerializableBase
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
        export interface Tri extends Array<number> { }

        /**
         * A `UV` is simply an array of floating point numbers
         * 
         * So, in JavaScript, one would write simply `[1,0]` to create a U
         */
        export interface UV extends Array<number> { }

        /**
         * A simple data structure representing a mesh. `MeshData` does not check for legality
         */
        export class MeshData extends SerializableBase
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
        export class PolylineData extends SerializableBase
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
        export class VolumeData extends SerializableBase
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
        export class Pair<T1, T2> {

            item0: T1;

            item1: T2;

            constructor(item1: T1, item2: T2);

        }

        /**
         * A simple parametric data type representing an "interval" between two numbers. This data structure does no legality checks
         */
        export class Interval<T> {

            min: T;

            max: T;

            constructor(min: any, max: any);

        }

    }

}


declare module verb.core
{

    module Intersections
    {

        export class CurveCurveIntersection
        {

            point0: Point;

            /**
             * here the intersection took plac
             */
            point1: Point;

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

        export class CurveSurfaceIntersection
        {

            u: number;

            uv: UV;

            curvePoint: Point;

            surfacePoint: Point;

            constructor(u: any, uv: any, curvePoint: any, surfacePoint: any);

        }

        export class MeshIntersectionPoint
        {

            uv0: UV;

            uv1: UV;

            point: Point;

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

        export class PolylineMeshIntersection
        {

            point: Point;

            u: number;

            uv: UV;

            polylineIndex: number;

            faceIndex: number;

            constructor(point: any, u: any, uv: any, polylineIndex: any, faceIndex: any);

        }

        export class SurfaceSurfaceIntersectionPoint
        {

            uv0: UV;

            uv1: UV;

            point: Point;

            dist: number;

            constructor(uv0: any, uv1: any, point: any, dist: any);

        }

        export class TriSegmentIntersection
        {

            point: Point;

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

        export class CurveTriPoint
        {

            u: number;

            uv: UV;

            point: Point;

            constructor(u: number, point: Point, uv: UV);

        }

        export class SurfacePoint
        {

            uv: UV;

            point: Point;

            normal: Point;

            id: number;

            degen: boolean;

            constructor(point: Point, normal: Point, uv: UV, id?: number, degen?: boolean);

            static fromUv(u: any, v: any): any;

        }

        export class CurvePoint
        {

            u: number;

            pt: Point;

            constructor(u: any, pt: any);

        }

    }

}


declare module verb.core
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
    export class KdTree<T> {

        constructor(points: any, distanceFunction: any);

        dim: any;

        diff: any;

        nearest(point: Point, maxNodes: number, maxDistance: number): Array<Pair<KdPoint<T>, number>>;

        bestNodes: any;

        nearestSearch(node: KdNode<T>): any;

        saveNode(node: KdNode<T>, distance: number): void;

    }

}


declare module verb.core
{

    export class LazyCurveBoundingBoxTree implements IBoundingBoxTree<NurbsCurveData> {

        _curve: NurbsCurveData;

        _boundingBox: BoundingBox;

        _knotTol: number;

        constructor(curve: any, knotTol?: number);

        split(): Pair<IBoundingBoxTree<NurbsCurveData>, IBoundingBoxTree<NurbsCurveData>>;

        min: any;

        max: any;

        dom: any;

        crvs: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

    }

}


declare module verb.core
{

    export class LazyMeshBoundingBoxTree implements IBoundingBoxTree<number> {

        _mesh: MeshData;

        _faceIndices: Array<number>;

        _boundingBox: BoundingBox;

        constructor(mesh: any, faceIndices?: any);

        split(): Pair<IBoundingBoxTree<number>, IBoundingBoxTree<number>>;

        as: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

        empty(): any;

    }

}


declare module verb.core
{

    export class LazyPolylineBoundingBoxTree implements IBoundingBoxTree<number> {

        _interval: Interval<number>;

        _polyline: PolylineData;

        _boundingBox: BoundingBox;

        constructor(polyline: any, interval?: any);

        split(): Pair<IBoundingBoxTree<number>, IBoundingBoxTree<number>>;

        min: any;

        max: any;

        pivot: any;

        l: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

        empty(): any;

    }

}


declare module verb.core
{

    export class LazySurfaceBoundingBoxTree implements IBoundingBoxTree<NurbsSurfaceData> {

        _surface: NurbsSurfaceData;

        _boundingBox: BoundingBox;

        _splitV: boolean;

        _knotTolU: number;

        _knotTolV: number;

        constructor(surface: any, splitV?: any, knotTolU?: any, knotTolV?: any);

        split(): Pair<IBoundingBoxTree<NurbsSurfaceData>, IBoundingBoxTree<NurbsSurfaceData>>;

        min: number;

        max: number;

        dom: any;

        pivot: any;

        /**
         * dom * 0.01 * Math.random()
         */
        srfs: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

    }

}


declare module verb.core
{

    /**
     * Tools for working with matrice
     */
    export class Mat
    {

        /**
         * Multiply a `Matrix` by a constan
         */
        static mul(a: number, b: Matrix): Matrix;

        /**
         * Multiply two matrices assuming they are of compatible dimensions
         * 
         * Based on the numeric.js routine - `numeric.dotMMsmall
         */
        static mult(x: Matrix, y: Matrix): Matrix;

        i: any;

        j: any;

        k: any;

        /**
         * Add two matrice
         */
        static add(a: Matrix, b: Matrix): Matrix;

        /**
         * Divide each of entry of a Matrix by a constan
         */
        static div(a: Matrix, b: number): Matrix;

        /**
         * Subtract two matrice
         */
        static sub(a: Matrix, b: Matrix): Matrix;

        /**
         * Multiply a `Matrix` by a `Vector
         */
        static dot(a: Matrix, b: Vector): Vector;

        /**
         * Build an identity matrix of a given siz
         */
        static identity(n: number): Matrix;

        zeros: any;

        /**
         * Transpose a matri
         */
        static transpose<T>(a: Array<Array<T>>): Array<Array<T>>;

        /**
         * Solve a system of equation
         */
        static solve(a: Matrix, b: Vector): Vector;

        LU: any;

        n: any;

        x: any;

        P: any;

    }

}


declare module verb.core
{

    /**
     * `Mesh` provides various convenience methods for working with meshes
     */
    export class Mesh
    {

        /**
         * et triangle norma
         * 
         * params*
         * 
         * array of length 3 arrays of numbers representing the point
         * length 3 array of point indices for the triangl
         * 
         * returns*
         * 
         * a normal vector represented by an array of length
         * 
         */
        static getTriangleNorm(points: Array<Point>, tri: Tri): Point;

        v0: any;

        /**
         * orm axis-aligned bounding box from triangles of mes
         * 
         * params*
         * 
         * a mes
         * face indices of the mesh to include in the bounding bo
         * 
         * returns*
         * 
         * a BoundingBox containing the mes
         * 
         */
        static makeMeshAabb(mesh: MeshData, faceIndices: Array<number>): verb.core.BoundingBox;

        bb: any;

        /**
         * ort particular faces of a mesh on the longest axi
         * 
         * params*
         * 
         * bounding box containing the face
         * the mesh it sel
         * the indices of the mesh faces to inspec
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         * 
         */
        static sortTrianglesOnLongestAxis(bb: verb.core.BoundingBox, mesh: MeshData, faceIndices: Array<number>): Array<number>;

        longAxis: any;

        minCoordFaceMap: any;

        tri_min: any;

        a0: any;

        b0: any;

        sortedFaceIndices: any;

        min: any;

        coord: any;

    }

}


declare module verb.core
{

    export class MeshBoundingBoxTree implements IBoundingBoxTree<number> {

        _children: Pair<IBoundingBoxTree<number>, IBoundingBoxTree<number>>;

        _boundingBox: BoundingBox;

        _face: number;

        _empty: boolean;

        constructor(mesh: MeshData, faceIndices?: Array<number>);

    }

}


declare module verb.core
{

    export class Minimizer
    {

        static uncmin(f: (Vector) => number, x0: Vector, tol?: number, gradient?: (Vector) => Vector, maxit?: number): MinimizationResult;

        n: any;

        f0: any;

        it: any;

        msg: any;

    }

    module Minimizer
    {

        /**
         * ine searc
         */
        export class MinimizationResult
        {

            solution: Vector;

            value: number;

            gradient: Vector;

            invHessian: Matrix;

            iterations: number;

            message: string;

            constructor(solution: any, value: any, gradient: any, invHessian: any, iterations: any, message: any);

        }

    }

}


declare module verb.core
{

    module Serialization
    {

        /**
         * An interface describing a type that can be serialized as
         * string. Use verb.core.Deserializer to construct an instance of th
         * the type from the resultant string. The string is the serialized representation of a hax
         * object and is strongly typed. For details, se
         * [http://haxe.org/manual/std-serialization.html](http://haxe.org/manual/std-serialization.html) for details
         */
        export interface ISerializable
        {

            serialize(): string;

        }

        /**
         * Forms a base class for serializable data type
         */
        export class SerializableBase
        {

            serialize(): string;

            serializer: any;

        }

        /**
         * Deserializes strings for types implementing ISerializabl
         */
        export class Deserializer
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

            r: T;

        }

    }

}


declare module verb.core
{

    export class SurfaceBoundingBoxTree implements IBoundingBoxTree<NurbsSurfaceData> {

        _children: Pair<IBoundingBoxTree<NurbsSurfaceData>, IBoundingBoxTree<NurbsSurfaceData>>;

        _surface: NurbsSurfaceData;

        _boundingBox: BoundingBox;

        constructor(surface: any, splitV?: any, knotTolU?: any, knotTolV?: any);

        divisible: any;

        min: number;

        max: number;

        dom: any;

        pivot: any;

        srfs: any;

        split(): Pair<IBoundingBoxTree<NurbsSurfaceData>, IBoundingBoxTree<NurbsSurfaceData>>;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

        empty(): any;

    }

}


declare module verb.core
{

    /**
     * `Trig` provides various convenient methods for trigonometr
     */
    export class Trig
    {

        static isPointInPlane(pt: Point, p: Plane, tol: number): boolean;

    }

}


declare module verb.core
{

    /**
     * Tools for working with matrice
     */
    export class Vec
    {

        static angleBetween(a: Array<number>, b: Array<number>): number;

        static positiveAngleBetween(a: Array<number>, b: Array<number>, n: Array<number>): number;

        nab: any;

        al: any;

        bl: any;

        abl: any;

        adb: any;

        sina: any;

        cosa: any;

        w: any;

        s: any;

        static signedAngleBetween(a: Array<number>, b: Array<number>, n: Array<number>): number;

        nab: any;

        al: any;

        bl: any;

        abl: any;

        adb: any;

        sina: any;

        cosa: any;

        w: any;

        s: any;

        static angleBetweenNormalized2d(a: Array<number>, b: Array<number>): number;

        perpDot: any;

        static domain(a: Array<number>): number;

        static range(max: number): Array<number>;

        l: any;

        f: any;

        static span(min: number, max: number, step: number): Array<number>;

    }

}


declare module verb.eval
{

    /**
     * `Analyze` contains static immutable methods for analyzing NURBS geometry. This includes, but is not limited to
     * 
     * Determining the closest points on NURBS geometry to given point
     * Determining knot structur
     * Evaluating geometric properties (like arc length) of NURBS curve
     * Determining the parameter of at arc length of NURBS curve
     */
    export class Analyze
    {

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
        static knotMultiplicities(knots: KnotArray): Array<KnotMultiplicity>;

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
        static isRationalSurfaceClosed(surface: NurbsSurfaceData, uDir?: boolean): boolean;

        cpts: any;

        test: any;

    }

}


declare module verb.eval
{

    /**
     * `Check` includes various tools for checking the validity of various NURBS data structures. This is important because it i
     * very easy to construct such data structures with incorrect structure. This class contains static, immutable functions fo
     * doing those checks
     * 
     * Note that the classes in verb.eval are very tolerant of incorrect NURBS data structures for performance reasons.** You shoul
     * perform these checks before using these classes
     */
    export class Check
    {

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
        static isValidKnotVector(vec: Array<number>, degree: number): boolean;

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
        static isNonDecreasing(vec: Array<number>): any;

        rep: any;

    }

}


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

        knots_to_insert: any;

        res: any;

        s: any;

        knots0: any;

        knots1: any;

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

        inc: any;

    }

}


declare module verb.eval
{

    /**
     * `Eval` provides all of the core algorithms for evaluating points and derivatives on NURBS curves and surfaces. Most of th
     * time, it makes more sense to use the tools in verb.geom for this, but in some cases this will make more sense
     * 
     * Eval also provides experimental tools for evaluating points in NURBS volumes
     * 
     * Many of these algorithms owe their implementation to Piegl & Tiller's "The NURBS Book
     */
    export class Eval
    {

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
        static rationalCurveTangent(curve: NurbsCurveData, u: number): Array<number>;

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
        static rationalSurfaceNormal(surface: NurbsSurfaceData, u: number, v: number): Array<number>;

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
        static rationalSurfaceDerivatives(surface: NurbsSurfaceData, u: number, v: number, numDerivs?: number): Array<Array<Array<number>>>;

        ders: any;

        v: any;

        v2: any;

        /**
         * emogeniz
         * ompute a point on a NURBS surfac
         * 
         * params*
         * 
         * number degree of surface in u directio
         * array of nondecreasing knot values in u directio
         * number degree of surface in v directio
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
        static rationalSurfacePoint(surface: NurbsSurfaceData, u: number, v: number): Point;

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
        static rationalCurveDerivatives(curve: NurbsCurveData, u: number, numDerivs?: number): Array<Point>;

        ders: any;

        v: any;

        /**
         * emogeniz
         * ompute a point on a NURBS curv
         * 
         * params*
         * 
         * number degree of curv
         * array of nondecreasing knot value
         * 2d array of homogeneous control points, where each control point is an array of length (dim+1
         * nd form (wi*pi, wi
         * parameter on the curve at which the point is to be evaluate
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         */
        static rationalCurvePoint(curve: NurbsCurveData, u: number): Point;

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
        static surfaceDerivatives(surface: NurbsSurfaceData, u: number, v: number, numDerivs: number): Array<Array<Point>>;

        n: any;

        /**
         * Compute the derivatives on a non-uniform, non-rational B spline surfac
         * (corresponds to algorithm 3.6 from The NURBS book, Piegl & Tiller 2nd edition
         * 
         * params*
         * 
         * number number of basis functions in u dir - 1 = knotsU.length - degreeU -
         * number number of basis functions in v dir - 1 = knotsU.length - degreeU -
         * NurbsSurfaceData object representing the surfac
         * u parameter at which to evaluate the derivative
         * v parameter at which to evaluate the derivative
         * 
         * returns*
         * 
         * a 2d jagged array representing the derivatives - u derivatives increase by row, v by colum
         */
        static surfaceDerivativesGivenNM(n: number, m: number, surface: NurbsSurfaceData, u: number, v: number, numDerivs: number): Array<Array<Point>>;

        degreeU: any;

        dim: any;

    }

}


declare module verb.eval
{

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
    export class Intersect
    {

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
        static surfaces(surface0: NurbsSurfaceData, surface1: NurbsSurfaceData, tol: number): Array<NurbsCurveData>;

        tess1: any;

        /**
         * 1) tessellate the two surface
         */
        tess2: any;

        resApprox: any;

        /**
         * 2) intersect the two meshes, yielding a list of polyline
         */
        exactPls: any;

    }

}


declare module verb.eval
{

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
    export class Make
    {

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
        static rationalTranslationalSurface(profile: NurbsCurveData, rail: NurbsCurveData): NurbsSurfaceData;

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
        static surfaceBoundaryCurves(surface: NurbsSurfaceData): Array<NurbsCurveData>;

        crvs: any;

        c0: any;

        c1: any;

        c2: any;

        c3: any;

        static surfaceIsocurve(surface: NurbsSurfaceData, u: number, useV?: boolean): NurbsCurveData;

        knots: any;

        degree: any;

        knotMults: any;

        reqKnotIndex: number;

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


declare module verb.eval
{

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
    export class Modify
    {

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
        static curveReverse(curve: NurbsCurveData): NurbsCurveData;

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
        static surfaceReverse(surface: NurbsSurfaceData, useV?: boolean): NurbsSurfaceData;

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
        static knotsReverse(knots: KnotArray): KnotArray;

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
        static unifyCurveKnotVectors(curves: Array<NurbsCurveData>): Array<NurbsCurveData>;

        maxDegree: any;

    }

}


declare module verb.eval
{

    /**
     * `Tess` contains static, immutable algorithms for tessellation of NURBS curves and sufaces. Tessellation is the decompositio
     * of the analytical NURBS representation into discrete meshes or polylines that are useful for drawing
     * 
     * Some of these algorithms are "adaptive" - using certain heuristics to sample geometry where such samples make sense - whil
     * others are "regular" in that they sample regularly throughout a parametric domain. There are tradeoffs here. Whil
     * adaptive algorithms can sometimes yield "better" results that are smaller or more economical, this can sometimes come a
     * increased computational cost. For example, it is sometimes necessarily to compute higher order derivatives in order t
     * obtain these more economical results. Your usage of these algorithms should consider these tradeoffs
     */
    export class Tess
    {

        /**
         * ample a NURBS curve at equally spaced parametric interval
         * 
         * params*
         * 
         * NurbsCurveData objec
         * number number of sample
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an array of points, prepended by the point param if require
         */
        static rationalCurveRegularSample(curve: NurbsCurveData, numSamples: number, includeU: boolean): Array<Point>;

        /**
         * ample a range of a NURBS curve at equally spaced parametric interval
         * 
         * params*
         * 
         * NurbsCurveData objec
         * start parameter for samplin
         * end parameter for samplin
         * number number of sample
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an dictionary of parameter - point pair
         */
        static rationalCurveRegularSampleRange(curve: NurbsCurveData, start: number, end: number, numSamples: number, includeU: boolean): Array<Point>;

        /**
         * ample a NURBS curve over its entire domain, corresponds to [this algorithm](http://ariel.chronotext.org/dd/defigueiredo93adaptive.pdf
         * 
         * params*
         * 
         * NurbsCurveData objec
         * tol for the adaptive schem
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an array of dim + 1 length where the first element is the param where it was sampled and the remaining the p
         * f degree is 1, just return the dehomogenized control point
         * he first element of each array is the paramete
         * ample a NURBS curve at 3 points, facilitating adaptive samplin
         * 
         * params*
         * 
         * NurbsCurveData objec
         * start parameter for samplin
         * end parameter for samplin
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an array of dim + 1 length where the first element is the param where it was sampled and the remaining the p
         * ample curve at three pt
         * f the two end control points are coincident, the three point test will always return 0, let's split the curv
         * he first condition checks if the curve makes up a loop, if so, we will need to continue evaluatio
         * et the exact middl
         * ecurse on the two halve
         * oncatenate the tw
         * essellate a NURBS surface on equal spaced intervals in the parametric domai
         * 
         * params*
         * 
         * NurbsSurfaceData objec
         * number of divisions in the u directio
         * number of divisions in the v directio
         * 
         * returns*
         * 
         * MeshData objec
         * ivide a NURBS surface int equal spaced intervals in the parametric domain as AdaptiveRefinementNode
         * 
         * params*
         * 
         * NurbsSurfaceData objec
         * SurfaceDivideOptions objec
         * 
         * returns*
         * 
         * MeshData objec
         * et necessary interval
         * 1) evaluate all of the corner
         * odo: make this faster by specifying n,
         * 2) make all of the node
         * 3) assign all of the neighbors and divid
         * riangulate all of the nodes of the tre
         * daptive divid
         * riangulatio
         * `
         * tructure of the child node
         * n the adaptive refinement tre
         * 
         * 
         * 
         * 
         * +-->
         * 
         * neighbors[2
         * 
         * (u0,v1)---(u05,v1)---(u1,v1
         * |           |
         * |     3     |     2
         * |           |
         * eighbors[3]   (u0,v05)--(u05,v05)--(u1,v05)   neighbors[1
         * |           |
         * |     0     |     1
         * |           |
         * (u0,v0)---(u05,v0)---(u1,v0
         * 
         * neighbors[0
         * `
         * f no corners, we need to construct initial corners from the surfac
         * val the cente
         * val all of the corner
         * f it's not already evaluate
         * valuate i
         * f its a leaf, there are no children to obtain uvs fro
         * ertical cas
         * et opposite edges uv
         * ange clipping function
         * lip the range of uvs to match this on
         * et neighbor
         * orrect the norma
         * on't divide any further when encountering a degenerate norma
         */
        center: any;

        divide(options?: AdaptiveRefinementOptions): void;

        /**
         * s the quad flat in one dir and curved in the other
         */
        bott: any;

        top: any;

        /**
         * ssign neighbors to bottom nod
         * ssign neighbors to top nod
         */
        left: any;

        right: any;

        /**
         * ivide all children recursivel
         */
        triangulate(mesh?: MeshData): MeshData;

        /**
         * ecurse on the childre
         */
        triangulateLeaf(mesh: MeshData): MeshData;

        baseIndex: any;

        /**
         * numerate all uvs in counter clockwise directio
         */
        edgeCorners: any;

        /**
         * his is the vertex that is spli
         * f the id is defined, we can just push it and continu
         * f the number of points is 4, we're just doing
         * ectangle - just build the basic triangulated squar
         * ll don
         */
        il: any;

        /**
         * se the splitcorner to triangulat
         * here will be 3 triangle
         */
        center: any;

        /**
         * ake point at center of fac
         */
        centerIndex: any;

        /**
         * et inde
         */
        i: any;

        /**
         * uild triangle fan from cente
         */
        j: any;

    }

}


declare module verb.exe
{

    export class Dispatcher
    {

        static THREADS: number;

        static dispatchMethod<T>(classType: Class<any>, methodName: string, args: Array<any>): promhx.Promise<T>;

        def: any;

        callback: any;

        r: any;

    }

}


declare module verb.exe
{

    /**
     * ...
     * @author Kenton Hamaluik
     */
    export class ThreadPool
    {

        constructor(numThreads: number);

        addTask(task: (any) => any, arg: any, onFinish: (any) => void): void;

        blockRunAllTasks(): void;

        thread: PoolThread;

    }

    module ThreadPool
    {

        export class PoolThread
        {

            started: boolean;

            done: boolean;

            d: boolean;

            result: any;

            r: any;

            constructor();

            start(task: (any) => any, arg: any): void;

            arg: any;

            ret: any;

        }

        export interface Task
        {

            id: number;

            task: (any) => any;

            done: boolean;

            arg: any;

            thread: PoolThread;

            onFinish: (any) => void;

        }

    }

}


declare module verb.exe
{

    /**
     * `WorkerPool` provides a pool of WebWorker objects for concurrent evaluation in JavaScrip
     */
    export class WorkerPool
    {

        /**
         * Create a new `WorkerPool
         * 
         * params*
         * 
         * the number of `Worker` threads to for
         * the filename of verb's javascript file - defaults to "verb.js". The final path is formed by concatenating `WorkerPool.basePath` and this
         */
        constructor(numThreads?: number, fileName?: string);

        w: js.html.Worker;

        /**
         * The base path to look for verb's source cod
         */
        static basePath: any;

        /**
         * Add work to perform to the queu
         */
        addWork(className: string, methodName: string, args: Array<any>, callback: any): void;

        work: any;

        work: any;

        workId: any;

        worker: any;

    }

    module WorkerPool
    {

        /**
         * pon completing your task..
         */
        export class Work
        {

            className: string;

            methodName: string;

            args: Array<any>;

            id: number;

            constructor(className: any, methodName: any, args: any);

        }

    }

}


declare module verb.geom
{

    /**
     * An Arc is a three dimensional curve representing a subset of a full Circl
     */
    export class Arc extends NurbsCurve
    {

        /**
         * onstructor for Ar
         * 
         * params*
         * 
         * Length 3 array representing the center of the ar
         * Length 3 array representing the xaxi
         * Length 3 array representing the perpendicular yaxi
         * Radius of the arc ar
         * Start angle in radian
         * End angle in radian
         */
        constructor(center: Point, xaxis: Vector, yaxis: Vector, radius: number, minAngle: number, maxAngle: number);

        center(): Point;

        /**
         * ength 3 array representing the center of the ar
         */
        xaxis(): Vector;

        /**
         * ength 3 array representing the xaxi
         */
        yaxis(): Vector;

        /**
         * ength 3 array representing the perpendicular yaxi
         */
        radius(): number;

        /**
         * adius of the ar
         */
        minAngle(): number;

        /**
         * tart angle in radian
         */
        maxAngle(): number;

    }

}


declare module verb.geom
{

    /**
     * Bezier curve is a common spline curv
     */
    export class BezierCurve extends NurbsCurve
    {

        /**
         * reate a bezier curv
         * 
         * params*
         * 
         * Array of control point
         * Array of control point weights (optional
         */
        constructor(points: Array<Point>, weights?: Array<number>);

    }

}


declare module verb.geom
{

    /**
     * A Circle is a three dimensional curve representing the points that are equidistant from a point in a particular plan
     */
    export class Circle extends Arc
    {

        /**
         * reate a circl
         * 
         * params*
         * 
         * Length 3 array representing the center of the circl
         * Length 3 array representing the xaxi
         * Length 3 array representing the perpendicular yaxi
         * Radius of the circl
         */
        constructor(center: Point, xaxis: Vector, yaxis: Vector, radius: number);

    }

}


declare module verb.geom
{

    /**
     * A ConicalSurface is a surface making up the curve surface of a con
     */
    export class ConicalSurface extends NurbsSurface
    {

        /**
         * ake a conical surfac
         * 
         * params*
         * 
         * Length 3 array representing the axis of the con
         * Length 3 array representing the x axis, perpendicular to the axi
         * Length 3 array representing the base of the con
         * Height of the con
         * Radius of the con
         */
        constructor(axis: Vector, xaxis: Vector, base: Point, height: number, radius: number);

        axis(): any;

        /**
         * ength 3 array representing the axis of the con
         */
        xaxis(): any;

        /**
         * ength 3 array representing the x axis, perpendicular to the axi
         */
        base(): any;

        /**
         * ength 3 array representing the base of the con
         */
        height(): any;

        /**
         * eight of the con
         */
        radius(): any;

    }

}


declare module verb.geom
{

    /**
     * A CylindricalSurface is a surface making up the curve surface of a cylinde
     */
    export class CylindricalSurface extends NurbsSurface
    {

        /**
         * onstructor for Cylinde
         * 
         * params*
         * 
         * Length 3 array representing the axis of the cylinde
         * Length 3 array representing the x axis, perpendicular to the axi
         * Length 3 array representing the base of the cylinde
         * Height of the cylinde
         * Radius of the cylinde
         */
        constructor(axis: Vector, xaxis: Vector, base: Point, height: number, radius: number);

        axis(): any;

        /**
         * ength 3 array representing the axis of the cylinde
         */
        xaxis(): any;

        /**
         * ength 3 array representing the x axis, perpendicular to the axi
         */
        base(): any;

        /**
         * ength 3 array representing the base of the cylinde
         */
        height(): any;

        /**
         * eight of the cylinde
         */
        radius(): any;

    }

}


declare module verb.geom
{

    /**
     * A CylindricalSurface is a surface making up part of a cylinder
     */
    export class Ellipse extends EllipseArc
    {

        /**
         * reate an ellips
         * 
         * params*
         * 
         * 
         * Length 3 array representing the center of the circl
         * Length 3 array representing the xaxi
         * Length 3 array representing the perpendicular yaxi
         */
        constructor(center: Point, xaxis: Vector, yaxis: Vector);

    }

}


declare module verb.geom
{

    /**
     * An EllipseArc is a subset of an Ellips
     */
    export class EllipseArc extends NurbsCurve
    {

        /**
         * reate an EllipseAr
         * 
         * params*
         * 
         * Length 3 array representing the center of the ar
         * Length 3 array representing the xaxi
         * Length 3 array representing the perpendicular yaxi
         * Minimum angle of the EllipseAr
         * Maximum angle of the EllipseAr
         */
        constructor(center: Point, xaxis: Vector, yaxis: Vector, minAngle: number, maxAngle: number);

        center(): any;

        /**
         * ength 3 array representing the center of the ar
         */
        xaxis(): any;

        /**
         * ength 3 array representing the xaxi
         */
        yaxis(): any;

        /**
         * ength 3 array representing the perpendicular yaxi
         */
        minAngle(): any;

        /**
         * inimum angle of the EllipseAr
         */
        maxAngle(): any;

    }

}


declare module verb.geom
{

    /**
     * Form a Surface by extruding a curve along a vecto
     */
    export class ExtrudedSurface extends NurbsSurface
    {

        /**
         * onstruct a Surface by extruding a curv
         * 
         * params*
         * 
         * The profile curv
         * The direction and magnitude of the extrusio
         */
        constructor(profile: ICurve, direction: Vector);

        /**
         * he profile curv
         */
        profile(): ICurve;

        /**
         * he direction and magnitude of the extrusio
         */
        direction(): Vector;

    }

}


declare module verb.geom
{

    /**
     * n interface representing a Curv
     */
    export interface ICurve extends ISerializable
    {

        /**
         * rovide the NURBS representation of the curv
         * 
         * returns*
         * 
         * A NurbsCurveData object representing the curv
         */
        asNurbs(): NurbsCurveData;

        /**
         * btain the parametric domain of the curv
         * 
         * returns*
         * 
         * An Interval object containing the min and max of the domai
         */
        domain(): Interval<number>;

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
        point(u: number): Point;

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
        derivatives(u: number, numDerivs?: number): Array<Vector>;

    }

}


declare module verb.geom
{

    /**
     * A class providing simplified access to verb's intersection tools. Intersect contains only static methods
     * 
     * Similar to `NurbsCurve` and `NurbsSurface`, `Intersect` provides asynchronous versions of all of its methods
     */
    export class Intersect
    {

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
        static curves(first: ICurve, second: ICurve, tol?: number): Array<CurveCurveIntersection>;

        /**
         * The async version of `curves
         */
        static curvesAsync(first: ICurve, second: ICurve, tol?: number): promhx.Promise<Array<CurveCurveIntersection>>;

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
        static curveAndSurface(curve: ICurve, surface: ISurface, tol?: number): Array<CurveSurfaceIntersection>;

        /**
         * The async version of `curveAndSurface
         */
        static curveAndSurfaceAsync(curve: ICurve, surface: ISurface, tol?: number): promhx.Promise<Array<CurveSurfaceIntersection>>;

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
        static surfaces(first: ISurface, second: ISurface, tol?: number): Array<NurbsCurve>;

        /**
         * The async version of `surfaces
         */
        static surfacesAsync(first: ISurface, second: ISurface, tol?: number): promhx.Promise<Array<NurbsCurve>>;

    }

}


declare module verb.geom
{

    /**
     * An interface representing a Surfac
     */
    export interface ISurface extends ISerializable
    {

        /**
         * rovide the NURBS representation of the curv
         * 
         * returns*
         * 
         * A NurbsCurveData object representing the curv
         */
        asNurbs(): NurbsSurfaceData;

        /**
         * rovide the domain of the surface in the U directio
         * 
         * returns*
         * 
         * An interval object with min and max propertie
         */
        domainU(): Interval<number>;

        /**
         * rovide the domain of the surface in the V directio
         * 
         * returns*
         * 
         * An interval object with min and max propertie
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
        point(u: number, v: number): Point;

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
        derivatives(u: number, v: number, numDerivs?: number): Array<Array<Vector>>;

    }

}


declare module verb.geom
{

    /**
     * A curve representing a straight lin
     */
    export class Line extends NurbsCurve
    {

        /**
         * reate a lin
         * 
         * params*
         * 
         * Length 3 array representing the start poin
         * Length 3 array representing the end poin
         */
        constructor(start: Point, end: Point);

        start(): any;

        /**
         * ength 3 array representing the start poin
         */
        end(): any;

    }

}


declare module verb.geom
{

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
    export class NurbsCurve extends SerializableBase implements ICurve
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
        constructor(data: NurbsCurveData);

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
        static byKnotsControlPointsWeights(degree: number, knots: KnotArray, controlPoints: Array<Point>, weights?: Array<number>): NurbsCurve;

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
        static byPoints(points: Array<Point>, degree?: number): NurbsCurve;

        /**
         * nderlying serializable, data objec
         */
        degree(): number;

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
        transform(mat: Matrix): NurbsCurve;

        /**
         * he async version of `transform
         */
        transformAsync(mat: Matrix): promhx.Promise<NurbsCurve>;

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
        point(u: number): Point;

        /**
         * he async version of `point
         */
        pointAsync(u: number): promhx.Promise<Point>;

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
        tangent(u: number): Vector;

        /**
         * he async version of `tangent
         */
        tangentAsync(u: number): promhx.Promise<Vector>;

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
        derivatives(u: number, numDerivs?: number): Array<Vector>;

        /**
         * he async version of `derivatives
         */
        derivativesAsync(u: number, numDerivs?: number): promhx.Promise<Array<Vector>>;

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
        closestPoint(pt: Point): Point;

        /**
         * he async version of `closestPoint
         */
        closestPointAsync(pt: Point): promhx.Promise<Point>;

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
        closestParam(pt: Point): number;

        /**
         * he async version of `length
         */
        closestParamAsync(pt: any): promhx.Promise<Point>;

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
        lengthAtParam(u: number): number;

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
        paramAtLength(len: number, tolerance?: number): number;

        /**
         * he async version of `paramAtLength
         */
        paramAtLengthAsync(len: number, tolerance?: number): promhx.Promise<number>;

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
        divideByEqualArcLength(divisions: number): Array<CurveLengthSample>;

        /**
         * he async version of `divideByEqualArcLength`
         */
        divideByEqualArcLengthAsync(divisions: number): promhx.Promise<Array<CurveLengthSample>>;

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
        divideByArcLength(arcLength: number): Array<CurveLengthSample>;

        /**
         * he async version of `divideByArcLength
         */
        divideByArcLengthAsync(divisions: number): promhx.Promise<Array<CurveLengthSample>>;

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
        splitAsync(u: number): promhx.Promise<Array<NurbsCurve>>;

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
        tessellate(tolerance?: number): Array<Point>;

        /**
         * The async version of `tessellate
         */
        tessellateAsync(tolerance?: number): promhx.Promise<Array<Point>>;

    }

}


declare module verb.geom
{

    /**
     * A NURBS surface - this class represents the base class of many of verb's surface types and provides many tools for analysis and evaluation
     * This object is deliberately constrained to be immutable. The methods to inspect the properties of this class deliberately return copies. `asNurbs` ca
     * be used to obtain a simplified NurbsCurveData object that can be used with `verb.core` or for serialization purposes
     * 
     * Under the hood, this type takes advantage of verb's asynchronous runtime using the _Async methods. Calling one of thes
     * methods returns a `Promise` that respect the  You can find further documentation for this type a
     * [https://github.com/jdonaldson/promhx](https://github.com/jdonaldson/promhx)
     */
    export class NurbsSurface extends SerializableBase implements ISurface
    {

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
        constructor(data: NurbsSurfaceData);

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
        static byKnotsControlPointsWeights(degreeU: number, degreeV: number, knotsU: KnotArray, knotsV: KnotArray, controlPoints: Array<Array<Point>>, weights?: Array<Array<number>>): NurbsSurface;

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
        static byCorners(point0: Point, point1: Point, point2: Point, point3: Point): NurbsSurface;

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
        static byLoftingCurves(curves: Array<ICurve>, degreeV?: number): NurbsSurface;

        /**
         * he degree in the U directio
         */
        degreeU(): number;

        /**
         * he degree in the V directio
         */
        degreeV(): number;

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
        point(u: number, v: number): Point;

        /**
         * he async version of `point
         */
        pointAsync(u: number, v: number): promhx.Promise<Point>;

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
        normal(u: number, v: number): Point;

        /**
         * he async version of `normal
         */
        normalAsync(u: number, v: number): promhx.Promise<Array<Array<Vector>>>;

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
        derivatives(u: number, v: number, numDerivs?: number): Array<Array<Vector>>;

        /**
         * he async version of `derivatives
         */
        derivativesAsync(u: number, v: number, numDerivs?: number): promhx.Promise<Array<Array<Vector>>>;

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
        closestParam(pt: Point): UV;

        /**
         * he async version of `closestParam
         */
        closestParamAsync(pt: Point): promhx.Promise<UV>;

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
        closestPoint(pt: Point): Point;

        /**
         * he async version of `closestParam
         */
        closestPointAsync(pt: Point): promhx.Promise<Point>;

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
        split(u: number, useV?: boolean): Array<NurbsSurface>;

        /**
         * he async version of `split
         */
        splitAsync(u: number, useV?: boolean): promhx.Promise<Array<NurbsSurface>>;

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
        reverse(useV?: boolean): NurbsSurface;

        /**
         * he async version of `reverse
         */
        reverseAsync(useV?: boolean): promhx.Promise<NurbsSurface>;

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
        isocurve(u: number, useV?: boolean): NurbsCurve;

        /**
         * he async version of `isocurve
         */
        isocurveAsync(u: number, useV?: boolean): promhx.Promise<NurbsCurve>;

        /**
         * xtract the boundary curves from a surfac
         * 
         * returns*
         * 
         * an array containing 4 elements, first 2 curves in the V direction, then 2 curves in the U directio
         */
        boundaries(options?: AdaptiveRefinementOptions): Array<NurbsCurve>;

        /**
         * he async version of `boundaries
         */
        boundariesAsync(options?: AdaptiveRefinementOptions): promhx.Promise<Array<NurbsCurve>>;

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
        tessellate(options?: AdaptiveRefinementOptions): MeshData;

        /**
         * he async version of `boundaries
         */
        tessellateAsync(options?: AdaptiveRefinementOptions): promhx.Promise<MeshData>;

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
        transform(mat: Matrix): NurbsSurface;

        /**
         * he async version of `transform
         */
        transformAsync(mat: Matrix): promhx.Promise<NurbsSurface>;

    }

}


declare module verb.geom
{

    /**
     * A surface formed by revolving a profile curve around a given axis lin
     */
    export class RevolvedSurface extends NurbsSurface
    {

        /**
         * onstruct a revolved surfac
         * 
         * params*
         * 
         * The profile curv
         * A point on the axis of revolutio
         * The direction of the axis of revolutio
         * The angle to revolve around.  2 * Math.PI corresponds to a complete revolutio
         */
        constructor(profile: NurbsCurve, center: Point, axis: Vector, angle: number);

        /**
         * he profile curv
         */
        profile(): ICurve;

        /**
         * point on the axis of revolutio
         */
        center(): Point;

        /**
         * he direction of the axis of revolutio
         */
        axis(): Vector;

        /**
         * he angle to revolve around.  2 * Math.PI corresponds to a complete revolutio
         */
        angle(): number;

    }

}


declare module verb.geom
{

    /**
     * A surface representing the doubly curved surface of a spher
     */
    export class SphericalSurface extends NurbsSurface
    {

        /**
         * reate a spherical surfac
         * 
         * params*
         * 
         * Length 3 array representing the center of the circl
         * Radius of the circl
         */
        constructor(center: Point, radius: number);

        /**
         * ength 3 array representing the center of the circl
         */
        center(): Point;

        /**
         * adius of the circl
         */
        radius(): number;

    }

}


declare module verb.geom
{

    /**
     * A SweptSurface uses a profile curve and a guide rail to form a surface. The profile curve is "swept" along the guid
     * rail by a lofting operation
     */
    export class SweptSurface extends NurbsSurface
    {

        /**
         * onstruct a Surface by translating along a rail curv
         * 
         * params*
         * 
         * The profile curv
         * The rail curv
         */
        constructor(profile: ICurve, rail: ICurve);

        /**
         * he profile curv
         */
        profile(): ICurve;

        /**
         * he rail curv
         */
        rail(): ICurve;

    }

}


declare module verb
{

    /**
     * geo
     * cor
     * eva
     */
    export class Verb
    {

        static main(): void;

    }

}


