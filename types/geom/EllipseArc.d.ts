declare module verb.geom {

    /**
     * An EllipseArc is a subset of an Ellips
     */
    export class EllipseArc extends NurbsCurve {

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
        constructor(center:Point, xaxis:Vector, yaxis:Vector, minAngle:number, maxAngle:number);

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

