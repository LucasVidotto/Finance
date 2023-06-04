import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 420px;
`;

export const CarouselBackground = styled.div`
  max-width: 100vw;
  flex-grow: 1;
  position: relative;
`;

export const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Navbar = styled.div`
  width: 94%;
  height: 80px;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: 15px;
  left: 25px;
  display: flex;
 
`;

export const Explore = styled.div`
  position: static;
  top: 5px;
  right: -73px;
  display: inline-block;
  font-family: sans-serif;
  margin: 0;
  padding: 9px 17px;
  border-radius: 4px;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
  color: #f1f2f3;
  font-size: 15px;
  font-weight: 300;
  font-family: sans-serif;
  :hover {
  position: static;
  top: 0;
  right: -73px;
  padding-top: 9px;
  padding-bottom: 9px;
  background-color: rgba(124, 252, 0,0.5);
  color: #f1f2f3;
}
`

export const ContainerNav = styled.div`
    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
      
  `;

  export const Comece = styled.div`
    position: static;
      top: 5px;
      right: -73px;
      display: inline-block;
      margin: 0;
      padding: 9px 17px;
      border-radius: 4px;
      -webkit-transition: all 500ms ease;
      transition: all 500ms ease;
      color: #f1f2f3;
      font-size: 15px;
      font-weight: 300;
      text-decoration: none;
      font-family: sans-serif;
      :hover{
        background-color: rgba(124, 252, 0,0.5);
      }
  `
export const LogIn = styled.div`
    text-align: right;
    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    a:first-child{
      position: static;
      display: inline-block;
      vertical-align: top;
      text-align: left;
      top: 5px;
      right: -73px;
      margin: 0;
      padding: 9px 17px;
      border-radius: 4px;
      -webkit-transition: all 500ms ease;
      transition: all 500ms ease;
      background-image: linear-gradient(to right, #7cfc00 0%, #808080  51%, #7cfc00  100%);
      background-size: 200% auto;
      color: #fff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 300;
      font-family: proxima-nova,sans-serif;
      transition: 0.5s;        
      box-shadow: 0 0 20px #eee;
      :hover {
        background-position: right center; 
        color: #fff;
        text-decoration: none;
      }
    }
`

export const DivLogo = styled.div`
    position: relative;
    display: inline-block;
    width: 100px;
    margin-right: 20px;
    /* float: left; */
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;

`
export const LogoCarte = styled.img`
    max-width: 100%;
    width: 100px;
    height:32.5px;
    vertical-align: middle;
    display: inline-block;
    :hover{
      opacity:0.4;
    }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const CarouselText = styled.div`
  display:flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;

  & > button{
    min-width:100px;
    background:rgb(106, 197, 15);
    box-shadow: 3px 2px 5px #eee;
    color: #0d0d0d;
    border-radius: 8px;
    padding: 8px;
    margin-top: 20px;
    cursor:pointer;
    :hover{
      background:rgb(127, 238, 16);
    }
  }
`;

export const CarouselImages = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
`;

export const PreviousButton = styled(Button)`
  left: 30px;
`;

export const NextButton = styled(Button)`
  right: 30px;
`;