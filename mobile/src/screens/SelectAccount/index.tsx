import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import * as S from './styles';

const SelectAccount: React.FC = () => {
  return (
    <S.Container>
      <S.Accounts>
        <S.Account>
          <S.Avatar source={{ uri: 'https://github.com/maurodesouza.png' }} />

          <S.Info>
            <S.InfoName>Mauro Antonio Aires de Souza Junior</S.InfoName>
            <S.InfoAgency>1234567-8</S.InfoAgency>
          </S.Info>
        </S.Account>
      </S.Accounts>

      <S.Footer>
        <TouchableWithoutFeedback>
          <S.FooterText>Entrar com outra conta</S.FooterText>
        </TouchableWithoutFeedback>
      </S.Footer>
    </S.Container>
  );
};

export default SelectAccount;
