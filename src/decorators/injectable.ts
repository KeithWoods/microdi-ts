import MicroDiMetadata from './microDiMetadata';
export default function injectable(constructor: Function) {
    MicroDiMetadata.getOrCreate(constructor);
}
