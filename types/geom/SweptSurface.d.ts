declare module verb.geom {

    /**
     * A SweptSurface uses a profile curve and a guide rail to form a surface. The profile curve is "swept" along the guid
     * rail by a lofting operation
     */
    export class SweptSurface extends NurbsSurface {

        /**
         * onstruct a Surface by translating along a rail curv
         * 
         * params*
         * 
         * The profile curv
         * The rail curv
         */
        constructor(profile:ICurve, rail:ICurve);

        /**
         * he profile curv
         */
        profile(): ICurve;

        /**
         * he rail curv
         */
        rail(): ICurve;

    }

}

