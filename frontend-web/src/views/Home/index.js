import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './styles';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import FilterCard from '../../components/FilterCard/index';
import TaskCard from '../../components/TaskCard/index';

function Home() {

  const [ filterActived, setFilterActived ] = useState('all');
  const [ tasks, setTasks ] = useState([]);
  const [ lateCount, setLateCount ] = useState();
  const [ redirect, setRedirect ] = useState(false);

  async function loadTasks(){
    await api.get(`task/filter/${filterActived}/${isConnected}`)
    .then(response => {
      setTasks(response.data);
    });
  }

  async function lateVerify(){
    await api.get(`task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length);
    });
  }

  function notification(){
    setFilterActived('late');
  }

  useEffect( () => {
    loadTasks();
    lateVerify();
    if(!isConnected){
      setRedirect(true);
    }
  }, [filterActived]);

  return (
    <S.Container>
      { redirect && <Redirect  to="/qrcode" /> }
      <Header lateCount={ lateCount } clickNotification={ notification } />

      <S.FilterArea>
        <button type="button"         onClick={ () => setFilterActived('all') } >
          <FilterCard title="Todos"   actived={filterActived == 'all'}    />
        </button>

        <button type="button"         onClick={ () => setFilterActived('today') }>
          <FilterCard title="Hoje"    actived={filterActived == 'today'} />
        </button>

        <button type="button"         onClick={ () => setFilterActived('week') }>
          <FilterCard title="Semana"  actived={filterActived == 'week'} />
        </button>

        <button type="button"         onClick={ () => setFilterActived('month') } >
          <FilterCard title="Mês"     actived={filterActived == 'month'} />
        </button>

        <button type="button"         onClick={ () => setFilterActived('year') }>
          <FilterCard title="Ano"     actived={filterActived == 'year'} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3> { filterActived == 'late' ? 'AGENDAMENTOS ATRASADOS' : 'AGENDAMENTOS' } </h3>
      </S.Title>

      <S.Content>
        {
          tasks.map( t => (
            <Link to={`/task/${t._id}`}>
              <TaskCard title={ t.title } type={ t.type } when={ t.when } key={ t._id } />
            </Link>
          ))
        }
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default Home;
