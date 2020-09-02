import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .inative{
        opacity:0.3;
    }

    button{
        border: none;
        background: none;
    }

    button:focus{
        outline:0px
    }
`;

export const Form = styled.div`
    width: 50%;
    margin: 30px 0 100px 0;
`;

export const TypeIcons = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.5;
    }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

`;

export const TextArea = styled.div`
    width: 100%;
    margin: 20px 0;

    display: flex;
    flex-direction: column;

    span{
        color: #707070;
        margin: 5px 0;
    }

    textarea{
        resize: none;
        font-size: 16px;
        border: 1px solid #EE6B26;
        border-radius: 10px;
    }

`;

export const Options = styled.div`
    display:flex;
    justify-content: space-between;

    button{
        color: #20295F;
        font-weight: bold;
        border: none;
        background: none;
        font-size: 16px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 16px;
    }
`;

export const Save = styled.div`
    width: 100%;

    margin-top: 30px;

    button{
        width: 100%;
        background-color: #EE6B26;
        border: none;
        font-size: 20px;
        color: white;
        font-weight: bold;
        padding: 15px;
        border-radius: 30px;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.7;
    }
`;
