import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '~/core/components/Text';

export const Container = styled.View`
  width: 100%;
  height: 35%;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Section = styled.View`
  flex:1;
  background-color: rgba(0,0,0,0.7);
  padding: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const TopIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Gearing = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const Bars = styled(Icon)`
  font-size: ${RFValue(30)}px;
  color: #FFF;
`;

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

export const Title = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${RFValue(25)}px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Subtitle = styled(Text)`
  text-align: center;
  color: #FFF;
  margin-top: 10px;
  width: 70%;
`;
