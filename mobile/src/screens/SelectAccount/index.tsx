import React, { useCallback } from 'react';
import { TouchableWithoutFeedback, Alert, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAccount } from '../../hooks/accounts';
import Account from './Account';

import * as S from './styles';

const SelectAccount: React.FC = () => {
  const navigation = useNavigation();

  const { accounts } = useAccount();

  const navigateNewAccountScreen = useCallback(() => {
    if (accounts.length < 3) navigation.navigate('NewAccount');
    else
      Alert.alert(
        'Numero máximo de contas',
        'Você chegou ao numero máximo de 3 contas cadastradas!',
      );
  }, [accounts.length, navigation]);

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
        <TouchableWithoutFeedback onPress={navigateNewAccountScreen}>
          <S.FooterText>Entrar com outra conta</S.FooterText>
        </TouchableWithoutFeedback>
      </S.Footer>
    </S.Container>
  ) : (
    <View />
  );
};

export default SelectAccount;
