import {useState} from 'react';
import { 
    Container,
    Section, 
    DivTitle,
    SubTitle,
    DivMain,
    ContForms, 
    Forms,
    Inputs,
    InputName,
    Selected,
    DivSub,
    Subimit
} from "../../Styles/recorrenteStyled"
import { MdDriveFileRenameOutline } from "react-icons/md";
export function Recorrente(){
    const [isActive, setIsActive] = useState(false);
    const handlerClick = () =>{
        setIsActive(true);
    }
    const handlerBlur = () =>{
        setIsActive(false);
    }
    return(
        <Container>
            <Section>
                <DivTitle>
                    Vamos preparar a sua campanha!
                </DivTitle>
                <SubTitle >
                    Não se preocupe, você pode alterar essas informações depois.
                </SubTitle>
                <DivMain>
                    <ContForms >
                        <Forms>
                            <div></div>
                            <Inputs>
                                <div>Quero iniciar uma campanha chamada</div>
                                <InputName 
                                    className={isActive ? 'active' : ''}
                                    onClick={handlerClick} onBlur={handlerBlur}
                                >
                                    <MdDriveFileRenameOutline/>
                                    <input type="text" placeholder="Informe um nome" required/>
                                </InputName>
                                <div>na categoria</div>
                                <Selected name="Select" id=""
                                    /* className={isActive ? 'active' : ''}
                                    onClick={handlerClick} onBlur={handlerBlur} */
                                >
                                    <optgroup label="Opções">
                                        <option value="Op1" >Op1</option>
                                        <option value="Op2">Op2</option>
                                        <option value="Op3"selected>Op3</option>
                                        <option value="Op4">Op4</option>
                                    </optgroup>
                                </Selected>
                                <DivSub>
                                    <Subimit type="submit" value="Comece seu trabalho">

                                    </Subimit>
                                </DivSub>
                            </Inputs>
                        </Forms>
                    </ContForms>
                </DivMain>
            </Section>
        </Container>
    )
}