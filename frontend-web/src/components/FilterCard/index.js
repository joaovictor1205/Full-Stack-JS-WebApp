import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png';

function FilterCard(props){
    return (
        <S.Container actived={props.actived}>
            <img src={ filter } alt="Filtro"/>
            <span> { props.title } </span>
        </S.Container>
    );
}

export default FilterCard;
