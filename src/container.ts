import {Container as MDContainer, RegistrationModifier} from 'microdi-js';
import MicroDiMetadata from './decorators/microDiMetadata';

export default class Container {
    private _underlying:MDContainer;

    constructor() {
        this._underlying = new MDContainer();
    }

    register<T>(identifier:string, object:any) : RegistrationModifier {
        let microDiMetadata = MicroDiMetadata.getOrCreate(object);
        return this._underlying
            .register(identifier, object)
            .inject(... microDiMetadata.getDependencyIdentifiers());
    }

    resolve<T>(identifier:string): T {
        return this._underlying.resolve<T>(identifier);
    }
}