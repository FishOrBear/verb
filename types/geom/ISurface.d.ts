declare module verb.geom {

    /**
     * An interface representing a Surfac
     */
    export interface ISurface extends ISerializable {

        /**
         * rovide the NURBS representation of the curv
         * 
         * returns*
         * 
         * A NurbsCurveData object representing the curv
         */
        asNurbs(): NurbsSurfaceData;

        /**
         * rovide the domain of the surface in the U directio
         * 
         * returns*
         * 
         * An interval object with min and max propertie
         */
        domainU(): Interval<number>;

        /**
         * rovide the domain of the surface in the V directio
         * 
         * returns*
         * 
         * An interval object with min and max propertie
         */
        domainV(): Interval<number>;

        /**
         * btain a point on the surface at the given paramete
         * 
         * params*
         * 
         * The u paramete
         * The v paramete
         * 
         * returns*
         * 
         * A point on the surfac
         */
        point(u:number, v:number): Point;

        /**
         * btain the derivatives of the NurbsSurface.  Returns a two dimensional arra
         * ontaining the derivative vectors.  Increasing U partial derivatives are increasin
         * ow-wise.  Increasing V partial derivatives are increasing column-wise.  Therefore
         * he [0][0] position is a point on the surface, [n][0] is the nth V partial derivative
         * he [1][1] position is twist vector or mixed partial derivative Puv
         * 
         * params*
         * 
         * The u paramete
         * The v paramete
         * Number of derivatives to evaluat
         * 
         * returns*
         * 
         * A two dimensional array of vector
         */
        derivatives(u:number, v:number, numDerivs?:integer): Array<Array<Vector>>;

    }

}

