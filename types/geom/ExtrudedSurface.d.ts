declare module verb.geom {

    /**
     * Form a Surface by extruding a curve along a vecto
     */
    export class ExtrudedSurface extends NurbsSurface {

        /**
         * onstruct a Surface by extruding a curv
         * 
         * params*
         * 
         * The profile curv
         * The direction and magnitude of the extrusio
         */
        constructor(profile:ICurve, direction:Vector);

        /**
         * he profile curv
         */
        profile(): ICurve;

        /**
         * he direction and magnitude of the extrusio
         */
        direction(): Vector;

    }

}

