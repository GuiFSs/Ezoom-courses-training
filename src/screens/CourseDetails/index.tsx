import React, { useMemo } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import SafeArea from '~/core/components/SafeArea';
import Header from '~/core/components/Header';
import { ICourse } from '~/core/interfaces/Course';

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
      <Header
        imgUrl={coverImage}
        title={title}
        navigation={navigation}
      />
    </SafeArea>
  );
};

export default CourseDetails;
