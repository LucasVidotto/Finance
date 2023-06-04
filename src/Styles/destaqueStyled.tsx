import styled from 'styled-components';

interface QuantidadeProps {
    quantidade:string
}

interface ColorProps{
    color: string;
}

export const Container = styled.div<ColorProps>`
    display:grid;
    background-color: ${(props)=> (props.color)};
    grid-template-columns: 28% 28% 28%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 5rem 0;
    width: 100%;
    height: 100%;
    padding: 30px 0;
`

export const Dtleft = styled.div`

`
export const Imagem = styled.img`
    width: 100%;
    transition: 2s;
    background-position: 50% 50%;
    background-size: cover;
    border-radius:8px 8px 0 0 ;
    box-shadow: 3px 3px 12px rgb(39, 36, 36);
    :hover{
        transform: scale(1.15);
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    border-radius: 0 0 8px 8px;
    background-color: #f0f0f0;
    box-shadow: 3px 3px 12px rgb(39, 36, 36);
`

export const ConBarra = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Estatus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
   /*  height: 60px; */
    border-top: 1px #ddd;
`
export const Barra = styled.div<QuantidadeProps>`
    display:flex;
    width: 88%;
    overflow: hidden;
    min-height: 13px;
    border: 2px solid #ddd;
    /* box-shadow: 1px 1px 12px rgba(39, 36, 36, 0.541); */
    border-radius: 8px;
    div:first-child{
        width: ${(props) =>( props.quantidade  ? props.quantidade+"%" : "0")};
        position: relative;
        /* height: 100%; */
        background-color: rgb(126, 252, 0);
        border-radius:8px;
    }
`

export const CardStatus = styled.div`
    display: flex;
    flex-direction: row;
    gap:3%;
    align-items: center;
    margin: 0.5rem 3px;
    width: 100%;
    min-height: 64px;
    border-top: 1px #ddd;
    div:first-child{
        display:flex;
        max-width: 25%;
        width: 25%;
        margin-left: 0.5rem;
        span:first-child{
            font-size: 1.2em;
            /* font-family: proxima-nova,sans-serif; */
        }
    }
    div:nth-child(2){
        display:flex;
        flex-direction: column;
        max-width: 35%;
        width: 35%;
        overflow: auto;
    }
    div:nth-child(3){
        display:flex;
        flex-direction: column;
        align-items: end;
        margin-right: 3%;
        max-width: 33%;
        width: 33%;
        overflow: auto;
    }
    div > span:first-child{
        font-size: 1em;
        line-height: 150%;
        color:#3c4147;
        font-weight: 600;
        word-wrap: break-word;
        /* font-family: proxima-nova,sans-serif; */
    }
    div > span:nth-child(2){
        font-size: 0.8em;
        line-height: 150%;
        color:#565e69;
        font-weight: 600;
        word-wrap: break-word;
        /* font-family: proxima-nova,sans-serif; */
    }
`

export const Author = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 5px;
    padding: 13px 0;
    border-top: 2px solid #e4e4e4;

    &> div{
        width: 35%;
        margin-left: 1rem;
    }
    & > div > span{
        margin-left: 0.4rem;
        font-size: 0.8125em;
        color: #757677;
    }
    
`
export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 215px;
    
    h1:first-child{
        margin: 1rem auto;
        color:rgb(63, 71, 82);
        font-family: proxima-nova, sans-serif;
        
    }
    span:nth-child(2){
        color: #79808b;
        font-size:13px;
    }
    span:nth-child(3){
        color: #3f4752;
        margin:auto 0;
    }
`

export const Dtmid = styled.div`


`
export const Dtright = styled.div`

`
