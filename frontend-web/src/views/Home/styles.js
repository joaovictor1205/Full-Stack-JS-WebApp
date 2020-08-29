import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`
export const FilterArea = styled.div`
    width: 100%;

    margin-top: 30px;

    display:flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

    button{
        border: 0px;
        background: none;
    }

    button:focus{
        outline:0px
    }
`
