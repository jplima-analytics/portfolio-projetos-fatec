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
  color: #00c220ff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Card = styled.div`
  background: linear-gradient(135deg, #00031fff, #040071ff, #000000ff); 
  border-left: 4px solid #003cffff;
  border-color: white;
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
  color: #ffffffff; 
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
      <Title>Warehouse: Software para gestão de fábrica</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
        O warehouse é um sistema de gerenciamento de estoque e
automação industrial desenvolvido para atender uma empresa do ramo de produção
de peças plásticas. <br /> <br /> A solução foi idealizada para centralizar informações
operacionais, ampliar o controle sobre processos internos e reduzir falhas
decorrentes de registros manuais, oferecendo maior confiabilidade e eficiência na
gestão de materiais.
        </Text>
      </Card>

      <Card>
        <CardTitle>Participação e tecnologias utilizadas</CardTitle>
        <Text>
        <ul>
            <li><h4>Participação:</h4> Product Owner</li>
            <li> HTML 5 </li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React Native</li>
            <li>Kotlin</li>
          </ul>
          Arquitetura: Orientação a microsserviços com Kotlin
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
          <StyledLink href="https://github.com/Melancia-Salgada/API-Warehouse">
          Backend: Warehouse</StyledLink> <br />
          <StyledLink href="https://github.com/Melancia-Salgada/FrontWeb-Warehouse">
          Frontend web: Warehouse</StyledLink> <br />
          <StyledLink href="https://github.com/Melancia-Salgada/warehouse-frontend-desktop">
          Frontend desktop: Warehouse</StyledLink> <br />
          <StyledLink href="https://github.com/Melancia-Salgada/FrontMobile-WareHouse">
          Front end mobile: Warehouse</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto3;
