import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Text from '~/core/components/Text';

export const ScrollViewWrapper = styled.View`
  flex: 1;
`;

export const Description = styled(Text)`
  font-size: ${RFValue(13)}px;
`;

export const ImagesView = styled.View`
  margin: 20px 0px;
`;
