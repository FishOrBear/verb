declare module verb.geom {

    /**
     * A surface formed by revolving a profile curve around a given axis lin
     */
    export class RevolvedSurface extends NurbsSurface {

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
        constructor(profile:NurbsCurve, center:Point, axis:Vector, angle:number);

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

