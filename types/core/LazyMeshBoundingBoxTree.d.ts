declare module verb.core {

    export class LazyMeshBoundingBoxTree implements IBoundingBoxTree<integer> {

        _mesh: MeshData;

        _faceIndices: Array<integer>;

        _boundingBox: BoundingBox;

        constructor(mesh:any, faceIndices?:any);

        split(): Pair<IBoundingBoxTree<integer>,IBoundingBoxTree<integer>>;

        as: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance:number): any;

        empty(): any;

    }

}

