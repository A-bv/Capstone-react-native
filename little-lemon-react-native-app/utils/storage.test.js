import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveUser, getUser, removeUser } from './storage';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('storage', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('returns null when no user is stored', async () => {
    expect(await getUser()).toBeNull();
  });

  it('saves and retrieves a user', async () => {
    const user = { username: 'jane', email: 'jane@example.com' };
    await saveUser(user);
    expect(await getUser()).toEqual(user);
  });

  it('removes a stored user', async () => {
    await saveUser({ username: 'jane' });
    await removeUser();
    expect(await getUser()).toBeNull();
  });
});
