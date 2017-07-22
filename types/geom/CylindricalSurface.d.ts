declare module verb.geom {

    /**
     * A CylindricalSurface is a surface making up the curve surface of a cylinde
     */
    export class CylindricalSurface extends NurbsSurface {

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
        constructor(axis:Vector, xaxis:Vector, base:Point, height:number, radius:number);

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

