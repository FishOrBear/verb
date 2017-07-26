declare module eval
{

    /**
     * `Intersect` provides various tools for all kinds of intersection. This includes but not limited to
     * 
     * curve
     * surface
     * meshe
     * polyline
     * 
     * Under the hood, most of these algorithms call the recursive bounding box intersection algorith
     * (`Intersect.boundingBoxTrees<T1, T2>`) followed by some kind of minimization
     */
    class Intersect
    {

        /**
         * ntersect two NURBS surfaces, yielding a list of curve
         * 
         * params*
         * 
         * NurbsSurfaceData for the first surfac
         * NurbsSurfaceData for the secon
         * 
         * returns*
         * 
         * array of NurbsCurveData object
         */
        static surfaces(surface0: NurbsSurfaceData, surface1: NurbsSurfaceData, tol: number): Array<NurbsCurveData>;

        tess1: any;

        /**
         * 1) tessellate the two surface
         */
        tess2: any;

        resApprox: any;

        /**
         * 2) intersect the two meshes, yielding a list of polyline
         */
        exactPls: any;

    }




    interface IBoundingBoxTree<T>
    {

        boundingBox(): core.BoundingBox;
        split(): core.Data.Pair<IBoundingBoxTree<T>, IBoundingBoxTree<T>>;
        yield(): T;
        indivisible(tolerance: number): boolean;
        empty(): boolean;
    }
}