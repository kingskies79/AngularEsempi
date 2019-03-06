import { AlwaysAuthGuard } from './always-auth-guard';

describe('AlwaysAuthGuard', () => {
  it('should create an instance', () => {
    expect(new AlwaysAuthGuard()).toBeTruthy();
  });
});
