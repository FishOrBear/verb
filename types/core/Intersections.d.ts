type Point = Array<number>;
type UV = any;
declare module core
{

    module Intersections
    {

        class CurveCurveIntersection
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

        class CurveSurfaceIntersection
        {

            u: number;

            // uv: UV;

            curvePoint: Point;

            surfacePoint: Point;

            constructor(u: any, uv: any, curvePoint: any, surfacePoint: any);

        }

        class MeshIntersectionPoint
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

        class PolylineMeshIntersection
        {

            point: Point;

            u: number;

            uv: UV;

            polylineIndex: number;

            faceIndex: number;

            constructor(point: any, u: any, uv: any, polylineIndex: any, faceIndex: any);

        }

        class SurfaceSurfaceIntersectionPoint
        {

            uv0: UV;

            uv1: UV;

            point: Point;

            dist: number;

            constructor(uv0: any, uv1: any, point: any, dist: any);

        }

        class TriSegmentIntersection
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

        class CurveTriPoint
        {

            u: number;

            uv: UV;

            point: Point;

            constructor(u: number, point: Point, uv: UV);

        }

        class SurfacePoint
        {

            uv: UV;

            point: Point;

            normal: Point;

            id: number;

            degen: boolean;

            constructor(point: Point, normal: Point, uv: UV, id?: number, degen?: boolean);

            static fromUv(u: any, v: any): any;

        }

        class CurvePoint
        {

            u: number;

            pt: Point;

            constructor(u: any, pt: any);

        }

    }

}

