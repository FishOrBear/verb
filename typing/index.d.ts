export declare module core
{
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
        interface Point extends Array<number> { }
        interface Vector extends Array<number> { }

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
        public point0: Data.Point;

        //where the intersection took place on the second curve
        public point1: Data.Point;

        //the parameter on the first curve
        public u0: number;

        //the parameter on the second curve
        public u1: number;
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


declare module eval
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
    class Intersect
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
        // static surfaces(surface0: NurbsSurfaceData, surface1: NurbsSurfaceData, tol: number): Array<NurbsCurveData>;
        static polylines(polyline0: core.PolylineData, polyline1: core.PolylineData, tol: number): Array<core.CurveCurveIntersection>;
    }
}