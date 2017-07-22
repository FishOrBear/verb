declare module verb.geom {

    /**
     * A CylindricalSurface is a surface making up part of a cylinder
     */
    export class Ellipse extends EllipseArc {

        /**
         * reate an ellips
         * 
         * params*
         * 
         * 
         * Length 3 array representing the center of the circl
         * Length 3 array representing the xaxi
         * Length 3 array representing the perpendicular yaxi
         */
        constructor(center:Point, xaxis:Vector, yaxis:Vector);

    }

}

