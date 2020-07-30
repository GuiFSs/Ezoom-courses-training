import React from 'react';

import { StatusBar, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Container, Background, Section, TopIcons, Gearing, Bars, CenterView, Title, Subtitle, BackIcon,
} from './styles';
import { images } from '~/assets';

interface IProps {
  imgUrl: string
  title: string
  subtitle?: string
  navigation?:StackNavigationProp<any, string>
}

const Header: React.FC<IProps> = ({
  imgUrl, title, subtitle, navigation,
}) => (
  <Container>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <Background
      source={{ uri: imgUrl }}
      imageStyle={{
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <Section>
        <TopIcons>
          <Gearing
            source={images.GEARING}
          />
          <Bars
            name="grip-lines"
          />
        </TopIcons>
        <CenterView>
          {navigation && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <BackIcon
                name="chevron-with-circle-left"
              />
            </TouchableOpacity>
          )}
          <Title>
            {title}
          </Title>
          {subtitle && (
            <Subtitle>
              {subtitle}
            </Subtitle>
          )}
        </CenterView>
      </Section>
    </Background>
  </Container>
);

export default Header;
