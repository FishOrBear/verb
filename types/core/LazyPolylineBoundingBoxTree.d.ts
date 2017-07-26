declare module verb.core
{

    export class LazyPolylineBoundingBoxTree implements IBoundingBoxTree<number> {

        _interval: Interval<number>;

        _polyline: PolylineData;

        _boundingBox: BoundingBox;

        constructor(polyline: any, interval?: any);

        split(): Pair<IBoundingBoxTree<number>, IBoundingBoxTree<number>>;

        min: any;

        max: any;

        pivot: any;

        l: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

        empty(): any;

    }

}

