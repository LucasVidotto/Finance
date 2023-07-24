import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        48deg,
        hsl(270deg 100% 7%) 2%,
        hsl(253deg 84% 12%) 61%,
        hsl(237deg 70% 18%) 76%,
        hsl(220deg 58% 25%) 85%,
        hsl(204deg 47% 33%) 90%,
        hsl(187deg 38% 41%) 94%,
        hsl(170deg 31% 51%) 97%,
        hsl(154deg 35% 60%) 98%,
        hsl(137deg 40% 71%) 99%,
        hsl(120deg 51% 83%) 100%,
        hsl(104deg 100% 95%) 100%
    );
    background-position: 0px 0px;
    background-size: auto;
    background-repeat: repeat;
    background-attachment: scroll;
    & > div:first-child{
        display: grid;
        grid-template-columns: 30% 70%;
        width: 70%;
        max-height: 400px;
        height: 400px;
    }  
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 2px solid #f0f0f0;
    border-radius: 8px 0 0 8px;
    background-color: rgba(97, 95, 95, 0.678);
    & > div:first-child{
        display: flex;
        width: 100%;
        margin-bottom: 1rem;
    }
    & > div:nth-child(2) > div{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        font-size: 21px;
        color:#bbb9b9;
        font-family: Brush Script MT, Brush Script Std, cursive;
        font-weight: 800;
    }
    & > div:nth-child(2) >div >  span{
        display: flex;
        margin-left: 1rem;
        font-size: 14px;
        color:#7e7d7d;
        font-family: Brush Script MT, Brush Script Std, cursive;
        font-weight: 800;
    }
    & > button{
        
        width: 60%;
        height: 35px;
        color:#f0f0f0;
        background-color: transparent;
        border-top: 1px solid #f0f0f0;
        border-left: 1px solid #f0f0f0;
        border-bottom: 5px solid #f0f0f0;
        border-right: 5px solid #f0f0f0;
        border-radius: 15px;

        :active{
            width: 58%;
            height: 33px;
            border:1px solid #f0f0f0;
        }
    }
`

export const Image = styled.img`
    margin: 0;
    width: 100px;
    height: 60px;
    object-fit: contain;
`
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    border: 2px solid black;
    background-color: white;
    border-radius: 8px;
    & > span{
        margin-bottom: 1rem;
    }

    & > span{
        font-size: 24px;
        font-weight: 900;
        color:#7e7d7d;
        text-shadow: 3px 3px 2px #535252;
    }
       
`

export const BTN = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    width: 100%;
    & > button{
        width: 34%;
        height: 35px;
        color:#f0f0f0;
        background-color: rgba(97, 95, 95, 0.678);
        border-top: 1px solid rgba(97, 95, 95, 0.678);
        border-left: 1px solid rgba(97, 95, 95, 0.678);
        border-bottom: 5px solid rgba(97, 95, 95, 0.678);
        border-right: 5px solid rgba(97, 95, 95, 0.678);
        border-radius: 15px;
        :active{
            width: 32%;
            height: 33px;
            border:1px solid #f0f0f0;
        }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
       & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.3rem;
        width: 46%;
        height: 35px;
        background-color: #6e6d70;
        border: 1px solid rgb(12, 12, 12);
        border-radius: 8px;

        & > input{
            width: 75%;
            height: 100%;
            border:none;
            outline:none;
            background-color: transparent;
            color:#eceaea;

            ::placeholder{
                color: #b9b6b6b3;
            }
        }
    }
`
export const AcessRedes = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &> div:first-child{
        margin: 1rem 0;
    }
`

export const Redes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:1.5rem;
`

export const Border = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 35px;
    height: 32px;
    width: 32px;
    background-color: transparent;
    border-radius: 50%;
    border: solid 1px rgba(131, 128, 128, 0.685);
    cursor: pointer;

    :hover{
        background-color: rgba(131, 128, 128, 0.35);
        border: solid 1px rgba(131, 128, 128, 1);
    }
`
