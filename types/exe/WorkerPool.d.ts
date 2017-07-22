declare module verb.exe {

    /**
     * `WorkerPool` provides a pool of WebWorker objects for concurrent evaluation in JavaScrip
     */
    export class WorkerPool {

        /**
         * Create a new `WorkerPool
         * 
         * params*
         * 
         * the number of `Worker` threads to for
         * the filename of verb's javascript file - defaults to "verb.js". The final path is formed by concatenating `WorkerPool.basePath` and this
         */
        constructor(numThreads?:integer, fileName?:string);

        w: js.html.Worker;

        /**
         * The base path to look for verb's source cod
         */
        static basePath: any;

        /**
         * Add work to perform to the queu
         */
        addWork(className:string, methodName:string, args:Array<any>, callback:any): void;

        work: any;

        work: any;

        workId: any;

        worker: any;

    }

    module WorkerPool {

        /**
         * pon completing your task..
         */
        export class Work {

            className: string;

            methodName: string;

            args: Array<any>;

            id: integer;

            constructor(className:any, methodName:any, args:any);

        }

    }

}

