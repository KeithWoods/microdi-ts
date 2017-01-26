import 'reflect-metadata';

interface Parmeter {
    type:any;
    identifier?:string | Symbol;
}

/**
 * Simple class to track DI metadata for an object
 */
export default class MicroDiMetadata {

    private static METADATA_SYMBOL = Symbol('microdi:metadata');
    private _parameters :Array<any>;

    public static getOrCreate(target: any): MicroDiMetadata {
        let metadata = <MicroDiMetadata> Reflect.getOwnMetadata(MicroDiMetadata.METADATA_SYMBOL, target);
        if (!metadata) {
            metadata = new MicroDiMetadata(target);
            Reflect.defineMetadata(MicroDiMetadata.METADATA_SYMBOL, metadata, target);
        }
        return metadata;
    }

    get parameters() {
        return this._parameters;
    }

    constructor(target) {
        let metadata = <Array<Parmeter>>Reflect.getMetadata("design:paramtypes", target) || [];
        this._parameters = metadata.map(type => { return { type:type, identifier:null }; });
    }

    getDependencyIdentifiers() : Array<string | Symbol> {
        return this._parameters.map(p => <string | Symbol>p.identifier);
    }

    verifyParameters(parametersToInject:Array<any>) {
        // check parameter length matches
    }
}