declare module verb.geom {

    /**
     * A surface representing the doubly curved surface of a spher
     */
    export class SphericalSurface extends NurbsSurface {

        /**
         * reate a spherical surfac
         * 
         * params*
         * 
         * Length 3 array representing the center of the circl
         * Radius of the circl
         */
        constructor(center:Point, radius:number);

        /**
         * ength 3 array representing the center of the circl
         */
        center(): Point;

        /**
         * adius of the circl
         */
        radius(): number;

    }

}

