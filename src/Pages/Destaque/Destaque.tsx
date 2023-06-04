import { useState,useEffect } from "react";
import {
    Container,
    Dtleft,
    Dtright,
    Dtmid,
    InfoDiv,
    Div,
    Estatus,
    Barra,
    CardStatus,
    Author,
} from  "../../Styles/destaqueStyled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { RandomImage } from "./RandomImage"
import { porcentagem } from "./useData";
interface ColorsProps{
    color: string;
}
export function Destaque({color}:ColorsProps){
    const [index, setIndex]= useState<number | undefined>(-1);
    const [newIndex, setNewIndex] = useState<string>('');
    useEffect(()=>{
        let randomIndex = Math.floor(Math.random() * porcentagem.length);
        while(randomIndex == index || randomIndex == -1){
            randomIndex = Math.floor(Math.random() * porcentagem.length);
        }
        setIndex(randomIndex);
        setNewIndex(porcentagem[randomIndex])
    },[3])
    return(
        <>
            <Container color={color}>
                <Dtleft>
                    <div>
                        <RandomImage />
                    </div>
                    <Div>
                        <InfoDiv>
                            <h1>Titulo Noticia</h1>
                            <span>Por Nome....</span>
                            <span>Texto da noticia 22</span>
                        </InfoDiv>
                        <Estatus>
                            <Barra quantidade={newIndex}>
                                <div/>  
                            </Barra>
                            <CardStatus>
                                <div><span>{newIndex}%</span></div>
                                <div>
                                    <span>R$ 15.500</span>
                                    <span>Levantamentos</span>
                                </div>
                                <div>
                                    <span>57 dias</span>
                                    <span>Restantes</span>
                                </div>
                            </CardStatus>
                            <Author >
                                <div>
                                    <FaMapMarkerAlt size="13px" color= "#79808b"/>
                                    <span>Local</span>
                                </div>
                                <div>
                                    <AiFillTag size="13px" color= "#79808b"/>
                                    <span>Tipo Produto</span>
                                </div>
                            </Author>
                        </Estatus>  
                    </Div>
                    <div></div>
                    <div></div>
                </Dtleft>
                <Dtmid>
                    <div>
                       <RandomImage />
                    </div>
                    <Div>
                        <InfoDiv>
                            <h1>Titulo Noticia</h1>
                            <span>Ppor Karolyne Rocha</span>
                            <span>Explore o mundo de Arton e viva 
                                aventuras no RPG mais jogado do Brasil!
                            </span>
                        </InfoDiv>
                        <Estatus>
                            <Barra quantidade={newIndex}>
                                <div/>  
                            </Barra>
                            <CardStatus>
                                <div>
                                    <span>{newIndex}%</span>
                                </div>
                                <div>
                                    <span>R$ 15.500</span>
                                    <span>Levantamentos</span>
                                </div>
                                <div>
                                    <span>57 dias</span>
                                    <span>Restantes</span>
                                </div>
                            </CardStatus>
                            <Author >
                                <div>
                                    <FaMapMarkerAlt size="13px" color= "#79808b"/>
                                    <span>Local</span>
                                </div>
                                <div>
                                    <AiFillTag size="13px" color= "#79808b"/>
                                    <span>Tipo Produto</span>
                                </div>
                            </Author>
                        </Estatus>  
                    </Div>
                    
                    <div></div>
                </Dtmid>
                <Dtright>
                    <div>
                        <RandomImage />
                    </div>
                    <Div>
                        <InfoDiv>
                            <h1>Titulo Noticia</h1>
                            <span>Por Nome....</span>
                            <span>Texto da noticia</span>
                            
                        </InfoDiv>
                        <Estatus>
                            <Barra quantidade={newIndex}> 
                                <div/>  
                            </Barra>   
                            <CardStatus>
                                <div>
                                    <span>{newIndex}%</span>
                                </div>
                                <div>
                                    <span>R$ 15.500</span>
                                    <span>Levantamentos</span>
                                </div>
                                <div>
                                    <span>57 dias</span>
                                    <span>Restantes</span>
                                </div>
                            </CardStatus>
                            <Author >
                                <div>
                                    <FaMapMarkerAlt size="13px" color= "#79808b"/>
                                    <span>Local</span>
                                </div>
                                <div>
                                    <AiFillTag size="13px" color= "#79808b"/>
                                    <span>Tipo Produto</span>
                                </div>
                            </Author>
                        </Estatus>           
                    </Div>
                    <div></div>
                    <div></div>
                </Dtright>
            </Container>
        </>
    )
}