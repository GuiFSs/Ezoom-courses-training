import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: 'Montserrat';
`;

export default Text;
