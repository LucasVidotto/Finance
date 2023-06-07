import { Container,SectionNew,Divs,Center } from "../../Styles/novoprojectStyled"
import { Flip } from "./Flip"
export function NovoProjeto(){
    return(
        <>
            <Container>
                <div>
                    Olá, primeiro vamos definir a modalidade do seu projeto   
                </div>

                <SectionNew>
                    <Flip />
                </SectionNew>
            </Container>
            
        </>
    )
}