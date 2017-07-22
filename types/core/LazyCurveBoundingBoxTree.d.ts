declare module verb.core {

    export class LazyCurveBoundingBoxTree implements IBoundingBoxTree<NurbsCurveData> {

        _curve: NurbsCurveData;

        _boundingBox: BoundingBox;

        _knotTol: number;

        constructor(curve:any, knotTol?:number);

        split(): Pair<IBoundingBoxTree<NurbsCurveData>,IBoundingBoxTree<NurbsCurveData>>;

        min: any;

        max: any;

        dom: any;

        crvs: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance:number): any;

    }

}

