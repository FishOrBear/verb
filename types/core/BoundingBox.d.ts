declare module verb.core {

    /**
     * `BoundingBox` is an n-dimensional bounding box implementation. It is used by many of verb's intersection algorithms
     * 
     * The first point added to the `BoundingBox` using `BoundingBox.add` will be used to define the dimensionality of th
     * bounding box
     */
    export class BoundingBox {

        initialized: boolean;

        dim: integer;

        /**
         * oundingBox Constructo
         * 
         * params*
         * 
         * Points to add, if desired.  Otherwise, will not be initialized until add is called
         */
        constructor(pts?:Array<Point>);

        min: Point;

        /**
         * The minimum point of the BoundingBox - the coordinates of this point are always <= max
         */
        max: Point;

        /**
         * The maximum point of the BoundingBox. The coordinates of this point are always >= min
         * reate a bounding box initialized with a single elemen
         * 
         * params*
         * 
         * A array of number
         * 
         * returns*
         * 
         * This BoundingBox for chainin
         */
        fromPoint(pt:any): any;

        /**
         * dds a point to the bounding box, expanding the bounding box if the point is outside of it
         * f the bounding box is not initialized, this method has that side effect
         * 
         * params*
         * 
         * A length-n array of number
         * 
         * returns*
         * 
         * This BoundingBox for chainin
         */
        add(point:Point): BoundingBox;

    }

}

