declare module core
{
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
    class KdTree<T> {

        constructor(points: any, distanceFunction: any);

        dim: any;

        diff: any;
        nearest(point: Point, maxNodes: number, maxDistance: number): Array<Data.Pair<KdPoint<T>, number>>;

        bestNodes: any;

        nearestSearch(node: KdNode<T>): any;

        saveNode(node: KdNode<T>, distance: number): void;

    }


    //Binary heap implementation from:
    //http://eloquentjavascript.net/appendix2.html

    class BinaryHeap<T> {

        public content: Array<Data.Pair<T, number>>;
        constructor(scoreFunction);
        push(element: Data.Pair<T, number>): void;
        pop(): Data.Pair<T, number>;
        peek(): Data.Pair<T, number>;
        remove(node: Data.Pair<T, number>): void
    }

    // A point in a KdTree
    class KdPoint<T> {

        // The point
        public point: Point;

        // An arbitrary object to attach
        public obj: T;
        constructor(point, obj);
    }

    // A node in a KdTree
    class KdNode<T> {

        // The point itself
        public kdPoint: KdPoint<T>;

        // The left child
        public left: KdNode<T>;

        // The right child
        public right: KdNode<T>;

        // The parent of the node
        public parent: KdNode<T>;

        // The dimensionality of the point

        public dimension: number;//Int

        constructor(kdPoint: KdPoint<T>, dimension: number, parent: KdNode<T>);
    }
}
