import React from 'react';
import { Container } from './styles';
import Header from '~/core/components/Header';

const Home = () => (
  <Container>
    <Header
      imgUrl="https://multiversomais.com/wp-content/uploads/2020/04/valorantcyph-gs.jpg"
      title="cursos e treinamentos"
      subtitle="Selecione o curso ou treinamento que deseja."
    />
  </Container>
);

export default Home;
