import { useState } from 'react';
import {
    Button, 
    Buttons, 
    CardContainer, 
    FlipCard, 
    FlipCardBack, 
    FlipCardFront, 
    FlipCardInner, 
    Group,
    Image,
    Select,
} from '../../Styles/flipStyled';
import { AiOutlineCheck } from "react-icons/ai";
const Ass = "https://uploads-ssl.webflow.com/573a70f6d5c3cb6532f8b1a7/5aa8a3e1bed82acb1ed88177_ass-badge.png";
const Tudo = "https://uploads-ssl.webflow.com/573a70f6d5c3cb6532f8b1a7/5aa8a3e1086ff33e030065fd_aon-badge.png";
const flex = "https://uploads-ssl.webflow.com/573a70f6d5c3cb6532f8b1a7/5aa8a3e1eabaa4248d7fce5d_flex-badge.png";
export function Flip() {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <CardContainer>
        <Buttons onClick={handleClick}>Change Plan</Buttons>
        <FlipCard>
          <FlipCardInner isFlipped={isFlipped}>
            <FlipCardFront>
                <Group>
                    <div>Recorrente</div>
                    <div><Image src={Ass} alt="Recorrente" /></div>
                    <div>Seus apoiadores são cobrados automaticamente 
                        todo mês e você saca o dinheiro para 
                        sua conta mensalmente.
                    </div>
                    <div>
                      <Select>Selecionar</Select>{/* transformar em Link, ir para tela de escolha */}
                    </div>
                    <div>
                        <div>
                          <AiOutlineCheck size="16px" color="rgb(53, 216, 21)" style={{marginRight:"0.5rem" }}/>
                          <span>Garanta uma fonte mensal de receita</span>
                        </div>
                        <div>
                          <AiOutlineCheck size="16px" color="rgb(53, 216, 21)" style={{marginRight:"0.5rem" }}/>
                          <span>Ideal para criar um clube de membros</span>
                        </div>
                    </div>
                </Group>
            </FlipCardFront>
            <FlipCardBack>
            <Group>
                    <div>PONTUAL</div>
                    <div>
                      <Image src={Tudo} alt="imagem" />
                      <Image src={flex} alt="imagem" />
                    </div>
                    <div>Seus apoiadores fazem pagamentos pontuais 
                        e você saca todo o dinheiro arrecadado
                         ao fim do projeto.
                    </div>
                    <div> <Select>Selecionar</Select></div>
                    <div>
                        <div>
                          <AiOutlineCheck size="16px" color="rgb(53, 216, 21)" style={{marginRight:"0.5rem" }}/>
                          <span>Levante recursos para um projeto específico</span>
                        </div>
                        <div> 
                          <AiOutlineCheck size="16px" color="rgb(53, 216, 21)"style={{marginRight:"0.5rem" }}/>
                          <span>Pré-vendas, ações pontuais e vaquinhas</span>
                        </div>
                    </div>
                </Group>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </CardContainer>
    );
  }