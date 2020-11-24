import React, { createContext, useCallback, useContext, useState } from 'react';
import * as Random from 'expo-random';

export type AccountData = {
  id: string;
  name: string;
  account: string;
  githubProfile?: string;
  password: string;
};

type CurrentData = AccountData | undefined;

type AccountContextData = {
  accounts: AccountData[];
  currentAccount: CurrentData;
  addAccount: (accoundData: Omit<AccountData, 'id'>) => void;
  removeAccount: (id: string) => void;
  setCurrentAccount: React.Dispatch<React.SetStateAction<CurrentData>>;
};

const AccountContext = createContext<AccountContextData>(
  {} as AccountContextData,
);

const devProfile: AccountData[] = [
  {
    id: Random.getRandomBytes(12).join(''),
    name: 'Mauro Antonio Aires de Souza',
    account: '1234567-8',
    githubProfile: 'maurodesouza',
    password: '123456',
  },
  {
    id: Random.getRandomBytes(12).join(''),
    name: 'Diego Fernandes',
    account: '8765432-1',
    githubProfile: 'diego3g',
    password: '123456',
  },
  {
    id: Random.getRandomBytes(12).join(''),
    name: 'Willian Justen',
    account: '1231233-2',
    githubProfile: 'willianjusten',
    password: '123456',
  },
];

const AccountProvider: React.FC = ({ children }) => {
  const [accounts, setAccounts] = useState<AccountData[]>(devProfile);
  const [currentAccount, setCurrentAccount] = useState<CurrentData>(undefined);

  const addAccount = useCallback((accoundData: Omit<AccountData, 'id'>) => {
    const newAccount = {
      id: Random.getRandomBytes(12).join(''),
      ...accoundData,
    };

    setAccounts(state => [newAccount, ...state]);
    setCurrentAccount(newAccount);
  }, []);

  const removeAccount = useCallback(
    (id: string) => {
      setAccounts(state => state.filter(account => account.id !== id));

      if (id === currentAccount?.id) setCurrentAccount(undefined);
    },
    [currentAccount],
  );

  return (
    <AccountContext.Provider
      value={{
        accounts,
        currentAccount,
        addAccount,
        removeAccount,
        setCurrentAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

const useAccount = (): AccountContextData => {
  const context = useContext(AccountContext);

  if (!context)
    throw new Error('useAccount must be used within a AccountProvider');

  return context;
};

export { useAccount, AccountProvider };
