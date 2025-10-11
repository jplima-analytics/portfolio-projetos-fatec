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
  color: #ffea06ff;
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
      <Title>Aprova fácil - Sistema de organização de leads para imobiliária</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
          Aprova fácil é um projeto de aplicativo desenvolvido em parceria com a imobiliária
          Lastrear Imóveis, onde o objetivo principal foi construir um aplicativo para gestão de dados dos
          potenciais clientes que contatam a imobiliária com o intuito de alugar ou comprar um imóvel.
          
          <br /> <br />Dentre as principais características do app, destacam-se um formulário web
          que coleta os dados dos clientes que solicitam análise de crédito, e o aplicativo que recebe as 
          solicitações do formulário e as centraliza em um relatório que pode ser acessado pelos corretores e administradores do
          negócio. <br /> <br />
          
          Tais solicitações centralizadas também permitem filtrar e organizar todo os contatos a partir do status da análise que é definida pelo corretor dentro do aplicativo.
        </Text>
      </Card>

      <Card>
        <CardTitle>Participação e tecnologias utilizadas</CardTitle>
        <Text>
          <ul>
            <li><h4>Participação:</h4>Product Owner e desenvolvedor backend</li>
            <li> HTML 5 </li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>Java</li>
          </ul>
          Arquitetura: Orientação a microsserviços com Spring boot
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
          <StyledLink href="https://github.com/Melancia-Salgada/PI5_website">
          Formulário web frontend: Aprova fácil</StyledLink>
          <StyledLink href="https://github.com/Melancia-Salgada/lastrear-imovel">
          Front end mobile: Aprova fácil</StyledLink> <br />
          <StyledLink href="https://github.com/Melancia-Salgada/aprovafacil">
          Backend: Aprova fácil</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto3;
