import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

function QrCode() {

    return (

        <S.Container>
            <Header />

            <S.Content>
                <h1> Capture o QR Code </h1>
                <p> suas atividades serão sincronizadas com a do seu celular </p>
                <S.QrCodeArea>
                    <Qr value="getmacaddress" size={350} />
                </S.QrCodeArea>
            </S.Content>

            <S.ValidationCode>
                <span> Digite o código que apareceu no seu celular </span>
                <input type="text" />
                <button type="button"> Sincronizar </button>
            </S.ValidationCode>

            <Footer />
        </S.Container>
    );
}

export default QrCode;
