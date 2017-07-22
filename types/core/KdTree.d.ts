declare module verb.core {

    /**
     * Haxe port of
     * 
     * -d Tree JavaScript - V 1.
     * 
     * ttps://github.com/ubilabs/kd-tree-javascrip
     * 
     * author Mircea Pricop <pricop@ubilabs.net>, 201
     * author Martin Kleppe <kleppe@ubilabs.net>, 201
     * author Ubilabs http://ubilabs.net, 201
     * license MIT License <http://www.opensource.org/licenses/mit-license.php
     */
    export class KdTree<T> {

        constructor(points:any, distanceFunction:any);

        dim: any;

        diff: any;

        nearest(point:Point, maxNodes:integer, maxDistance:number): Array<Pair<KdPoint<T>,number>>;

        bestNodes: any;

        nearestSearch(node:KdNode<T>): any;

        saveNode(node:KdNode<T>, distance:number): void;

    }

}

