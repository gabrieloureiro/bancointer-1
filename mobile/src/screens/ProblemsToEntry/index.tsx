import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import DraggableModal from '../../components/DraggableModal';
import OrangeButton from '../../components/OrangeButton';

import heroImage from '../../assets/images/hero-problems-screen.png';

import * as S from './styles';

const ProblemsToEntry: React.FC = () => {
  const navigation = useNavigation();

  return (
    <DraggableModal>
      <S.Container>
        <Image source={heroImage} />

        <S.Text>Confira essas dicas para entrar no app:</S.Text>

        <S.Tips showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback>
            <>
              <S.Wrapper>
                <S.Dot />

                <S.TipText>
                  Confira se sua conexão com a internet está ok.
                </S.TipText>
              </S.Wrapper>

              <S.Wrapper>
                <S.Dot />

                <S.TipText>
                  Verifique se a data e a hora do seu aparelho estão como
                  automáticas, com fuso horário de Brasília (GMT-03:00).
                </S.TipText>

                <S.TipTextItalic>
                  - Vá às Configurações do seu aparelho, selecione
                  “Gerenciamento geral” ou “Configurações adicionais””Data e
                  hora”e verifique se a opção “Data e hora automáticas” está
                  ativada.
                </S.TipTextItalic>

                <S.WhiteSpace />

                <S.TipTextItalic>
                  - Caso esteja nas Configurações, selecione “Aplicativos”,
                  entre em “Banco Inter”, clicque em “Limpar Dados” e então em
                  “Limpar cache”.
                </S.TipTextItalic>
              </S.Wrapper>

              <S.Wrapper>
                <S.Dot />

                <S.TipText>
                  É preciso que seu aparelho esteja com algum tipo de bloqueio
                  de tela ou biometria
                </S.TipText>

                <S.TipTextItalic>
                  - Vá às Configurações do seu aparelho, selecione “Segurança”,
                  depois “Bloqueio de tela” e defina sua senha.
                </S.TipTextItalic>
              </S.Wrapper>
            </>
          </TouchableWithoutFeedback>
        </S.Tips>

        <S.Footer>
          <OrangeButton onPress={() => navigation.goBack()}>
            Ok, entendi!
          </OrangeButton>
        </S.Footer>
      </S.Container>
    </DraggableModal>
  );
};

export default ProblemsToEntry;
