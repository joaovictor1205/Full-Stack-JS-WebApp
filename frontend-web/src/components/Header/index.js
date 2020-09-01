import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header(props){
    return(
        <S.Container>
            <S.LeftSide>
                <img src={ logo } alt="Logo" />
            </S.LeftSide>

            <S.RightSide>
                <a href="#"> INÍCIO </a>
                <span className="divider"></span>

                <a href="#"> NOVA TAREFA </a>
                <span className="divider"></span>

                <a href="#"> SINCRONIZAR CELULAR </a>
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
