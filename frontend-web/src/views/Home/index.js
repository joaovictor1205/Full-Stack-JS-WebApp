import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import api from '../../services/api';

// Components Import
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import FilterCard from '../../components/FilterCard/index';
import TaskCard from '../../components/TaskCard/index';

function Home() {


  const [ filterActived, setFilterActived ] = useState('all');
  const [ tasks, setTasks ] = useState([]);
  const [ lateCount, setLateCount ] = useState();

  async function loadTasks(){
    await api.get(`task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data);
    });
  }

  async function lateVerify(){
    await api.get(`task/filter/late/11:11:11:11:11:11`)
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
  }, [filterActived]);

  return (
    <S.Container>
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
        <h3> { filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS' } </h3>
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
