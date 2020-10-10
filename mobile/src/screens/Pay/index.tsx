import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';

import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  repeat,
  sequence,
} from 'react-native-reanimated';
import { usePermissions, CAMERA } from 'expo-permissions';

import interpagIcon from '../../assets/icons/interpag.png';

import DraggableModal from '../../components/DraggableModal';
import * as S from './styles';

const Pay: React.FC = () => {
  const [showCamera, setShowCamera] = useState(false);

  const redLineOpacity = useSharedValue(1);
  const [permission] = usePermissions(CAMERA, { ask: true });

  const animation = useCallback(() => {
    redLineOpacity.value = repeat(
      sequence(
        withTiming(0, { duration: 300 }),
        withTiming(1, { duration: 300 }),
        withTiming(1, { duration: 100 }),
      ),
      -1,
    );
  }, [redLineOpacity]);

  const redLineAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: redLineOpacity.value,
    };
  });

  useEffect(() => {
    animation();

    setTimeout(() => {
      setShowCamera(true);
    }, 300);
  }, [animation]);

  return (
    <DraggableModal>
      <S.Header>
        <Image source={interpagIcon} />
      </S.Header>

      {permission && (
        <S.Container>
          {showCamera && (
            <S.Camera>
              <S.OverlayVertical />

              <S.Wrapper>
                <S.OverlayHorizontal />
                <S.Focus>
                  <S.RedLine style={redLineAnimatedStyles} />
                </S.Focus>
                <S.OverlayHorizontal />
              </S.Wrapper>

              <S.OverlayVertical>
                <S.Label>
                  Aponte a sua câmera para fazer a leitura do código QR
                </S.Label>
              </S.OverlayVertical>
            </S.Camera>
          )}
        </S.Container>
      )}
    </DraggableModal>
  );
};

export default Pay;
