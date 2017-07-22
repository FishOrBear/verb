declare module verb.core {

    module Data {

        /**
         * A `Point` in verb is represented simply by an array of floating point numbers
         * 
         * So, in JavaScript, one would write simply `[0,0,0]` to create a Point at the origin
         */
        export interface Point extends Array<number> {}

        /**
         * Like a `Point`, a `Vector` is simply an array of floating point number
         * 
         * So, in JavaScript, one would write simply `[1,0,0]` to create the a unit vector in the x directio
         * `Matrix` is represented by a nested array of floating point number array
         * 
         * So, in JavaScript, one would write simply `[[1,0],[0,1]]` to create a 2x2 identity matri
         * A `KnotArray` is a non-decreasing sequence of floating point . Use the methods in `Check` to validate `KnotArray`'
         */
        export interface KnotArray extends Array<number> {}

        /**
         * A `Plane` is simply an origin point and norma
         */
        export class Plane extends SerializableBase {

            normal: Vector;

            origin: Point;

            constructor(origin:any, normal:any);

        }

        /**
         * A `Ray` is simply an origin point and a directio
         */
        export class Ray extends SerializableBase {

            dir: Vector;

            origin: Point;

            constructor(origin:any, dir:any);

        }

        /**
         * A simple data structure representing a NURBS curve. `NurbsCurveData` does no checks for legality. You can us
         * `verb.eval.Check` for that
         */
        export class NurbsCurveData extends SerializableBase {

            constructor(degree:any, knots:any, controlPoints:any);

            degree: integer;

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
        export class NurbsSurfaceData extends SerializableBase {

            constructor(degreeU:any, degreeV:any, knotsU:any, knotsV:any, controlPoints:any);

            degreeU: integer;

            /**
             * nteger degree of surface in u directio
             */
            degreeV: integer;

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
        export interface Tri extends Array<integer> {}

        /**
         * A `UV` is simply an array of floating point numbers
         * 
         * So, in JavaScript, one would write simply `[1,0]` to create a U
         */
        export interface UV extends Array<number> {}

        /**
         * A simple data structure representing a mesh. `MeshData` does not check for legality
         */
        export class MeshData extends SerializableBase {

            faces: Array<Tri>;

            points: Array<Point>;

            normals: Array<Point>;

            uvs: Array<UV>;

            constructor(faces:Array<Tri>, points:Array<Point>, normals:Array<Point>, uvs:Array<UV>);

            static empty(): MeshData;

        }

        /**
         * A simple data structure representing a polyline. `PolylineData` is useful, for example, as the result of a curve tessellation
         */
        export class PolylineData extends SerializableBase {

            points: Array<Point>;

            /**
             * The points in the polylin
             */
            params: Array<number>;

            /**
             * The parameters of the individual point
             */
            constructor(points:any, params:any);

        }

        /**
         * A simple data structure representing a NURBS volume. This data structure is largely experimental in intent. Like CurveDat
         * and SurfaceData, this data structure does no legality checks
         */
        export class VolumeData extends SerializableBase {

            constructor(degreeU:any, degreeV:any, degreeW:any, knotsU:any, knotsV:any, knotsW:any, controlPoints:any);

            degreeU: integer;

            /**
             * nteger degree in u directio
             */
            degreeV: integer;

            /**
             * nteger degree in v directio
             */
            degreeW: integer;

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
        export class Pair<T1,T2> {

            item0: T1;

            item1: T2;

            constructor(item1:T1, item2:T2);

        }

        /**
         * A simple parametric data type representing an "interval" between two numbers. This data structure does no legality checks
         */
        export class Interval<T> {

            min: T;

            max: T;

            constructor(min:any, max:any);

        }

    }

}

