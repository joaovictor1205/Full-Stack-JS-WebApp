import React, { useState, useEffect } from 'react';
import * as S from './styles';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

function QrCode() {

    return (

        <S.Container>
            <Header />

            <S.Content>
                <h1> Capture o QR Code </h1>
                <S.QrCodeArea />
                <p> suas atividades serão sincronizadas com a do seu celular </p>
            </S.Content>
    
            <Footer />
        </S.Container>
    );
}

export default QrCode;
