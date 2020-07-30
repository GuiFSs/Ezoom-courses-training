import React from 'react';

import {
  Container, TitleImageView, Title, Image,
} from './styles';
import Divider from '~/core/components/Divider';

interface IProps {
  title: string
  imageUrl: string
  onPress(): void
}

const CourseItem: React.FC<IProps> = ({ title, imageUrl, onPress }) => (
  <Container onPress={onPress}>
    <TitleImageView>
      <Title>
        {title}
      </Title>
      <Image
        source={{ uri: imageUrl }}
      />
    </TitleImageView>
    <Divider />
  </Container>
);

export default CourseItem;
