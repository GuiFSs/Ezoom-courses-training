import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Text from '~/core/components/Text';

export const Container = styled.TouchableOpacity`
  padding: 0px 10px;
  margin: 10px 0px;
`;

export const TitleImageView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled(Text)`
  width: 70%;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  border-radius: 15px;
`;
