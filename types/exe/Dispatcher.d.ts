declare module verb.exe
{

    export class Dispatcher
    {

        static THREADS: number;

        static dispatchMethod<T>(classType: Class<any>, methodName: string, args: Array<any>): promhx.Promise<T>;

        def: any;

        callback: any;

        r: any;

    }

}

