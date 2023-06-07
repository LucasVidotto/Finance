import { Footers,Section,TitleFooter,Container,Info,Redes } from "../../Styles/footerStyled";
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

export function Footer(){
    return(
        <>
            <Footers>
            <Section> 
                <Container>
                    <Info>
                        <TitleFooter>Bem Vindo</TitleFooter>
                        <a href="#">Quem Somos</a>{/* Trocar por Link, nevagar interno site */}
                        <a href="#">Como Funiona</a>
                        <a href="#">Blog</a>
                        <a href="#">Nosso Time ❤️️</a>
                        <a href="#">Imprensa</a>
                        <a href="#">Retrospectiva 2020</a>
                       <div>
                            <TitleFooter>Redes Sociais</TitleFooter>
                            <Redes>
                                <AiOutlineFacebook />
                                <a href="#">FaceBook</a>
                            </Redes>
                            <Redes>
                                <AiFillTwitterCircle />
                                <a href="#">Twitter</a>
                            </Redes>
                            <Redes>
                                <AiOutlineInstagram />
                                <a href="#">Instagram</a>
                            </Redes>
                            <Redes>
                                <AiFillGithub />
                                <a href="#">Github </a>
                            </Redes>
                       </div>
                    </Info>
                    <Info>
                        <TitleFooter>Ajuda </TitleFooter>
                        <a href="#">Central de Suporte</a>
                        <a href="#">Contato</a>
                        <a href="#">Atualizações 🚧</a>
                        <a href="#">Escola Catarse</a>
                        <a href="#">Nossa Taxa</a>
                        <a href="#">Retrato FC Brasil 2013/2014</a>
                        <a href="#">Responsabilidades e Segurança</a>
                        <a href="#">Termos de uso</a>
                        <a href="#">Política de Privacidade</a>
                        
                    </Info>
                    <Info>
                        <TitleFooter>Faça uma Campanha</TitleFooter>
                        <a href="#">Comece seu Projeto</a>
                        <a href="#">Música no Catarse</a>
                        <a href="#">Publicações Independentes</a>
                        <a href="#">Jornalismo</a>
                        <a href="#">Catarse Assinaturas</a>
                    </Info>
                </Container>
                <div></div>
            </Section>
            </Footers>
        </>
    )
}