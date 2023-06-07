import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin: 10px;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  max-width: 410px;
  max-height: 410px;
  width: 410px;
  height: 410px;
  perspective: 1000px;
  margin-bottom: 3rem;
`;

export const FlipCardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #f1eeee;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #f1eeee;
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const Group = styled.div`
  display: flex;
	flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  & > div{
    width: 100%;
    height: 25%;
  }
  & > div:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 22px;
    line-height: 28px;
    font-weight: 500;
    text-transform: uppercase;
  }

  & > div:nth-child(2){
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }

  & > div:last-child {
    /* margin-bottom: 1rem; */
    padding-left: 24px;
    color: rgba(181, 182, 184, 0.73);
    font-size: 14px;
    line-height: 19px;
  }

`

export const Buttons = styled.button`
  appearance: none;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.75);
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 2rem;
  min-height: 25px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 38%;
  will-change: transform;

  :disable{
    pointer-events: none;
  }

  :hover {
    box-shadow: rgba(255, 255, 255, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`