import styled from 'styled-components';

export const Footers = styled.div`
    position: static;
    margin-top: 80px;
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: #545658;
`

export const Section = styled.section`
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
    /* &:after{
        content: " ";
        display: table;
    } */
`
export const Container = styled.div`
    display: grid;
    width: 75%;
    grid-template-columns: 33% 33% 33%;
    gap: 20px;
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    &> a{
        width: 100%;
        display: block;
        position: static;
        display: block;
        padding-top: 8px;
        padding-bottom: 8px;
        color: rgba(179, 184, 184, 0.54);
        text-decoration: none;

        :hover{
            color: rgba(179, 184, 184, 0.8);
        }
    }
    &> div{
        margin-top: 1.5rem;
    }
    &> div>   a{
        width: 100%;
        display: block;
        position: static;
        padding-top: 8px;
        padding-bottom: 8px;
        color: rgba(179, 184, 184, 0.54);
        text-decoration: none;

        :hover{
            color: rgba(179, 184, 184, 0.8);
        }
    }
`

export const Redes = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   &> a{
        width: 100%;
        display: block;
        position: static;
        padding-top: 8px;
        padding-bottom: 8px;
        color: rgba(179, 184, 184, 0.54);
        text-decoration: none;
        :hover{
            color: rgba(179, 184, 184, 0.8);
        }  
    }
    svg:first-child{
        font-size: 18px;
        color: rgba(179, 184, 184, 0.54);
        margin-right: 0.3rem;
        :hover{
            color: rgba(179, 184, 184, 0.8);
        }
    }
`

export const TitleFooter = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
`
