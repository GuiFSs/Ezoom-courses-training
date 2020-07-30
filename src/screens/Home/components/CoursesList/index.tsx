import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ICourse } from '~/core/interfaces/Course';
import CourseItem from '../CourseItem';

interface IProps {
  courses: ICourse[]
}

const CoursesList: React.FC<IProps> = ({ courses }) => {
  function renderItem({ item }:ListRenderItemInfo<ICourse>) {
    const { coverImage, title } = item;
    return (
      <CourseItem
        imageUrl={coverImage}
        title={title}
        onPress={() => {}}
      />
    );
  }

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default CoursesList;
