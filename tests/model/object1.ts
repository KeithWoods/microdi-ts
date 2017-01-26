import injectable from '../../src/decorators/injectable';
import dependency from '../../src/decorators/dependency';
import DependencyConsts from './dependencyConsts';
import Object2 from './object2';

@injectable
export default class Object1 {
    public someProp:string;
    constructor(
        @dependency(DependencyConsts.Object2Key) public object2:Object2,
    ) {
    }
}