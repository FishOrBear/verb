declare module verb.core
{

    export class Minimizer
    {

        static uncmin(f: (Vector) => number, x0: Vector, tol?: number, gradient?: (Vector) => Vector, maxit?: number): MinimizationResult;

        n: any;

        f0: any;

        it: any;

        msg: any;

    }

    module Minimizer
    {

        /**
         * ine searc
         */
        export class MinimizationResult
        {

            solution: Vector;

            value: number;

            gradient: Vector;

            invHessian: Matrix;

            iterations: number;

            message: string;

            constructor(solution: any, value: any, gradient: any, invHessian: any, iterations: any, message: any);

        }

    }

}

