declare module verb.geom {

    /**
     * A ConicalSurface is a surface making up the curve surface of a con
     */
    export class ConicalSurface extends NurbsSurface {

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
        constructor(axis:Vector, xaxis:Vector, base:Point, height:number, radius:number);

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

