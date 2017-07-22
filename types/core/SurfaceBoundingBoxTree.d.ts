declare module verb.core {

    export class SurfaceBoundingBoxTree implements IBoundingBoxTree<NurbsSurfaceData> {

        _children: Pair<IBoundingBoxTree<NurbsSurfaceData>,IBoundingBoxTree<NurbsSurfaceData>>;

        _surface: NurbsSurfaceData;

        _boundingBox: BoundingBox;

        constructor(surface:any, splitV?:any, knotTolU?:any, knotTolV?:any);

        divisible: any;

        min: number;

        max: number;

        dom: any;

        pivot: any;

        srfs: any;

        split(): Pair<IBoundingBoxTree<NurbsSurfaceData>,IBoundingBoxTree<NurbsSurfaceData>>;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance:number): any;

        empty(): any;

    }

}

