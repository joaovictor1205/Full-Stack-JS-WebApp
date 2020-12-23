import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom: 100px;
`

export const Content = styled.div`
    width:50%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    h1{
        color: #EE6B26;
    }

    p{
        color:#20295F;
    }
`;

export const QrCodeArea = styled.div`
    width:100%;

    display:flex;
    justify-content:center;

`;

export const ValidationCode = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;

    span{
        text-transform:uppercase;
        font-weight:bold;
    }

    input{
        font-size:18px;
        padding:10px;
        text-align:center;
    }

    button{
        font-weight:bold;
        background: #EE6B26;
        color:white;
        font-size:18px;
        padding:10px;
        border-radius: 30px;
        border: none;
        cursor:pointer;
        margin-top:10px;

        &:hover{
            background:#20295F;
        }
    }

`;