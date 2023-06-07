import { useState } from 'react';
import {
    Button, 
    Buttons, 
    CardContainer, 
    FlipCard, 
    FlipCardBack, 
    FlipCardFront, 
    FlipCardInner, 
    Group
} from '../../Styles/flipStyled';

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
                    <div>Assinaturas</div>
                    <div>Seus apoiadores são cobrados automaticamente 
                        todo mês e você saca o dinheiro para 
                        sua conta mensalmente.
                    </div>
                    <div><button>Selecionar</button></div>
                    <div>
                        <div><span>Garanta uma fonte mensal de receita</span></div>
                        <div><span>Ideal para criar um clube de membros</span></div>
                    </div>
                </Group>
            </FlipCardFront>
            <FlipCardBack>
            <Group>
                    <div>PONTUAL</div>
                    <div>Assinaturas</div>
                    <div>Seus apoiadores fazem pagamentos pontuais 
                        e você saca todo o dinheiro arrecadado
                         ao fim do projeto.
                    </div>
                    <div><button>Selecionar</button></div>
                    <div>
                        <div><span>Levante recursos para um projeto específico</span></div>
                        <div><span>Pré-vendas, ações pontuais e vaquinhas</span></div>
                    </div>
                </Group>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </CardContainer>
    );
  }