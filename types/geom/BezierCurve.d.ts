declare module verb.geom {

    /**
     * Bezier curve is a common spline curv
     */
    export class BezierCurve extends NurbsCurve {

        /**
         * reate a bezier curv
         * 
         * params*
         * 
         * Array of control point
         * Array of control point weights (optional
         */
        constructor(points:Array<Point>, weights?:Array<number>);

    }

}

