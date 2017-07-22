declare module verb.eval {

    /**
     * `Tess` contains static, immutable algorithms for tessellation of NURBS curves and sufaces. Tessellation is the decompositio
     * of the analytical NURBS representation into discrete meshes or polylines that are useful for drawing
     * 
     * Some of these algorithms are "adaptive" - using certain heuristics to sample geometry where such samples make sense - whil
     * others are "regular" in that they sample regularly throughout a parametric domain. There are tradeoffs here. Whil
     * adaptive algorithms can sometimes yield "better" results that are smaller or more economical, this can sometimes come a
     * increased computational cost. For example, it is sometimes necessarily to compute higher order derivatives in order t
     * obtain these more economical results. Your usage of these algorithms should consider these tradeoffs
     */
    export class Tess {

        /**
         * ample a NURBS curve at equally spaced parametric interval
         * 
         * params*
         * 
         * NurbsCurveData objec
         * integer number of sample
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an array of points, prepended by the point param if require
         */
        static rationalCurveRegularSample(curve:NurbsCurveData, numSamples:integer, includeU:boolean): Array<Point>;

        /**
         * ample a range of a NURBS curve at equally spaced parametric interval
         * 
         * params*
         * 
         * NurbsCurveData objec
         * start parameter for samplin
         * end parameter for samplin
         * integer number of sample
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an dictionary of parameter - point pair
         */
        static rationalCurveRegularSampleRange(curve:NurbsCurveData, start:number, end:number, numSamples:integer, includeU:boolean): Array<Point>;

        /**
         * ample a NURBS curve over its entire domain, corresponds to [this algorithm](http://ariel.chronotext.org/dd/defigueiredo93adaptive.pdf
         * 
         * params*
         * 
         * NurbsCurveData objec
         * tol for the adaptive schem
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an array of dim + 1 length where the first element is the param where it was sampled and the remaining the p
         * f degree is 1, just return the dehomogenized control point
         * he first element of each array is the paramete
         * ample a NURBS curve at 3 points, facilitating adaptive samplin
         * 
         * params*
         * 
         * NurbsCurveData objec
         * start parameter for samplin
         * end parameter for samplin
         * whether to prefix the point with the paramete
         * 
         * returns*
         * 
         * an array of dim + 1 length where the first element is the param where it was sampled and the remaining the p
         * ample curve at three pt
         * f the two end control points are coincident, the three point test will always return 0, let's split the curv
         * he first condition checks if the curve makes up a loop, if so, we will need to continue evaluatio
         * et the exact middl
         * ecurse on the two halve
         * oncatenate the tw
         * essellate a NURBS surface on equal spaced intervals in the parametric domai
         * 
         * params*
         * 
         * NurbsSurfaceData objec
         * number of divisions in the u directio
         * number of divisions in the v directio
         * 
         * returns*
         * 
         * MeshData objec
         * ivide a NURBS surface int equal spaced intervals in the parametric domain as AdaptiveRefinementNode
         * 
         * params*
         * 
         * NurbsSurfaceData objec
         * SurfaceDivideOptions objec
         * 
         * returns*
         * 
         * MeshData objec
         * et necessary interval
         * 1) evaluate all of the corner
         * odo: make this faster by specifying n,
         * 2) make all of the node
         * 3) assign all of the neighbors and divid
         * riangulate all of the nodes of the tre
         * daptive divid
         * riangulatio
         * `
         * tructure of the child node
         * n the adaptive refinement tre
         * 
         * 
         * 
         * 
         * +-->
         * 
         * neighbors[2
         * 
         * (u0,v1)---(u05,v1)---(u1,v1
         * |           |
         * |     3     |     2
         * |           |
         * eighbors[3]   (u0,v05)--(u05,v05)--(u1,v05)   neighbors[1
         * |           |
         * |     0     |     1
         * |           |
         * (u0,v0)---(u05,v0)---(u1,v0
         * 
         * neighbors[0
         * `
         * f no corners, we need to construct initial corners from the surfac
         * val the cente
         * val all of the corner
         * f it's not already evaluate
         * valuate i
         * f its a leaf, there are no children to obtain uvs fro
         * ertical cas
         * et opposite edges uv
         * ange clipping function
         * lip the range of uvs to match this on
         * et neighbor
         * orrect the norma
         * on't divide any further when encountering a degenerate norma
         */
        center: any;

        divide(options?:AdaptiveRefinementOptions): void;

        /**
         * s the quad flat in one dir and curved in the other
         */
        bott: any;

        top: any;

        /**
         * ssign neighbors to bottom nod
         * ssign neighbors to top nod
         */
        left: any;

        right: any;

        /**
         * ivide all children recursivel
         */
        triangulate(mesh?:MeshData): MeshData;

        /**
         * ecurse on the childre
         */
        triangulateLeaf(mesh:MeshData): MeshData;

        baseIndex: any;

        /**
         * numerate all uvs in counter clockwise directio
         */
        edgeCorners: any;

        /**
         * his is the vertex that is spli
         * f the id is defined, we can just push it and continu
         * f the number of points is 4, we're just doing
         * ectangle - just build the basic triangulated squar
         * ll don
         */
        il: any;

        /**
         * se the splitcorner to triangulat
         * here will be 3 triangle
         */
        center: any;

        /**
         * ake point at center of fac
         */
        centerIndex: any;

        /**
         * et inde
         */
        i: any;

        /**
         * uild triangle fan from cente
         */
        j: any;

    }

}

