type Point = Array<number>;
export declare module core
{
    /**
     * `Constants` contains a collection of default constants used throughout the library. These can be set to adjust verb'
     * defaults
     */
    //src/verb/core/Constants.hx
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

    //src/verb/core/Intersections.hx
    export class CurveCurveIntersection
    {

        //where the intersection took place
        public point0: Point;

        //where the intersection took place on the second curve
        public point1: Point;

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
    export class PolylineData extends Serialization.SerializableBase
    {

        points: Array<Point>;

        /**
         * The points in the polylin
         */
        params: Array<number>;

        /**
         * The parameters of the individual point
         */
        constructor(points: Array<Point>, params: Array<number>);

    }

}

//src/verb/core/Serialization.hx
export declare module core.Serialization
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
    }

}


export declare module eval
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
        // static surfaces(surface0: NurbsSurfaceData, surface1: NurbsSurfaceData, tol: number): Array<NurbsCurveData>;
        static polylines(polyline0: core.PolylineData, polyline1: core.PolylineData, tol: number): Array<core.CurveCurveIntersection>;
    }
}