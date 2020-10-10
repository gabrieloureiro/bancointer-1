import React from 'react';
import { Image } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import DraggableModal from '../../components/DraggableModal';
import UserInfo from '../../components/UserInfo';

import interpagIcon from '../../assets/icons/interpag.png';
import shareIcon from '../../assets/icons/share.png';

import * as S from './styles';

const Receive: React.FC = () => {
  return (
    <DraggableModal>
      <S.Container>
        <S.Header>
          <S.WhiteSpace />
          <Image source={interpagIcon} />

          <S.WhiteSpace>
            <Image source={shareIcon} />
          </S.WhiteSpace>
        </S.Header>

        <UserInfo
          buttonText="definir valor"
          onPress={() => {
            //
          }}
        />

        <S.QRWrapper>
          <QRCode size={125} value="https://github.com/maurodesouza" />
        </S.QRWrapper>

        <S.Label>
          Apresente o código QR acima para receber um valor na sua conta
        </S.Label>
      </S.Container>
    </DraggableModal>
  );
};

export default Receive;
