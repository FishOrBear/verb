declare module verb.core {

    export class LazyPolylineBoundingBoxTree implements IBoundingBoxTree<integer> {

        _interval: Interval<integer>;

        _polyline: PolylineData;

        _boundingBox: BoundingBox;

        constructor(polyline:any, interval?:any);

        split(): Pair<IBoundingBoxTree<integer>,IBoundingBoxTree<integer>>;

        min: any;

        max: any;

        pivot: any;

        l: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance:number): any;

        empty(): any;

    }

}

