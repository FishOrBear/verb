declare module verb.exe {

    /**
     * ...
     * @author Kenton Hamaluik
     */
    export class ThreadPool {

        constructor(numThreads:integer);

        addTask(task:(any)=>any, arg:any, onFinish:(any)=>void): void;

        blockRunAllTasks(): void;

        thread: PoolThread;

    }

    module ThreadPool {

        export class PoolThread {

            started: boolean;

            done: boolean;

            d: boolean;

            result: any;

            r: any;

            constructor();

            start(task:(any)=>any, arg:any): void;

            arg: any;

            ret: any;

        }

        export interface Task {

            id: integer;

            task: (any)=>any;

            done: boolean;

            arg: any;

            thread: PoolThread;

            onFinish: (any)=>void;

        }

    }

}

