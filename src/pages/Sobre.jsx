import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  color: #fff;
  background: linear-gradient(135deg, #042383ff, #021865ff, #000000ff);
  min-height: 100vh;
  font-family: 'Roboto', 'Courier New', monospace;
  display: flex;
  font-weight: 500;
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
      <Title>Sobre Mim</Title>

      <Card>
        <CardTitle>Quem Sou</CardTitle>
        <Text>
          Olá! Meu nome é João Pedro de Lima e Silva, tenho 21 anos, e atualmente estou 
          cursando o 6º semestre do curso Desenvolvimento de
          Software Multiplataforma na Fatec Zona Leste, com início em fevereiro/2023 e previsão de conclusão em dezembro/2025. Tenho interesse em análise de dados, automação de processos e
          desenvolvimento de produtos digitais.
        </Text>
      </Card>

      <Card>
        <CardTitle>Experiência Profissional</CardTitle>
        <Text>
          Trabalho como analista de operações e automação de processos na Alice Saúde, uma startup inovadora no setor de saúde. Iniciei
          minhas atividades na empresa em março/2024.
          Minhas atribuições incluem execução de processos operacionais relacionados a cadastro, e automação de processos operacionais orientados a dados utilizando Python, SQL
          e frameworks de AI como PLN e Machine Learning.
        </Text>
      </Card>

      <Card>
        <CardTitle>Cursos de extensão</CardTitle>
        <Text>
          Também realizei alguns cursos d eextensão relacionados a área de desenvolvimento,
          dados e automação de processos, são os cursos: <br /> <br />
          <ul>
            <li><h4>Power BI Completo - do Básico ao Avançado</h4></li>
            <li>10 Horas</li>
            <li>Instituição: Udemy</li>

            <br />
            <br />

            <li><h4>Manipulação e Análise de Dados com Python e Pandas</h4></li>
            <li>7 Horas</li>
            <li>Instituição: Udemy</li>

            <br />
            <br />

             <li><h4>Lógica de Programação Essencial</h4></li>
             <li>4 Horas</li>
             <li>Instituição: DIO - Digital Innovation One</li>

          </ul>
           <br />
        </Text>
      </Card>

      <Card>
        <CardTitle>Contato</CardTitle>
        <Text>
          Bora marcar um café e conversar sobre Python e Harry Potter? <br />
          Linkedin: <StyledLink href="https://www.linkedin.com/in/jo%C3%A3o-pedro-de-lima-e-silva-a59058245/">
            João Pedro de Lima e Silva
          </StyledLink> <br />
          Email: jplima.dev@outlook.com
        </Text>
      </Card>
    </Container>
  );
};

export default Sobre;
