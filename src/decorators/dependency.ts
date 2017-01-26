import MicroDiMetadata from './microDiMetadata';

export default function dependency(identifier: string) {
    // TODO guard check, export Guard from microdi
    return function(target: Function, key: string, index: number) {
        let metadata = MicroDiMetadata.getOrCreate(target);
        metadata.parameters[index].identifier = identifier;
    };
}
