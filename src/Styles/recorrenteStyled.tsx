import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99;
    min-height: 100vh;
    padding-top: 110px;
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
`

export const Section =styled.div`
    max-width: 920px;
    margin-right: auto;
    margin-left: auto;
`

export const DivTitle = styled.div`
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
`

export const SubTitle = styled.div`
    margin-top: 8px;
    color: hsla(0, 0%, 100%, 0.58);
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`

export const DivMain = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 56px;
`

export const ContForms = styled.div`
    /* min-width: 560px; */
    align-items: stretch;
    text-align: center;
    display: flex;
    padding: 48px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    border-radius: 8px;
    background-color: #fff;

    :before{
        content: " ";
        display: table;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 2;
    }
`
export const Forms = styled.form`
    margin: 0 0 15px;
`
export const InputName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:20px;
    width: 100%;
    height: 42px;
    margin-top: 0px;
    margin-bottom: 1.3rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f1f4f4;
    -webkit-transition: border 500ms ease;
    transition: border 500ms ease;
    font-size: 15px;

    & > input[type=text]{
        width: 85%;
        height: 80%;
        background-color: transparent;
        border: none;
        outline: none;
        color: #3f4752;

    }
    
    &.active{
        border: 1.5px solid rgb(12, 5, 53);
    }
`

export const Selected = styled.select`
    width: 100%;
    height: 42px;
    text-align: center;
    margin-bottom: 1.6rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f1f4f4;
    -webkit-transition: border 500ms ease;
    transition: border 500ms ease;
    border: 1px solid #ddd;
    color: #3f4752;
    &.active{
        border: 1.5px solid rgb(12, 5, 53);
    }
`

export const Inputs = styled.div`
    box-sizing: border-box;

    & > div:first-child{
        margin-bottom: 1.3rem;
        font-weight: 500;
        margin-top: 0px;
        font-size: 18px;
        line-height: 150%;
    }

    & > div:nth-child(3){
        margin-bottom: 1.3rem;
        font-weight: 500;
        margin-top: 0px;
        font-size: 18px;
        line-height: 150%;
    }

`
export const DivSub = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
export const Subimit = styled.input`
    padding: 8px 45px;
    border-radius: 8px;
    background-color: #64b816;
    box-shadow: 1px 1px 9px 0 rgba(5, 24, 24, 0.26);
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    border-bottom: 5px solid #2b5008;
    border-right: 5px solid #2b5008;
    transition: 0.5s;

    :active{
        border:none;
    }
`
