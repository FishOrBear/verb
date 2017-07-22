declare module verb.geom {

    /**
     * n interface representing a Curv
     */
    export interface ICurve extends ISerializable {

        /**
         * rovide the NURBS representation of the curv
         * 
         * returns*
         * 
         * A NurbsCurveData object representing the curv
         */
        asNurbs(): NurbsCurveData;

        /**
         * btain the parametric domain of the curv
         * 
         * returns*
         * 
         * An Interval object containing the min and max of the domai
         */
        domain(): Interval<number>;

        /**
         * valuate a point on the curv
         * 
         * params*
         * 
         * The parameter on the curv
         * 
         * returns*
         * 
         * The evaluated poin
         */
        point(u:number): Point;

        /**
         * valuate the derivatives at a point on a curv
         * 
         * params*
         * 
         * The parameter on the curv
         * The number of derivatives to evaluate on the curv
         * 
         * returns*
         * 
         * An array of derivative vector
         */
        derivatives(u:number, numDerivs?:integer): Array<Vector>;

    }

}

