import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  color: #fff;
  background: linear-gradient(135deg, #042383ff, #021865ff, #000000ff);
  min-height: 100vh;
  font-family: 'Roboto', 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #df6400ff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Card = styled.div`
  background: linear-gradient(135deg, #00031fff, #040071ff, #000000ff); /* degradê azul-preto */
  border-left: 4px solid #003cffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  max-width: 800px;
  line-height: 1.6;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffffffff; /* cor mais próxima do neon para combinar */
`;

const Text = styled.p`
  font-size: 1.1rem;
`;

const StyledLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  color: #ffffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.33);
    text-decoration: underline;
  }
`;

const Projeto3 = () => {
  return (
    <Container>
      <Title>Street Wise - Sistema de Agendamento de Tatuagens</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
          Aprimoramento do sistema web de gestão de negócio para o estúdio Street Wise, 
          que se configura como um estúdio de tatuagem e Body Piercing. <br /> <br />  
          
          Nesta versão aprimorada, a arquitetura do sistema evoluiu de monolítica para arquitetura orientada a microsserviços,
          utilizando a linguagem Python e o framework FastAPI. Tal mudança veio a oferecer mais benefícios na utilização do sistema como:
          rapidez, maior tolerância a falhas, escalabilidade e robustez do código.
          
          <br /> <br />O objetivo final do produto permaneceu sendo o controle centralizado e automatizado de todas as funcionalidades relacionadas ao agendamento de 
          procedimentos no estúdio, como controle de profissionais, materiais utilizados, 
          estoque, e clientes da empresa. Mas desta vez, com maior qualidade técnica e melhoria na usabilidade para o usuário final.
        </Text>
      </Card>

      <Card>
        <CardTitle>Tecnologias utilizadas</CardTitle>
        <Text>
          <ul>
            <li> HTML 5 </li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>Python</li>
          </ul>
          Arquitetura: Orientação a microsserviços com FastAPI
        </Text>
      </Card>

      <Card>
        <CardTitle>Imagens</CardTitle>
        <Text>
          
        </Text>
      </Card>

        <Card>
        <CardTitle>Link do projeto</CardTitle>
        <Text>
          <StyledLink href="https://github.com/TechWeavers/tattoo-management-react">
          Frontend: Street Wise - Sistema de agendamento de tatuagens</StyledLink>
          <StyledLink href="https://github.com/TechWeavers/PI-StreetWise-ERP-3Semestre">
          Backend: Street Wise - Sistema de agendamento de tatuagens</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto3;
