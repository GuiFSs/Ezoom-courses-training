import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const CourseImage = styled.Image`
  flex: 1;
  height: ${RFValue(90)}px;
  border-radius: 7px;
  margin: 5px;
`;

export default CourseImage;
