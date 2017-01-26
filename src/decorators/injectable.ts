import MicroDiMetadata from './microDiMetadata';

// Typescript only omits metadata for objects that have 1 or more attributes, thus we need this 'noop' attribute to enable that.
export default function injectable(constructor: Function) {
    // Technically it doesn't need the MicroDiMetadata creation here but we may as well do it early on rather than later.
    MicroDiMetadata.getOrCreate(constructor);
}
