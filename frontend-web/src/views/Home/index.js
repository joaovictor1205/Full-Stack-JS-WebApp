import React from 'react';
import * as S from './styles';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

function Home() {
  return (
    <S.Container>
      <Header />

      <Footer />
    </S.Container>
  );
}

export default Home;
