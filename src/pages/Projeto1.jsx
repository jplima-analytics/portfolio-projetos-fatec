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
  color: #ff53ffff;
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

const Projeto1 = () => {
  return (
    <Container>
      <Title>Odara English School</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
          Neste projeto foi desenvolvido um site online com o objetivo de promover a escola de 
          inglês Odara. <br /> <br />A Odara English School é uma escola de inglês, que transmite os seus ensinamentos 
          através de elementos descolonizadores, e com uma cultura afrocentrada. 
          Abarcando as populações preta, indígena, e LGBTQIA+, dentro destes espectros. 
          <br /> <br />A mesma possui o desejo em criar um ambiente de acolhimento e troca entre os 
          alunos e os professores, onde possam compartilhar as suas vivências e criar 
          laços de luta e escuta.
        </Text>
      </Card>

      <Card>
        <CardTitle>Participação e tecnologias utilizadas</CardTitle>
        <Text>
          <ul>
            <li><h4>Participação:</h4>Scrum Master e desenvolvedor front end</li>
            <li> HTML 5 </li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
           
          </ul>
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
          <StyledLink href="https://github.com/jplima-analytics/Odara">
          Odara English School</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto1;
