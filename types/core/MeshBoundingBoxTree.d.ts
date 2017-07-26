declare module verb.core
{

    export class MeshBoundingBoxTree implements IBoundingBoxTree<number> {

        _children: Pair<IBoundingBoxTree<number>, IBoundingBoxTree<number>>;

        _boundingBox: BoundingBox;

        _face: number;

        _empty: boolean;

        constructor(mesh: MeshData, faceIndices?: Array<number>);

    }

}

