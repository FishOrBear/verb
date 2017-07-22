declare module verb.core {

    export class ArrayExtensions {

        /**
         * ill an array with n copies of null by mutatio
         * 
         * params*
         * 
         * the array to fil
         * the number of null's to add to the arra
         * 
         * returns*
         * 
         * nothing, just mutates the given arra
         */
        static alloc<T>(a:Array<T>, n:integer): any;

    }

}

