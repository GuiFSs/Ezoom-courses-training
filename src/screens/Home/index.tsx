import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Header from '~/core/components/Header';
import CoursesList from './components/CoursesList';
import SectionWrapper from '~/core/components/SectionWrapper';
import SafeArea from '~/core/components/SafeArea';
import { ICourse } from '~/core/interfaces/Course';
import courses from '~/services/courses.json';

const Home: React.FC<StackScreenProps<any, any>> = ({ navigation }) => {
  function onPressCourse(course:ICourse) {
    navigation.navigate('CourseDetails', { course });
  }
  return (
    <SafeArea>
      <Header
        imgUrl="https://jeonline.com.br/site/uploads/posts/20-de-dezembro-e-comemorado-o-dia-do-mecanico-5497fef78b4b42b3ce1d80e2eaec919a.jpg"
        title="cursos e treinamentos"
        subtitle="Selecione o curso ou treinamento que deseja."
      />
      <SectionWrapper>
        <CoursesList
          onPressCourse={onPressCourse}
          courses={courses}
        />
      </SectionWrapper>
    </SafeArea>
  );
};

export default Home;
