declare module verb.geom {

    /**
     * An Arc is a three dimensional curve representing a subset of a full Circl
     */
    export class Arc extends NurbsCurve {

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
        constructor(center:Point, xaxis:Vector, yaxis:Vector, radius:number, minAngle:number, maxAngle:number);

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

