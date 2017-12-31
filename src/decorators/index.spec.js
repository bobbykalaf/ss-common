// @flow
import { obsolete, virtual } from './decorators';
import 'jest';

class Test {
    @obsolete()
    obsoleteProperty: string = 'initialized';
    @obsolete()
    obsoleteMethod = () => 'string';
    @virtual()
    virtualMethod = () => 'original';
}

class Descendant extends Test {
    virtualMethod = () => 'overridden';
}

test(() => expect(new Test().obsoleteProperty).toBe('initialized'));
test(() => expect(new Test().obsoleteMethod()).toBe('string'));
test(() => expect(new Test().virtualMethod()).toBe('original'));
test(() => expect(new Descendant().virtualMethod()).toBe('overridden'));