import { useEffect, useState } from 'react';
import runOnDev from '../debug/runOnDev';
import { createFakeToken, createFakeUser } from './skypeUserMock';
import { UserProfileType, UserTokenType } from './types';

// TODO Default comes from Apollo side. Beware of changing.
const DEFAULT_AVATAR = 'DEFAULT_AVATAR';

if (process.env.NODE_ENV === 'development') {
  runOnDev(createFakeUser);
  runOnDev(createFakeToken);
}
// Creates fake user for debug/develop purpose

const defaultUser: UserProfileType = {
  avatarUrl: '',
  emails: [],
  firstname: '',
  lastname: '',
  username: '',
};

/*******************************************************************************************************
 * Get Data
 *******************************************************************************************************/

function getUserData(): UserProfileType {
  try {
    const profileJson = sessionStorage.getItem('profile');
    if (profileJson) {
      const profile = JSON.parse(profileJson);
      const { avatarUrl } = profile;
      profile.avatarUrl = avatarUrl === DEFAULT_AVATAR ? null : avatarUrl;
      return profile;
    }
    return defaultUser;
  } catch (e) {
    return defaultUser;
  }
}

function getToken(): UserTokenType | null {
  try {
    const token = sessionStorage.getItem('skypeToken');
    return token ? JSON.parse(token) : null;
  } catch (e) {
    return null;
  }
}

function getSigninName(): string | null {
  try {
    const signinName = sessionStorage.getItem('signinName');
    return signinName ? JSON.parse(signinName) : null;
  } catch (e) {
    return null;
  }
}

/*******************************************************************************************************
 * Hook
 *******************************************************************************************************/

export default function useSkypeUser(): {
  user: UserProfileType;
  token: UserTokenType | null;
  signinName: string | null;
} {
  const [user, setUser] = useState<UserProfileType>(defaultUser);
  const [token, setToken] = useState<UserTokenType | null>(null);
  const [signinName, setSigninName] = useState<string | null>(null);

  useEffect(() => {
    setUser(getUserData());
    setToken(getToken());
    setSigninName(getSigninName());
  }, []);

  return { user, token, signinName };
}
