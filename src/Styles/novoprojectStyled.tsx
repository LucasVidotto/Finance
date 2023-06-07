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
    
    & > div:first-child{
        display:flex;
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        color: #fff;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
    }
    
`

export const SectionNew = styled.div`
    display: flex;
    margin-top: 8rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    color: #fff;
`
export const Center = styled.div`
    display: flex;
    padding-right: 32px;
    padding-left: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    line-height: 28px;
`
export const Divs = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 48px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 8px;
    background-color: #fff;
`