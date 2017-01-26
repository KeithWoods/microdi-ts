import {Container as MicroDiContainer, RegistrationModifier} from 'microdi-js';
import MicroDiMetadata from './decorators/microDiMetadata';

/**
 * A shim over the underlying container
 */
export default class Container extends MicroDiContainer {
    register<T>(name:string, proto:any) : RegistrationModifier {
        let microDiMetadata = MicroDiMetadata.getOrCreate(proto);
        return super
            .register(name, proto)
            .inject(... microDiMetadata.getDependencyIdentifiers());
    }
}