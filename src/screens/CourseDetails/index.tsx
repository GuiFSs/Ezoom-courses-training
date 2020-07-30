import React, { useMemo } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native';
import SafeArea from '~/core/components/SafeArea';
import Header from '~/core/components/Header';
import { ICourse } from '~/core/interfaces/Course';
import SectionWrapper from '~/core/components/SectionWrapper';
import CourseImage from './components/CourseImage';

import { Description, ImagesView, ScrollViewWrapper } from './styles';

interface IParams {
  course: ICourse
}

const CourseDetails: React.FC<StackScreenProps<Record<string, IParams>, any>> = (
  { navigation, route },
) => {
  const {
    coverImage, details, images, title,
  } = useMemo(() => route.params.course, [route.params]);
  return (
    <SafeArea>
      <ScrollViewWrapper>
        <Header
          imgUrl={coverImage}
          title={title}
          navigation={navigation}
        />
        <SectionWrapper>
          <ScrollView>
            <Description>
              {details}
            </Description>
            <ImagesView>
              {images.map((image, i) => (
                <CourseImage
                  key={i.toString()}
                  source={{ uri: image }}
                />
              ))}
            </ImagesView>
          </ScrollView>
        </SectionWrapper>
      </ScrollViewWrapper>
    </SafeArea>
  );
};

export default CourseDetails;
