import { AlwaysAuthChildrenGuard } from './always-auth-children-guard';

describe('AlwaysAuthChildrenGuard', () => {
  it('should create an instance', () => {
    expect(new AlwaysAuthChildrenGuard()).toBeTruthy();
  });
});
