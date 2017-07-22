declare module verb.core {

    export class MeshBoundingBoxTree implements IBoundingBoxTree<integer> {

        _children: Pair<IBoundingBoxTree<integer>,IBoundingBoxTree<integer>>;

        _boundingBox: BoundingBox;

        _face: integer;

        _empty: boolean;

        constructor(mesh:MeshData, faceIndices?:Array<integer>);

    }

}

