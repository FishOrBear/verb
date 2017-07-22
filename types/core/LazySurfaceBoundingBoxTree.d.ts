declare module verb.core {

    export class LazySurfaceBoundingBoxTree implements IBoundingBoxTree<NurbsSurfaceData> {

        _surface: NurbsSurfaceData;

        _boundingBox: BoundingBox;

        _splitV: boolean;

        _knotTolU: number;

        _knotTolV: number;

        constructor(surface:any, splitV?:any, knotTolU?:any, knotTolV?:any);

        split(): Pair<IBoundingBoxTree<NurbsSurfaceData>,IBoundingBoxTree<NurbsSurfaceData>>;

        min: number;

        max: number;

        dom: any;

        pivot: any;

        /**
         * dom * 0.01 * Math.random()
         */
        srfs: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance:number): any;

    }

}

