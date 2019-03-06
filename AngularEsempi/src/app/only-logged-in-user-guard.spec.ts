import { OnlyLoggedInUserGuard } from './only-logged-in-user-guard';

describe('OnlyLoggedInUserGuard', () => {
  it('should create an instance', () => {
    expect(new OnlyLoggedInUserGuard()).toBeTruthy();
  });
});
