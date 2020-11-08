import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';

import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  delay,
  repeat,
  Easing,
  sequence,
} from 'react-native-reanimated';

import generateNewCodeNumbers from '../../utils/generateNewCodeNumbers';

import dotsIcon from '../../assets/icons/dots.png';
import eyeIcon from '../../assets/icons/eye.png';
import isafeIcon from '../../assets/icons/isafe.png';
import alertIcon from '../../assets/icons/alert.png';

import * as S from './styles';

const Isafe: React.FC = () => {
  const isafeIconWidth = useSharedValue(126);
  const codeOpacity = useSharedValue(0);

  const alertWrapperMarginTop = useSharedValue(-35);
  const redBarWidth = useSharedValue(100);

  const [isOpen, setIsOpen] = useState(false);
  const [codeNumbers, setCodeNumbers] = useState(generateNewCodeNumbers());

  const openIsafe = useCallback(() => {
    setIsOpen(true);

    alertWrapperMarginTop.value = withTiming(24, {
      duration: 500,
    });

    isafeIconWidth.value = withTiming(59, {
      duration: 500,
    });

    codeOpacity.value = delay(
      500,
      withTiming(1, {
        duration: 300,
      }),
    );
  }, [isafeIconWidth, codeOpacity, alertWrapperMarginTop]);

  const closeIsafe = useCallback(() => {
    setIsOpen(false);

    codeOpacity.value = withTiming(0, {
      duration: 300,
    });

    alertWrapperMarginTop.value = delay(
      300,
      withTiming(-35, {
        duration: 300,
      }),
    );

    isafeIconWidth.value = delay(
      300,
      withTiming(126, {
        duration: 500,
      }),
    );
  }, [isafeIconWidth, codeOpacity, alertWrapperMarginTop]);

  const activeRedBarAnimation = useCallback(() => {
    redBarWidth.value = repeat(
      sequence(
        withTiming(
          0,
          {
            duration: 15000,
            easing: Easing.linear,
          },
          () => {
            const newCodeNumber = generateNewCodeNumbers();

            setCodeNumbers(newCodeNumber);
          },
        ),
        withTiming(0, { duration: 200 }),
      ),
      -1,
    );
  }, [redBarWidth]);

  const isafeIconAnimation = useAnimatedStyle(() => ({
    width: isafeIconWidth.value,
    height: interpolate(isafeIconWidth.value, [126, 59], [40, 18]),
    top: `${interpolate(isafeIconWidth.value, [126, 59], [50, 0])}%`,
    transform: [
      {
        translateY: interpolate(isafeIconWidth.value, [126, 59], [-20, 0]),
      },
    ],
  }));

  const codeAnimation = useAnimatedStyle(() => ({
    opacity: codeOpacity.value,
  }));

  const alertWrapperAnimation = useAnimatedStyle(() => ({
    marginTop: alertWrapperMarginTop.value,
    opacity: interpolate(alertWrapperMarginTop.value, [-35, 0, 24], [0, 0, 1]),
  }));

  const redBarAnimation = useAnimatedStyle(() => ({
    width: `${redBarWidth.value}%`,
  }));

  useEffect(() => {
    activeRedBarAnimation();
  }, [activeRedBarAnimation]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftSide>
          <S.Image
            style={isafeIconAnimation}
            resizeMode="contain"
            source={isafeIcon}
          />

          <S.Code style={codeAnimation}>
            <S.NumbersWrapper>
              {codeNumbers.map(number => (
                <S.Number key={Math.random() + number}>{number}</S.Number>
              ))}
            </S.NumbersWrapper>

            <S.Timer>
              <S.RedBar style={redBarAnimation} />
            </S.Timer>
          </S.Code>
        </S.LeftSide>

        <S.RightSide>
          {isOpen ? (
            <S.IconWrapper onPress={closeIsafe}>
              <Image source={eyeIcon} />

              <S.IconLabel>Ocultar</S.IconLabel>
            </S.IconWrapper>
          ) : (
            <S.IconWrapper onPress={openIsafe}>
              <Image source={dotsIcon} />

              <S.IconLabel>Gerar</S.IconLabel>
            </S.IconWrapper>
          )}
        </S.RightSide>
      </S.Wrapper>

      <S.WrapperAlert style={alertWrapperAnimation}>
        <S.AlertIcon source={alertIcon} />
        <S.AlertText>
          O Banco Inter nunca pede o código do seu i-safe por e-mail, SMS ou
          telefone.
        </S.AlertText>
      </S.WrapperAlert>
    </S.Container>
  );
};

export default Isafe;
