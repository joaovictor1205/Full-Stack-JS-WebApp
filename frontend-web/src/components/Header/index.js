import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import isConnected from '../../utils/isConnected';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header(props){

    async function logout(){
        localStorage.removeItem('@ToDoAPP/mac_address');
        window.location.reload();
    }

    return(
        <S.Container>
            <S.LeftSide>
                <p>Skedule</p>
            </S.LeftSide>

            <S.RightSide>
                <Link to="/"> INÍCIO </Link>
                <span className="divider"></span>

                <Link to="/task"> NOVA TAREFA </Link>
                <span className="divider"></span>

                { !isConnected
                    ?
                    <Link href="/qrcode"> SINCRONIZAR CELULAR </Link>
                    :
                    <button type="button" onClick={ logout }>SAIR</button>
                }

                <span className="divider"></span>

                <button onClick={ props.clickNotification } id="notification">
                    <img src={ bell } alt="Notificações"/>
                    <span> { props.lateCount ? props.lateCount : 0 } </span>
                </button>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;
