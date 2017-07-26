declare module verb.core
{

    /**
     * `Mesh` provides various convenience methods for working with meshes
     */
    export class Mesh
    {

        /**
         * et triangle norma
         * 
         * params*
         * 
         * array of length 3 arrays of numbers representing the point
         * length 3 array of point indices for the triangl
         * 
         * returns*
         * 
         * a normal vector represented by an array of length
         * 
         */
        static getTriangleNorm(points: Array<Point>, tri: Tri): Point;

        v0: any;

        /**
         * orm axis-aligned bounding box from triangles of mes
         * 
         * params*
         * 
         * a mes
         * face indices of the mesh to include in the bounding bo
         * 
         * returns*
         * 
         * a BoundingBox containing the mes
         * 
         */
        static makeMeshAabb(mesh: MeshData, faceIndices: Array<number>): verb.core.BoundingBox;

        bb: any;

        /**
         * ort particular faces of a mesh on the longest axi
         * 
         * params*
         * 
         * bounding box containing the face
         * the mesh it sel
         * the indices of the mesh faces to inspec
         * 
         * returns*
         * 
         * a point represented by an array of length (dim
         * 
         */
        static sortTrianglesOnLongestAxis(bb: verb.core.BoundingBox, mesh: MeshData, faceIndices: Array<number>): Array<number>;

        longAxis: any;

        minCoordFaceMap: any;

        tri_min: any;

        a0: any;

        b0: any;

        sortedFaceIndices: any;

        min: any;

        coord: any;

    }

}

