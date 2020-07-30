import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Header from '~/core/components/Header';
import CoursesList from './components/CoursesList';
import SectionWrapper from '~/core/components/SectionWrapper';
import SafeArea from '~/core/components/SafeArea';
import { ICourse } from '~/core/interfaces/Course';

const Home: React.FC<StackScreenProps<any, any>> = ({ navigation }) => {
  function onPressCourse(course:ICourse) {
    navigation.navigate('CourseDetails', { course });
  }
  return (
    <SafeArea>
      <Header
        imgUrl="https://multiversomais.com/wp-content/uploads/2020/04/valorantcyph-gs.jpg"
        title="cursos e treinamentos"
        subtitle="Selecione o curso ou treinamento que deseja."
      />
      <SectionWrapper>
        <CoursesList
          onPressCourse={onPressCourse}
          courses={[
            {
              id: '1',
              title: 'Curso número um para montagem',
              coverImage: 'https://multiversomais.com/wp-content/uploads/2020/04/valorantcyph-gs.jpg',
            },
            {
              id: '2',
              title: 'Curso número um para montagem',
              coverImage: 'https://multiversomais.com/wp-content/uploads/2020/04/valorantcyph-gs.jpg',
            },
          ]}
        />
      </SectionWrapper>
    </SafeArea>
  );
};

export default Home;
