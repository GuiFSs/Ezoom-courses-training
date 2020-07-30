import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ICourse } from '~/core/interfaces/Course';
import CourseItem from '../CourseItem';

interface IProps {
  courses: ICourse[]
  onPressCourse(course: ICourse): void
}

const CoursesList: React.FC<IProps> = ({ courses, onPressCourse }) => {
  function renderItem({ item }:ListRenderItemInfo<ICourse>) {
    const { coverImage, title } = item;
    console.log(JSON.stringify(courses, null, 1));
    return (
      <CourseItem
        imageUrl={coverImage}
        title={title}
        onPress={() => onPressCourse(item)}
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
