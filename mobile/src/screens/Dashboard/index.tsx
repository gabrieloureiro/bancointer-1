import React, { useCallback } from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import OrangeButton from '../../components/OrangeButton';
import logo from '../../assets/icons/logo-orange.png';

import * as S from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const showWebContent = useCallback(async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  }, []);

  const linkedinUrl = 'https://linkedin.com/in/maurodeouzaa';
  const githubUrl = 'https://github.com/maurodesouza';
  const repositoryUrl = 'https://github.com/maurodesouza/bancointer';

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <S.TextOrange>Ui </S.TextOrange>
          clone
        </S.Title>
        <Image source={logo} />
      </S.Header>

      <S.Avatar source={{ uri: 'https://github.com/maurodesouza.png' }} />

      <S.SocialIcons>
        <S.Icon
          onPress={() => {
            showWebContent(linkedinUrl);
          }}
          name="linkedin"
          size={25}
        />
        <S.Icon
          onPress={() => {
            showWebContent(githubUrl);
          }}
          name="github"
          size={25}
        />
        <S.Icon
          onPress={() => {
            showWebContent(repositoryUrl);
          }}
          name="heart"
          size={25}
        />
      </S.SocialIcons>

      <S.MadeBy>
        Feito com carinho por
        {'\n'}
        <S.MadeByName
          onPress={() => {
            showWebContent(githubUrl);
          }}
        >
          Mauro de Souza
        </S.MadeByName>
      </S.MadeBy>

      <OrangeButton onPress={() => navigation.goBack()}>Sair</OrangeButton>
    </S.Container>
  );
};

export default Dashboard;
