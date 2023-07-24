import { useState, useEffect } from 'react';
import { Container,Left,Right,Inputs,Image,Redes,AcessRedes,Border,BTN  } from "../../Styles/singupStyled";
import logo from '../../assets/logo.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
export function Singup (){
    const [login, setLogin]= useState({
        name: '',
        email: '',
        pass: '',
    });
    const handlerLoginUser = (e: any) => {
        setLogin((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
      };
      
      useEffect(() => {
        console.log(login);
      }, [login]);
    return(
        <>
            <Container>
                <div>
                    <Left>
                       <div>
                            <Image src={logo} alt="Imagem Logo" title="Imagem Logo"></Image>
                       </div>
                        <div>
                            <div>Bem vindo de volta</div>
                            <div>
                                <span>Se já possui uma conta, faça Login agora</span>
                            </div>
                            </div>
                        <button type="button">Sing In</button>
                    </Left>
                    <Right>
                        <span>Crie sua conta agora!</span>
                        <Inputs>
                            <div>
                                <input type="text" placeholder="Informe seu nome" name="name"
                                onChange={(e) => handlerLoginUser(e)}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Informe seu email" name="email"
                                onChange={(e) => handlerLoginUser(e)}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Informe seu nome"name="pass"
                                onChange={(e) => handlerLoginUser(e)}/>
                            </div>
                        </Inputs>  
                        <BTN>
                            <button type="button">Sing In</button>
                        </BTN>
                        <AcessRedes>
                            <div>
                                <span>Ou</span>
                            </div>
                            <Redes>
                                <Border><FaFacebookF size="20px" color="blue"/></Border>
                                <Border><FcGoogle size="20px"/></Border>
                            </Redes>
                        </AcessRedes>
                    </Right>
                </div>
            </Container>
        </>
    )
}