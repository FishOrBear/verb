declare module verb.geom {

    /**
     * A Circle is a three dimensional curve representing the points that are equidistant from a point in a particular plan
     */
    export class Circle extends Arc {

        /**
         * reate a circl
         * 
         * params*
         * 
         * Length 3 array representing the center of the circl
         * Length 3 array representing the xaxi
         * Length 3 array representing the perpendicular yaxi
         * Radius of the circl
         */
        constructor(center:Point, xaxis:Vector, yaxis:Vector, radius:number);

    }

}

