import React from 'react';

import { StatusBar } from 'react-native';
import {
  Container, Background, Section, TopIcons, Gearing, Bars, CenterView, Title, Subtitle,
} from './styles';
import { images } from '~/assets';

interface IProps {
  imgUrl: string
  title: string
  subtitle?: string
}

const Header: React.FC<IProps> = ({ imgUrl, title, subtitle }) => (
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
