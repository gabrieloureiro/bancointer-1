import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { useAccount } from '../../hooks/accounts';
import Account from './Account';

import * as S from './styles';

const SelectAccount: React.FC = () => {
  const { accounts } = useAccount();

  return accounts.length ? (
    <S.Container>
      <S.Separator />

      <S.Accounts
        data={accounts}
        keyExtractor={account => String(account.id)}
        renderItem={({ item: account, index }) => (
          <Account first={index === 0} account={account} />
        )}
      />

      <S.Separator />

      <S.Footer>
        <TouchableWithoutFeedback>
          <S.FooterText>Entrar com outra conta</S.FooterText>
        </TouchableWithoutFeedback>
      </S.Footer>
    </S.Container>
  ) : (
    <View />
  );
};

export default SelectAccount;
