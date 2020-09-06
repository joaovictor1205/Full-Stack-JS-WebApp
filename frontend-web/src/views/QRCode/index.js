import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

function QrCode() {

    const [ mac, setMac ] = useState();
    const [ redirect, setRedirect ] = useState(false);

    async function saveMac(){
        if(!mac){
            alert('Informe o Mac Address');
        }else{
            await localStorage.setItem('@ToDoAPP/mac_address', mac);
            setRedirect(true);
            window.location.reload();
        }
    }

    return (

        <S.Container>
            { redirect && <Redirect to="/" /> }
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
                <input type="text" onChange={ e => setMac(e.target.value) } value={ mac } />
                <button type="button" onClick={ saveMac }> Sincronizar </button>
            </S.ValidationCode>

            <Footer />
        </S.Container>
    );
}

export default QrCode;
