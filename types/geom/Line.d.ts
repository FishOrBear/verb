declare module verb.geom {

    /**
     * A curve representing a straight lin
     */
    export class Line extends NurbsCurve {

        /**
         * reate a lin
         * 
         * params*
         * 
         * Length 3 array representing the start poin
         * Length 3 array representing the end poin
         */
        constructor(start:Point, end:Point);

        start(): any;

        /**
         * ength 3 array representing the start poin
         */
        end(): any;

    }

}

