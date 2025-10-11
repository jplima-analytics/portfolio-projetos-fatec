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
  color: #ffffffff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Card = styled.div`
  background: linear-gradient(135deg, #00031fff, #040071ff, #000000ff);
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

const Sobre = () => {
  return (
    <Container>
      <Title>Principais habilidades</Title>

      <Card>
        <CardTitle>Python avançado</CardTitle>
        <Text>
          Extração, tratamento, limpeza e análise de grandes volumes de dados utilizando frameworks de manipulação de dados
          como Pandas e Numpy. Visualização e plot de dados utilizando Matplotlib, a fim de proporcionar insights assertivos para tomadas de decisão
        </Text>
      </Card>

      <Card>
        <CardTitle>SQL intermediário</CardTitle>
        <Text>
          Modelagem de banco de dados, análises de simples a média complexidade através do processos
          completo de ETL e ferramentas de agregação, junção e cálculos simples.
          Desenvolvimento de relatórios analíticos para tomadas de decisão.
        </Text>
      </Card>

      <Card>
        <CardTitle>Gestão de projetos</CardTitle>
        <Text>
          Análise e definição de requisitos, gerenciamento de escopo, prazo, demandas e equipe. Capacidade de priorização e 
          gestão de backlog, utilizando técnicas de análise de dados para tomadas de decisões assertivas acerca do desenvolvimento do projeto.
        </Text>
      </Card>

      <Card>
        <CardTitle>Idiomas</CardTitle>
        <Text>
          <h4>Inglês Básico</h4>
          <ul>
            <li>Compreensão e uso de expressões simples do dia a dia.</li>
            <li>Capacidade de se apresentar, cumprimentar e fazer perguntas básicas.</li>
            <li>Conhecimento de vocabulário essencial: família, trabalho, compras, cores, números e datas.</li>
            <li>Uso de estruturas gramaticais básicas: presente simples, frases afirmativas, negativas e interrogativas.</li>
            <li>Leitura e escrita de frases curtas e textos simples.</li>
            </ul>
        </Text>
      </Card>

    </Container>
  );
};

export default Sobre;
