import React, { useMemo } from 'react';
import { format } from 'date-fns';

import * as S from './styles';
import typeIcons from '../../utils/typeIcons';

function TaskCard(props){

    const date = useMemo(() => format(new Date(props.when), 'dd/MM/YYY') );
    const hour = useMemo(() => format(new Date(props.when), 'HH:mm') );

    return (
        <S.Container>
            <S.TopCard>
                <img src={ typeIcons[props.type] } alt="Ícone da Tarefa" />
                <h3> { props.title } </h3>
            </S.TopCard>

            <S.BottomCard>
                <strong> { date } </strong>
                <span> { hour } </span>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;
