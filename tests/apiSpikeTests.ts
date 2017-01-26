import Container from '../src/container';
import Object1 from './model/object1';
import DependencyConsts from './model/dependencyConsts';
import Object2 from './model/object2';

describe('API Spike', () => {
    it('all the things 1', () => {
        let container = new Container();
        container.register(DependencyConsts.Object1Key, Object1);
        container.register(DependencyConsts.Object2Key, Object2);
        let object1 = container.resolve<Object1>(DependencyConsts.Object1Key);
        expect(object1).toBeInstanceOf(Object1);
     });
 });
