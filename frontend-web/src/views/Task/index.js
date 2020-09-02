import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import api from '../../services/api';

// ICONS IMPORT
import TypeIcons from '../../utils/typeIcons';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

function Task(props) {

    const [ lateCount, setLateCount ] = useState();
    const [ type, setType ] = useState();
    const [ id, setId ] = useState();
    const [ done, setDone ] = useState(false);
    const [ title, setTitle ] = useState();
    const [ description, setDescription ] = useState();
    const [ date, setDate ] = useState();
    const [ hour, setHour ] = useState();
    const [ macAddress, setMacAddress ] = useState('11:11:11:11:11:11');

    async function lateVerify(){
        await api.get(`task/filter/late/11:11:11:11:11:11`)
        .then(response => {
            setLateCount(response.data.length);
        });
    }

    async function loadTaskDetail(){
        await api.get(`task/${props.match.params.id}`)
            .then( response => {
                setType(response.data.type)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:mm'))
            })
    }

    async function save(){
        await api.post('/task', {
            macAddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        }).then( () =>
            alert('Tarefa cadastrada')
        );
    }

    useEffect( () => {
        lateVerify();
        loadTaskDetail();
    }, []);

    return (
        <S.Container>
            <Header lateCount={ lateCount }/>

            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map ( (icon, index) => (
                            index > 0 &&
                            <button type='button' onClick={ () => setType(index) }>
                            <img src={ icon }
                                alt="Ícone"
                                className={ type && type != index && 'inative' }
                            />
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span> Título </span>
                    <input
                        type="text"
                        placeholder="Título da tarefa"
                        onChange={ e => setTitle(e.target.value) }
                        value={ title }
                    />
                </S.Input>

                <S.TextArea>
                    <span> Descrição </span>
                    <textarea
                        rows={5}
                        placelholder="Detalhes da tarefa"
                        onChange={ e => setDescription(e.target.value) }
                        value={ description }
                    />
                </S.TextArea>

                <S.Input>
                    <span> Data </span>
                    <input
                        type="date"
                        onChange={ e => setDate(e.target.value) }
                        value={ date }
                    />
                </S.Input>

                <S.Input>
                    <span> Hora </span>
                    <input
                        type="time"
                        onChange={ e => setHour(e.target.value) }
                        value={ hour }
                    />
                </S.Input>

                <S.Options>
                    <div>
                        <input
                            type="checkbox"
                            checked={ done }
                            onChange={ () => setDone(!done) }
                        />
                        <span>CONCLUÍDO</span>
                    </div>

                    <button type="button">EXCLUIR</button>
                </S.Options>

                <S.Save>
                    <button type="button" onClick={save}>
                        Salvar
                    </button>
                </S.Save>
            </S.Form>

            <Footer />
        </S.Container>
    );
}

export default Task;
