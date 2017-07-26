declare module verb.core
{

    export class LazyMeshBoundingBoxTree implements IBoundingBoxTree<number> {

        _mesh: MeshData;

        _faceIndices: Array<number>;

        _boundingBox: BoundingBox;

        constructor(mesh: any, faceIndices?: any);

        split(): Pair<IBoundingBoxTree<number>, IBoundingBoxTree<number>>;

        as: any;

        boundingBox(): any;

        yield(): any;

        indivisible(tolerance: number): any;

        empty(): any;

    }

}

