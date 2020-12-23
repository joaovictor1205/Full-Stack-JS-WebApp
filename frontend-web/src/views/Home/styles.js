import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 10%;
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

export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    a{
        text-decoration:none;
        color:black;
    }

`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;

    h3{
        color: #20295F;
        position: relative;
        top: 30px;
        background: white;
        padding: 0 20px;
    }

`
