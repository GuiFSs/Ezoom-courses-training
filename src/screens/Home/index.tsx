import React from 'react';
import { Container } from './styles';
import Header from '~/core/components/Header';
import CoursesList from './components/CoursesList';
import SectionWrapper from '~/core/components/SectionWrapper';

const Home = () => (
  <Container>
    <Header
      imgUrl="https://multiversomais.com/wp-content/uploads/2020/04/valorantcyph-gs.jpg"
      title="cursos e treinamentos"
      subtitle="Selecione o curso ou treinamento que deseja."
    />
    <SectionWrapper>
      <CoursesList
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
  </Container>
);

export default Home;
