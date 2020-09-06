import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import { format } from 'date-fns';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

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
    const [ redirect, setRedirect ] = useState(false);

    async function lateVerify(){
        await api.get(`task/filter/late/11:11:11:11:11:11`)
        .then(response => {
            setLateCount(response.data.length);
        });
    }

    async function loadTaskDetail(){
        await api.get(`task/${props.match.params.id}`)
            .then( response => {
                setType(response.data.type);
                setTitle(response.data.title);
                setDone(response.data.done);
                setDescription(response.data.description);
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
                setHour(format(new Date(response.data.when), 'HH:mm'));
            });
    }

    async function save(){

        // Validação dos dados
        if(!title){
            return alert('Informar o título');
        } else if (!description){
            return alert('Informar a descrição');
        } else if (!type){
            return alert('Informar o tipo');
        } else if (!date){
            return alert('Informar a data');
        } else if (!hour){
            return alert('Informar a hora');
        }

        if (props.match.params.id){
            await api.put(`task/${props.match.params.id}`, {
                macAddress,
                type,
                done,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then( () =>
                setRedirect(true)
            );
        }else {
            await api.post('/task', {
                macAddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then( () =>
                setRedirect(true)
            );
        }
    }

    async function remove(){
        const res = window.confirm('Tem certeza?');

        if(res == true){
            await api.delete(`task/${props.match.params.id}`)
            .then( () => setRedirect(true));
        }
    }

    useEffect( () => {
        if(!isConnected){
            setRedirect(true);
        }
        lateVerify();
        loadTaskDetail();
    }, []);

    return (
        <S.Container>
            { redirect && <Redirect to="/" /> }
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

                { props.match.params.id && <button type="button" onClick={remove}>EXCLUIR</button> }
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
