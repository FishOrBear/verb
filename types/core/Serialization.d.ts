declare module core.Serialization
{
    /**
     * An interface describing a type that can be serialized as
     * string. Use verb.core.Deserializer to construct an instance of th
     * the type from the resultant string. The string is the serialized representation of a hax
     * object and is strongly typed. For details, se
     * [http://haxe.org/manual/std-serialization.html](http://haxe.org/manual/std-serialization.html) for details
     */
    interface ISerializable
    {

        serialize(): string;

    }

    /**
     * Forms a base class for serializable data type
     */
    class SerializableBase
    {

        serialize(): string;

        serializer: any;

    }

    /**
     * Deserializes strings for types implementing ISerializabl
     */
    class Deserializer
    {

        /**
         * onstruct an ISerializable from its string representation, given a parameter T. You ca
         * se this to deserialize almost any type in verb.geom or verb.core.*Data types
         * 
         * params*
         * 
         * A string representing something implementing ISerializabl
         * 
         * returns*
         * 
         * A new T from the strin
         */
        static deserialize<T>(s: string): T;

        unserializer: any;

        r: any;//T

    }

}

