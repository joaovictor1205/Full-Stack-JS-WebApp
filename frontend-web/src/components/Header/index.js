import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header(){
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

                <a href="#" id="notification">
                    <img src={ bell } alt="Notificações"/>
                    <span> 5 </span>
                </a>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;
