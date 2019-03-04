import { OnlyLoggedInUsersGuard } from './only-logged-in-users-guard';

describe('OnlyLoggedInUsersGuard', () => {
  it('should create an instance', () => {
    expect(new OnlyLoggedInUsersGuard()).toBeTruthy();
  });
});
