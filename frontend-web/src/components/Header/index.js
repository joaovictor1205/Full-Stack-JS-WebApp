import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/"> INÍCIO </Link>
                <span className="divider"></span>

                <Link to="/task"> NOVA TAREFA </Link>
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
